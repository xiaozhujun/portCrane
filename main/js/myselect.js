/*
联动选择框
(最多实现三级联动)

要在下拉列表中显示的选项保存在json文件中.
json格式:
{"datalist":[{"p":"一级选项名1",
							"c":[{"n":"二级选项名1-1",
										"a":[{"s","三级选项名1-1-1"},{"s","三级选项名1-1-2"},...]}
									 {"n":"二级选项名1-2",
										"a":[{"s","三级选项名1-2-1"},{"s","三级选项名1-2-2"},...]}
									 ,...
									]
							}
							{"p":"一级选项名2",
							 "c":[{"n":"二级选项名2-1",
										 "a":[{"s","三级选项名2-1-1"},{"s","三级选项名2-1-2"},...]}
										{"n":"二级选项名2-2",
										 "a":[{"s","三级选项名2-2-1"},{"s","三级选项名2-2-2"},...]}
										 ,...
									]
							}
							,...
						]
}
其中c键和a键(即二级选项和三级选项)不必有.

参数说明:
url:josn文件路径
lvl1:默认一级选项名
lvl2:默认二级选项名
lvl3:默认三级选项名
nodata:无数据状态
required:必选项

使用步骤:
1.将需要联动的选择框(最多三个)放在一个div里,
2.将选择框的class依次指定为lvl1,lvl2,lvl3,
3.对该div调用mySelect(),
*/




(function($){
	$.fn.mySelect=function(settings){
		if(this.length<1){return;};

		// 默认值
		settings=$.extend({
			url:"",
			lvl1:null,
			lvl2:null,
			lvl3:null,
			nodata:null,
			required:true
		},settings);

		var box_obj=this;
		var lvl1_obj=box_obj.find(".lvl1");
		var lvl2_obj=box_obj.find(".lvl2");
		var lvl3_obj=box_obj.find(".lvl3");
		var lvl1_val=settings.lvl1;
		var lvl2_val=settings.lvl2;
		var lvl3_val=settings.lvl3;
		var select_prehtml=(settings.required) ? "" : "<option value=''>全部</option>";
		var lvl2_json;

		// 赋值市级函数
		var lvl2Start=function(){
			var lvl1_id=lvl1_obj.get(0).selectedIndex;
			if(!settings.required){
				lvl1_id--;
			};
			lvl2_obj.empty().attr("disabled",true);
			lvl3_obj.empty().attr("disabled",true);

			if(lvl1_id<0||typeof(lvl2_json.datalist[lvl1_id].c)=="undefined"){
				if(settings.nodata=="none"){
					lvl2_obj.css("display","none");
					lvl3_obj.css("display","none");
				}else if(settings.nodata=="hidden"){
					lvl2_obj.css("visibility","hidden");
					lvl3_obj.css("visibility","hidden");
				};
				return;
			};
			
			// 遍历赋值市级下拉列表
			temp_html=select_prehtml;
			$.each(lvl2_json.datalist[lvl1_id].c,function(i,lvl2){
				temp_html+="<option value='"+lvl2.n+"'>"+lvl2.n+"</option>";
			});
			lvl2_obj.html(temp_html).attr("disabled",false).css({"display":"","visibility":""});
			lvl3Start();
		};

		// 赋值地区（县）函数
		var lvl3Start=function(){
			var lvl1_id=lvl1_obj.get(0).selectedIndex;
			var lvl2_id=lvl2_obj.get(0).selectedIndex;
			if(!settings.required){
				lvl1_id--;
				lvl2_id--;
			};
			lvl3_obj.empty().attr("disabled",true);

			if(lvl1_id<0||lvl2_id<0||typeof(lvl2_json.datalist[lvl1_id].c[lvl2_id].a)=="undefined"){
				if(settings.nodata=="none"){
					lvl3_obj.css("display","none");
				}else if(settings.nodata=="hidden"){
					lvl3_obj.css("visibility","hidden");
				};
				return;
			};
			
			// 遍历赋值市级下拉列表
			temp_html=select_prehtml;
			$.each(lvl2_json.datalist[lvl1_id].c[lvl2_id].a,function(i,lvl3){
				temp_html+="<option value='"+lvl3.s+"'>"+lvl3.s+"</option>";
			});
			lvl3_obj.html(temp_html).attr("disabled",false).css({"display":"","visibility":""});
		};

		var init=function(){
			// 遍历赋值省份下拉列表
			temp_html=select_prehtml;
			$.each(lvl2_json.datalist,function(i,lvl1){
				temp_html+="<option value='"+lvl1.p+"'>"+lvl1.p+"</option>";
			});
			lvl1_obj.html(temp_html);

			// 若有传入省份与市级的值，则选中。（setTimeout为兼容IE6而设置）
			setTimeout(function(){
				if(settings.lvl1!=null){
					lvl1_obj.val(settings.lvl1);
					lvl2Start();
					setTimeout(function(){
						if(settings.lvl2!=null){
							lvl2_obj.val(settings.lvl2);
							lvl3Start();
							setTimeout(function(){
								if(settings.lvl3!=null){
									lvl3_obj.val(settings.lvl3);
								};
							},1);
						};
					},1);
				};
			},1);

			// 选择省份时发生事件
			lvl1_obj.bind("change",function(){
				lvl2Start();
			});

			// 选择市级时发生事件
			lvl2_obj.bind("change",function(){
				lvl3Start();
			});
		};

		// 设置省市json数据
		if(typeof(settings.url)=="string"){
			$.getJSON(settings.url,function(json){
				lvl2_json=json;
				init();
			});
		}else{
			lvl2_json=settings.url;
			init();
		};
	};
})(jQuery);