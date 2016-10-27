;(function(){
	//1.全局变量
	var Gvar = {
		//模拟省市数据
		cityList : [{"code":"code_1","name":"北京","city":[{"code":"code_2","name":"北京"}]},{"code":"code_3","name":"天津","city":[{"code":"code_4","name":"天津"}]},{"code":"code_5","name":"河北","city":[{"code":"code_6","name":"石家庄"},{"code":"code_7","name":"唐山"},{"code":"code_8","name":"秦皇岛"},{"code":"code_9","name":"邯郸"},{"code":"code_10","name":"邢台"},{"code":"code_11","name":"保定"},{"code":"code_12","name":"张家口"},{"code":"code_13","name":"承德"},{"code":"code_14","name":"沧州"},{"code":"code_15","name":"廊坊"},{"code":"code_16","name":"衡水"}]},{"code":"code_17","name":"山西","city":[{"code":"code_18","name":"太原"},{"code":"code_19","name":"大同"},{"code":"code_20","name":"阳泉"},{"code":"code_21","name":"长治"},{"code":"code_22","name":"晋城"},{"code":"code_23","name":"朔州"},{"code":"code_24","name":"忻州"},{"code":"code_25","name":"吕梁"},{"code":"code_26","name":"晋中"},{"code":"code_27","name":"临汾"},{"code":"code_28","name":"运城"}]},{"code":"code_29","name":"内蒙古","city":[{"code":"code_30","name":"呼和浩特"},{"code":"code_31","name":"包头"},{"code":"code_32","name":"乌海"},{"code":"code_33","name":"赤峰"},{"code":"code_34","name":"呼伦贝尔"},{"code":"code_35","name":"兴安盟"},{"code":"code_36","name":"通辽"},{"code":"code_37","name":"锡林郭勒盟"},{"code":"code_38","name":"乌兰察布盟"},{"code":"code_39","name":"伊克昭盟"},{"code":"code_40","name":"巴彦淖尔盟"},{"code":"code_41","name":"阿拉善盟"}]},{"code":"code_42","name":"辽宁","city":[{"code":"code_43","name":"沈阳"},{"code":"code_44","name":"大连"},{"code":"code_45","name":"鞍山"},{"code":"code_46","name":"抚顺"},{"code":"code_47","name":"本溪"},{"code":"code_48","name":"丹东"},{"code":"code_49","name":"锦州"},{"code":"code_50","name":"营口"},{"code":"code_51","name":"阜新"},{"code":"code_52","name":"辽阳"},{"code":"code_53","name":"盘锦"},{"code":"code_54","name":"铁岭"},{"code":"code_55","name":"朝阳"},{"code":"code_56","name":"葫芦岛"},{"code":"code_57","name":"其他"}]},{"code":"code_58","name":"吉林","city":[{"code":"code_59","name":"长春"},{"code":"code_60","name":"吉林"},{"code":"code_61","name":"四平"},{"code":"code_62","name":"辽源"},{"code":"code_63","name":"通化"},{"code":"code_64","name":"白山"},{"code":"code_65","name":"松原"},{"code":"code_66","name":"白城"},{"code":"code_67","name":"延边朝鲜族自治州"},{"code":"code_68","name":"其他"}]},{"code":"code_69","name":"黑龙江","city":[{"code":"code_70","name":"哈尔滨"},{"code":"code_71","name":"齐齐哈尔"},{"code":"code_72","name":"鹤岗"},{"code":"code_73","name":"双鸭山"},{"code":"code_74","name":"鸡西"},{"code":"code_75","name":"大庆"},{"code":"code_76","name":"伊春"},{"code":"code_77","name":"牡丹江"},{"code":"code_78","name":"佳木斯"},{"code":"code_79","name":"七台河"},{"code":"code_80","name":"黑河"},{"code":"code_81","name":"绥化"},{"code":"code_82","name":"大兴安岭地区"},{"code":"code_83","name":"其他"}]},{"code":"code_84","name":"上海","city":[{"code":"code_85","name":"上海"}]},{"code":"code_86","name":"江苏","city":[{"code":"code_87","name":"南京"},{"code":"code_88","name":"苏州"},{"code":"code_89","name":"无锡"},{"code":"code_90","name":"常州"},{"code":"code_91","name":"镇江"},{"code":"code_92","name":"南通"},{"code":"code_93","name":"泰州"},{"code":"code_94","name":"扬州"},{"code":"code_95","name":"盐城"},{"code":"code_96","name":"连云港"},{"code":"code_97","name":"徐州"},{"code":"code_98","name":"淮安"},{"code":"code_99","name":"宿迁"},{"code":"code_100","name":"其他"}]},{"code":"code_101","name":"浙江","city":[{"code":"code_102","name":"杭州"},{"code":"code_103","name":"宁波"},{"code":"code_104","name":"温州"},{"code":"code_105","name":"嘉兴"},{"code":"code_106","name":"湖州"},{"code":"code_107","name":"绍兴"},{"code":"code_108","name":"金华"},{"code":"code_109","name":"衢州"},{"code":"code_110","name":"舟山"},{"code":"code_111","name":"台州"},{"code":"code_112","name":"丽水"},{"code":"code_113","name":"其他"}]},{"code":"code_114","name":"安徽","city":[{"code":"code_115","name":"合肥"},{"code":"code_116","name":"芜湖"},{"code":"code_117","name":"蚌埠"},{"code":"code_118","name":"淮南"},{"code":"code_119","name":"马鞍山"},{"code":"code_120","name":"淮北"},{"code":"code_121","name":"铜陵"},{"code":"code_122","name":"安庆"},{"code":"code_123","name":"黄山"},{"code":"code_124","name":"滁州"},{"code":"code_125","name":"阜阳"},{"code":"code_126","name":"宿州"},{"code":"code_127","name":"巢湖"},{"code":"code_128","name":"六安"},{"code":"code_129","name":"亳州"},{"code":"code_130","name":"池州"},{"code":"code_131","name":"宣城"},{"code":"code_132","name":"其他"}]},{"code":"code_133","name":"福建","city":[{"code":"code_134","name":"福州"},{"code":"code_135","name":"厦门"},{"code":"code_136","name":"莆田"},{"code":"code_137","name":"三明"},{"code":"code_138","name":"泉州"},{"code":"code_139","name":"漳州"},{"code":"code_140","name":"南平"},{"code":"code_141","name":"龙岩"},{"code":"code_142","name":"宁德"},{"code":"code_143","name":"其他"}]},{"code":"code_144","name":"江西","city":[{"code":"code_145","name":"南昌"},{"code":"code_146","name":"景德镇"},{"code":"code_147","name":"萍乡"},{"code":"code_148","name":"九江"},{"code":"code_149","name":"新余"},{"code":"code_150","name":"鹰潭"},{"code":"code_151","name":"赣州"},{"code":"code_152","name":"吉安"},{"code":"code_153","name":"宜春"},{"code":"code_154","name":"抚州"},{"code":"code_155","name":"上饶"},{"code":"code_156","name":"其他"}]},{"code":"code_157","name":"山东","city":[{"code":"code_158","name":"济南"},{"code":"code_159","name":"青岛"},{"code":"code_160","name":"淄博"},{"code":"code_161","name":"枣庄"},{"code":"code_162","name":"东营"},{"code":"code_163","name":"烟台"},{"code":"code_164","name":"潍坊"},{"code":"code_165","name":"济宁"},{"code":"code_166","name":"泰安"},{"code":"code_167","name":"威海"},{"code":"code_168","name":"日照"},{"code":"code_169","name":"莱芜"},{"code":"code_170","name":"临沂"},{"code":"code_171","name":"德州"},{"code":"code_172","name":"聊城"},{"code":"code_173","name":"滨州"},{"code":"code_174","name":"菏泽"},{"code":"code_175","name":"其他"}]},{"code":"code_176","name":"河南","city":[{"code":"code_177","name":"郑州"},{"code":"code_178","name":"开封"},{"code":"code_179","name":"洛阳"},{"code":"code_180","name":"平顶山"},{"code":"code_181","name":"安阳"},{"code":"code_182","name":"鹤壁"},{"code":"code_183","name":"新乡"},{"code":"code_184","name":"焦作"},{"code":"code_185","name":"濮阳"},{"code":"code_186","name":"许昌"},{"code":"code_187","name":"漯河"},{"code":"code_188","name":"三门峡"},{"code":"code_189","name":"南阳"},{"code":"code_190","name":"商丘"},{"code":"code_191","name":"信阳"},{"code":"code_192","name":"周口"},{"code":"code_193","name":"驻马店"},{"code":"code_194","name":"焦作"},{"code":"code_195","name":"其他"}]},{"code":"code_196","name":"湖北","city":[{"code":"code_197","name":"武汉"},{"code":"code_198","name":"黄石"},{"code":"code_199","name":"十堰"},{"code":"code_200","name":"荆州"},{"code":"code_201","name":"宜昌"},{"code":"code_202","name":"襄樊"},{"code":"code_203","name":"鄂州"},{"code":"code_204","name":"荆门"},{"code":"code_205","name":"孝感"},{"code":"code_206","name":"黄冈"},{"code":"code_207","name":"咸宁"},{"code":"code_208","name":"随州"},{"code":"code_209","name":"恩施土家族苗族自治州"},{"code":"code_210","name":"仙桃"},{"code":"code_211","name":"天门"},{"code":"code_212","name":"潜江"},{"code":"code_213","name":"神农架林区"},{"code":"code_214","name":"其他"}]},{"code":"code_215","name":"湖南","city":[{"code":"code_216","name":"长沙"},{"code":"code_217","name":"株洲"},{"code":"code_218","name":"湘潭"},{"code":"code_219","name":"衡阳"},{"code":"code_220","name":"邵阳"},{"code":"code_221","name":"岳阳"},{"code":"code_222","name":"常德"},{"code":"code_223","name":"张家界"},{"code":"code_224","name":"益阳"},{"code":"code_225","name":"郴州"},{"code":"code_226","name":"永州"},{"code":"code_227","name":"怀化"},{"code":"code_228","name":"娄底"},{"code":"code_229","name":"湘西土家族苗族自治州"},{"code":"code_230","name":"其他"}]},{"code":"code_231","name":"广东","city":[{"code":"code_232","name":"广州"},{"code":"code_233","name":"深圳"},{"code":"code_234","name":"东莞"},{"code":"code_235","name":"中山"},{"code":"code_236","name":"潮州"},{"code":"code_237","name":"揭阳"},{"code":"code_238","name":"云浮"},{"code":"code_239","name":"珠海"},{"code":"code_240","name":"汕头"},{"code":"code_241","name":"韶关"},{"code":"code_242","name":"佛山"},{"code":"code_243","name":"江门"},{"code":"code_244","name":"湛江"},{"code":"code_245","name":"茂名"},{"code":"code_246","name":"肇庆"},{"code":"code_247","name":"惠州"},{"code":"code_248","name":"梅州"},{"code":"code_249","name":"汕尾"},{"code":"code_250","name":"河源"},{"code":"code_251","name":"阳江"},{"code":"code_252","name":"清远"}]},{"code":"code_253","name":"广西","city":[{"code":"code_254","name":"南宁"},{"code":"code_255","name":"柳州"},{"code":"code_256","name":"桂林"},{"code":"code_257","name":"梧州"},{"code":"code_258","name":"北海"},{"code":"code_259","name":"防城港"},{"code":"code_260","name":"钦州"},{"code":"code_261","name":"贵港"},{"code":"code_262","name":"玉林"},{"code":"code_263","name":"百色"},{"code":"code_264","name":"贺州"},{"code":"code_265","name":"河池"},{"code":"code_266","name":"来宾"},{"code":"code_267","name":"崇左"},{"code":"code_268","name":"其他"}]},{"code":"code_269","name":"海南","city":[{"code":"code_270","name":"海口"},{"code":"code_271","name":"三亚"},{"code":"code_272","name":"五指山"},{"code":"code_273","name":"琼海"},{"code":"code_274","name":"儋州"},{"code":"code_275","name":"文昌"},{"code":"code_276","name":"万宁"},{"code":"code_277","name":"东方"},{"code":"code_278","name":"澄迈县"},{"code":"code_279","name":"定安县"},{"code":"code_280","name":"屯昌县"},{"code":"code_281","name":"临高县"},{"code":"code_282","name":"白沙黎族自治县"},{"code":"code_283","name":"昌江黎族自治县"},{"code":"code_284","name":"乐东黎族自治县"},{"code":"code_285","name":"陵水黎族自治县"},{"code":"code_286","name":"保亭黎族苗族自治县"},{"code":"code_287","name":"琼中黎族苗族自治县"},{"code":"code_288","name":"其他"}]},{"code":"code_289","name":"重庆","city":[{"code":"code_290","name":"重庆"}]},{"code":"code_291","name":"四川","city":[{"code":"code_292","name":"成都"},{"code":"code_293","name":"自贡"},{"code":"code_294","name":"攀枝花"},{"code":"code_295","name":"泸州"},{"code":"code_296","name":"德阳"},{"code":"code_297","name":"绵阳"},{"code":"code_298","name":"广元"},{"code":"code_299","name":"遂宁"},{"code":"code_300","name":"内江"},{"code":"code_301","name":"乐山"},{"code":"code_302","name":"南充"},{"code":"code_303","name":"眉山"},{"code":"code_304","name":"宜宾"},{"code":"code_305","name":"广安"},{"code":"code_306","name":"达州"},{"code":"code_307","name":"雅安"},{"code":"code_308","name":"巴中"},{"code":"code_309","name":"资阳"},{"code":"code_310","name":"阿坝藏族羌族自治州"},{"code":"code_311","name":"甘孜藏族自治州"},{"code":"code_312","name":"凉山彝族自治州"},{"code":"code_313","name":"其他"}]},{"code":"code_314","name":"贵州","city":[{"code":"code_315","name":"贵阳"},{"code":"code_316","name":"六盘水"},{"code":"code_317","name":"遵义"},{"code":"code_318","name":"安顺"},{"code":"code_319","name":"铜仁地区"},{"code":"code_320","name":"毕节地区"},{"code":"code_321","name":"黔西南布依族苗族自治州"},{"code":"code_322","name":"黔东南苗族侗族自治州"},{"code":"code_323","name":"黔南布依族苗族自治州"},{"code":"code_324","name":"其他"}]},{"code":"code_325","name":"云南","city":[{"code":"code_326","name":"昆明"},{"code":"code_327","name":"曲靖"},{"code":"code_328","name":"玉溪"},{"code":"code_329","name":"保山"},{"code":"code_330","name":"昭通"},{"code":"code_331","name":"丽江"},{"code":"code_332","name":"普洱"},{"code":"code_333","name":"临沧"},{"code":"code_334","name":"德宏傣族景颇族自治州"},{"code":"code_335","name":"怒江傈僳族自治州"},{"code":"code_336","name":"迪庆藏族自治州"},{"code":"code_337","name":"大理白族自治州"},{"code":"code_338","name":"楚雄彝族自治州"},{"code":"code_339","name":"红河哈尼族彝族自治州"},{"code":"code_340","name":"文山壮族苗族自治州"},{"code":"code_341","name":"西双版纳傣族自治州"},{"code":"code_342","name":"其他"}]},{"code":"code_343","name":"西藏","city":[{"code":"code_344","name":"拉萨"},{"code":"code_345","name":"那曲地区"},{"code":"code_346","name":"昌都地区"},{"code":"code_347","name":"林芝地区"},{"code":"code_348","name":"山南地区"},{"code":"code_349","name":"日喀则地区"},{"code":"code_350","name":"阿里地区"},{"code":"code_351","name":"其他"}]},{"code":"code_352","name":"陕西","city":[{"code":"code_353","name":"西安"},{"code":"code_354","name":"铜川"},{"code":"code_355","name":"宝鸡"},{"code":"code_356","name":"咸阳"},{"code":"code_357","name":"渭南"},{"code":"code_358","name":"延安"},{"code":"code_359","name":"汉中"},{"code":"code_360","name":"榆林"},{"code":"code_361","name":"安康"},{"code":"code_362","name":"商洛"},{"code":"code_363","name":"其他"}]},{"code":"code_364","name":"甘肃","city":[{"code":"code_365","name":"兰州"},{"code":"code_366","name":"嘉峪关"},{"code":"code_367","name":"金昌"},{"code":"code_368","name":"白银"},{"code":"code_369","name":"天水"},{"code":"code_370","name":"武威"},{"code":"code_371","name":"酒泉"},{"code":"code_372","name":"张掖"},{"code":"code_373","name":"庆阳"},{"code":"code_374","name":"平凉"},{"code":"code_375","name":"定西"},{"code":"code_376","name":"陇南"},{"code":"code_377","name":"临夏回族自治州"},{"code":"code_378","name":"甘南藏族自治州"},{"code":"code_379","name":"其他"}]},{"code":"code_380","name":"青海","city":[{"code":"code_381","name":"西宁"},{"code":"code_382","name":"海东地区"},{"code":"code_383","name":"海北藏族自治州"},{"code":"code_384","name":"海南藏族自治州"},{"code":"code_385","name":"黄南藏族自治州"},{"code":"code_386","name":"果洛藏族自治州"},{"code":"code_387","name":"玉树藏族自治州"},{"code":"code_388","name":"海西蒙古族藏族自治州"},{"code":"code_389","name":"其他"}]},{"code":"code_390","name":"宁夏","city":[{"code":"code_391","name":"银川"},{"code":"code_392","name":"石嘴山"},{"code":"code_393","name":"吴忠"},{"code":"code_394","name":"固原"},{"code":"code_395","name":"中卫"},{"code":"code_396","name":"其他"}]},{"code":"code_397","name":"新疆","city":[{"code":"code_398","name":"乌鲁木齐"},{"code":"code_399","name":"克拉玛依"},{"code":"code_400","name":"吐鲁番地区"},{"code":"code_401","name":"哈密地区"},{"code":"code_402","name":"和田地区"},{"code":"code_403","name":"阿克苏地区"},{"code":"code_404","name":"喀什地区"},{"code":"code_405","name":"克孜勒苏柯尔克孜自治州"},{"code":"code_406","name":"巴音郭楞蒙古自治州"},{"code":"code_407","name":"昌吉回族自治州"},{"code":"code_408","name":"博尔塔拉蒙古自治州"},{"code":"code_409","name":"石河子"},{"code":"code_410","name":"阿拉尔"},{"code":"code_411","name":"图木舒克"},{"code":"code_412","name":"五家渠"},{"code":"code_413","name":"伊犁哈萨克自治州"},{"code":"code_414","name":"其他"}]},{"code":"code_415","name":"台湾","city":[{"code":"code_416","name":"台湾"},{"code":"code_417","name":"其他"}]},{"code":"code_418","name":"澳门","city":[{"code":"code_419","name":"澳门"}]},{"code":"code_420","name":"香港","city":[{"code":"code_421","name":"香港"}]},{"code":"code_422","name":"钓鱼岛","city":[{"code":"code_423","name":"钓鱼岛"}]}]
	}
	
	//2.工具函数
	var util = {
		ajax : function(type,url,data,callback){
			$.ajax({
				type : type,
				url : url,
				data : data,
				dataType : "json",
				timeout : 5000,
				success : function(data){
					callback && callback(data);
				},
				error : function(data){
					callback && callback(data);
				}
			});
		},
		post : function(url,data,callback){
			util.ajax('POST',url,data,callback)
		},
		get : function(url,data,callback){
			util.ajax('GET',url,data,callback);
		},
		jsonp: function(url,data,callback){
			$.ajax({
				type :'GET',
				url : url,
				data : data,
				dataType : 'jsonp',
				success : function(data){
					callback && callback(data);
				},
				error : function(data){
					callback && callback(data);
				}
			});
		}
	};
	
	//3.服务
	var service = {
		
	}
	
	//4.dom缓存缓存池
	var $obj = {
		win : $(window),
		bd : $('body'),
		loginBox : $('#loginBox'),
		adtopWrap : $('#adtopWrap'),
		sideNav : $('#sideNav'),
		province : $('#province'),
		city : $('#city'),
		dataTalk : $('#dataTalk')
	}
	
	//5.功能函数
	var handler = {
		ready : function(){
			//开始绑定
			myEvent.bind();
			
			//js动态计算侧导航的高度
			handler.calcSideNavHeight();
			
			//初始化账号管理页面的省市联调数据
			handler.initCity();
			
			//临时主动调用登录浮层
			handler.loginShow();
			
			//初始化图表
			handler.initDataTalk();
			
		},
		loginShow : function(){
			setTimeout(function(){
				$obj.loginBox.modal('show')	
			},1000)
			
		},
		calcSideNavHeight : function(){
			var bdHeight = $obj.bd.height();
			var winHeight = $obj.win.height();
			var maxHeight = Math.max(bdHeight,winHeight);			
			$obj.sideNav.height(maxHeight);
		},
		winResize : function(){
			handler.calcSideNavHeight();
		},
		initCity : function(){
			//渲染省(多页面共用js 所以初始化判断一下页面有没省dom,有则渲染否则不渲染)
			$obj.province.length != 0 ? view.initProvince(Gvar.cityList) : '';
		},
		provinceChange : function(province){
			var code = this.value;
			//依据省获取下面的市
			view.getCity(code);
		},
		initDataTalk : function(){
			if(!$obj.dataTalk.length)return;//页面没有dom元素则渲染
			
			//页面dom元素
			var myEchart = echarts.init(document.getElementById('dataTalk'));
			
			//数据
			option = {
			    title: {
			        text: '整体趋势',
			        left:40
			    },
			    tooltip : {
			        trigger: 'axis'
			    },
			    legend: {
			        data:['激活总量','UV独立访问量','PV访问量']
			    },
			    toolbox: {
			        feature: {
			            saveAsImage: {}
			        }
			    },
			    grid: {
			        left: '3%',
			        right: '4%',
			        bottom: '3%',
			        containLabel: true
			    },
			    xAxis : [
			        {
			            type : 'category',
			            boundaryGap : false,
			            data : ['10月20日','10月21日','10月22日','10月23日','10月24日','10月25日','10月26日']
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value'
			        }
			    ],
			    series : [
			        {
			            name:'激活总量',
			            type:'line',
			            stack: '总量',
			            smooth:true,
			            areaStyle: {normal: {}},
			            data:[120, 132, 101, 134, 90, 230, 210]
			        },
			        {
			            name:'UV独立访问量',
			            type:'line',
			            stack: '总量',
			            smooth:true,
			            areaStyle: {normal: {}},
			            data:[220, 182, 191, 234, 290, 330, 310]
			        },
			        {
			            name:'PV访问量',
			            type:'line',
			            stack: '总量',
			            smooth:true,
			            areaStyle: {normal: {}},
			            data:[150, 232, 201, 154, 190, 330, 410]
			        }
			    ]
			};
			
			//设置图表实例的配置项以及数据
			myEchart.setOption(option);
		}
	}
	
	//6.视图渲染
	var view = {
		initProvince : function(data){
			var option = '<option value="">选择省</option>';
			for(var i=0,len=data.length;i<len;i++){
				option += '<option value="'+ data[i].code +'">'+ data[i].name +'</option>';
			}
			$obj.province.html(option);
		},
		getCity : function(code){
			var province = Gvar.cityList;
			var option = '';
			for(var i=0,len=province.length;i<len;i++){
				if(province[i].code == code){
					view.cityHtml(province[i].city);
				}
			}
		},
		cityHtml : function(list){
			var option = '';
			for(var i=0,len=list.length;i<len;i++){
				option += '<option value="'+ list[i].code +'">'+ list[i].name +'</option>'
			}
			$obj.city.html( option );
		}
	}
	
	//7.事件绑定
	var myEvent = {
		bind : function(){
			//窗口大小变化事件
			$obj.win.on('resize',handler.winResize);
			
			//监听省下拉框选择变化
			$obj.province.on('change',handler.provinceChange);
		}
	}
	
	//8.启动程序
	handler.ready();
	
})();


