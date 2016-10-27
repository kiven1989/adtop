var gulp = require('gulp');
var sass = require('gulp-sass');

var cleanCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');

var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;


gulp.task('sass',function(){
	var processors = [
			autoprefixer({ browsers: ["ie >= 7","ie_mob >= 10","ff >= 1","chrome >= 1","safari >= 1","opera >= 1","ios >= 5","android >= 2.3","bb >= 10"]})
		];
	gulp.src('css/*.scss')
		.pipe(sass())
		.on('error',function(err){
			console.log(err.message);
			this.end();
		})
		.pipe(gulp.dest('css/'))
		.pipe(reload({stream: true}));
})

//静态服务器
gulp.task('browser-sync',function(){
	browserSync.init({
		server : {
			baseDir : './' //当前gulpfile.js所在目录
		}
	});
	//listen scss files change
	gulp.watch('css/*.scss',['sass']);
	//listen html files change
	gulp.watch("*.html").on('change', reload); 	
	//listen js files change
	gulp.watch('js/*.js').on('change',reload);
	//listen image files change
	gulp.watch('img/**').on('change',reload); 
})

gulp.task('css:dev',function(){
	return gulp.src('css/**/*.css')
		.pipe(cleanCss())
		.pipe(gulp.dest('css/'))
})
gulp.task('js:dev',function(){
	return gulp.src('js/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
})



gulp.task('build',['css:dev','js:dev'],function(){
	console.log('线上打包完成!');
})

gulp.task('default',['browser-sync'],function(){
	console.log('开发')
})


