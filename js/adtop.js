;(function(){
	//1.全局变量
	var Gvar = {
		realtimeUrl : '/data/realtime.json'
		
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
		realtime : function(callback){
			var url = Gvar.realtimeUrl;
			var data = null;
			
			util.get(url,data,callback);
			
		}
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
		dataTalk : $('#dataTalk'),
		choiceQueryType : $('#choiceQueryType'),
		dateIpt : $('.dateIpt'),
		queryZone : $('#queryZone'),
		dateIpt1 : $('#dateIpt1'),
		dateIpt2 : $('#dateIpt2'),
		realtimeZone : $('#realtimeZone'),
		realtimeNum : $('#realtimeNum')
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
			
			//初始化日期控件
			handler.initDate();
			
			//初始化实时数据图表
			handler.initRealtime();
			
			//实时监控数
			handler.realTimeNumber();
			
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
		        text: '堆叠区域图'
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
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
		            data : ['周一','周二','周三','周四','周五','周六','周日']
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value'
		        }
		    ],
		    series : [
		        {
		            name:'邮件营销',
		            type:'line',
		            stack: '总量',
		            areaStyle: {normal: {}},
		            data:[120, 132, 101, 134, 90, 230, 210]
		        },
		        {
		            name:'联盟广告',
		            type:'line',
		            stack: '总量',
		            areaStyle: {normal: {}},
		            data:[220, 182, 191, 234, 290, 330, 310]
		        },
		        {
		            name:'视频广告',
		            type:'line',
		            stack: '总量',
		            areaStyle: {normal: {}},
		            data:[150, 232, 201, 154, 190, 330, 410]
		        },
		        {
		            name:'直接访问',
		            type:'line',
		            stack: '总量',
		            areaStyle: {normal: {}},
		            data:[320, 332, 301, 334, 390, 330, 320]
		        },
		        {
		            name:'搜索引擎',
		            type:'line',
		            stack: '总量',
		            label: {
		                normal: {
		                    show: true
		                }
		            },
		            areaStyle: {normal: {}},
		            data:[820, 932, 901, 934, 1290, 1330, 1320]
		        }
		    ]
		};

			
			//设置图表实例的配置项以及数据
			myEchart.setOption(option);
		},
		choiceQueryType : function(){
			var val = this.value;
			if( val == '' || val == 7 || val == 30){
				$obj.dateIpt.hide().val('');
			}else{
				$obj.dateIpt.slideDown();
			}
			
			//赋值给select元素
			$(this).data('date',val);
		},
		formDate : function(date){
			console.log(date)
		},
		queryBtnClick : function(){
			if($obj.choiceQueryType.data('date') && $obj.choiceQueryType.data('date') != 'auto'){
				alert('选择的日期--'+$obj.choiceQueryType.data('date'))
				
				handler.formDate($obj.choiceQueryType.data('date'));
				
				
				
			}else{
				alert('请选择日期')	
			}
		},
		initDate : function(){
			var data1 = null;
			var data2 = null;
			$obj.dateIpt1.datepicker({
				dateFormat:"yy-mm-dd",
			  	maxDate : -1,
			  	onSelect : function(d){
			  		data1 = d;
			  		if(data2){
			  			if( new Date(data2) - new Date(data1) < 0){
			  				alert('结束时间不能小于开始时间')
			  				$obj.dateIpt1.val('')
			  				$obj.choiceQueryType.data('date','auto')
			  			}else{
			  				handler.setDate(data1,data2)
			  			}
			  		}
			  	}
			});
			$obj.dateIpt2.datepicker({
				dateFormat:'yy-mm-dd',
			  	maxDate : 0,
			  	onSelect : function(d){
			  		data2 = d;
			  		if(data1){
			  			if( new Date(data2) - new Date(data1) < 0){
			  				alert('结束时间不能小于开始时间')
			  				$obj.dateIpt2.val('')
			  				$obj.choiceQueryType.data('date','auto')
			  			}else{
			  				handler.setDate(data1,data2)
			  			}
			  		}
			  	}
			});
		},
		setDate : function(d1,d2){
			$obj.choiceQueryType.data('date',d1+','+d2)
		},
		initRealtime : function(){
			var myEchart = echarts.init(document.getElementById('realtimeZone'));
			var option = {
				    title: {
				        text: '整体趋势'
				    },
				    tooltip: {
				        trigger: 'axis'
				    },
				    legend: {
				        data:['UV独立访问量','PV访问量']
				    },
				    toolbox: {
				        show: true,
				        feature: {
				            dataZoom: {
				                yAxisIndex: 'none'
				            },
				            dataView: {readOnly: false},
				            magicType: {type: ['line', 'bar']},
				            restore: {},
				            saveAsImage: {}
				        }
				    },
				    xAxis:  {
				        type: 'category',
				        boundaryGap: false,
				        data: ['周一','周二','周三','周四','周五','周六','周日']
				    },
				    yAxis: {
				        type: 'value',
				        axisLabel: {
				            formatter: '{value}'
				        }
				    },
				    series: [
				        {
				            name:'UV独立访问量',
				            type:'line',
				            data:[11, 11, 15, 13, 12, 13, 10],
				            markPoint: {
				                data: [
				                    {type: 'max', name: '最大值'},
				                    {type: 'min', name: '最小值'}
				                ]
				            },
				            areaStyle: {normal: {}}
				        },
				        {
				            name:'PV访问量',
				            type:'line',
				            data:[-1, 20, -2, -5, -3, -12, 0],
				           	markPoint: {
				                data: [
				                    {type: 'max', name: '最大值'},
				                    {type: 'min', name: '最小值'}
				                ]
				            },
				            areaStyle: {normal:{}}
				        }
				    ]
				};
			
			myEchart.setOption( option )
		},
		showNum : function(numStr){
			var len = numStr.length;
		    var iHtml = '';
		    var y = 0;
		    
		    //初始化dom节点
		    for(var i=0;i<len;i++){
		    	iHtml += '<i></i>';	
		    }
		    $obj.realtimeNum.html( iHtml );
			
			//计算Y轴
		    for(var i=0;i<len;i++){
		    	
		    	y = -numStr.charAt(i)*86;
		    	if(numStr.charAt(i) == 8 || numStr.charAt(i) == 9){
		    		y = -numStr.charAt(i)*86-2; 
		    	}
		 		$obj.realtimeNum.find('i').eq(i).animate({
		 			backgroundPosition:'0 '+ y +'px'
		 		}, 'slow','swing')
		        
		    }
		},
		realTimeNumber : function(){
			handler.showNum('01234567899876543210');
			//定时请求
			setInterval(function(){
				service.realtime(function(data){
					//测试用随机数
					var num = Math.floor( Math.random()*123456987 )+'';
					handler.showNum( num );
				})	
			},3000)
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
			
			//选择查询类型
			$obj.choiceQueryType.on('change',handler.choiceQueryType);
			
			//查询事件
			$obj.queryZone.on('click','.queryBtn',handler.queryBtnClick);
		}
	}
	
	//8.启动程序
	handler.ready();
	
})();


