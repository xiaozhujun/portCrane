function showModel(img)
{
	$("#craneModelDiv").html("<div><img id='modelImg' src=''/></div><div class='componentInfoTitle'>动态信息</div><div id='craneComponentInfo'></div>");
	$("#modelImg").attr("src",img);
}

function iniTab()
{
	//tab切换
      $('.tab').mouseover(function(){
      	changeTab(this);
      });

      //展示模型图片
      $(".tabItem").click(function(){
      	showModel($(this).attr('model'));
      });

}

function changeTab(tab)
{
	$(tab).addClass("current").siblings().removeClass("current"); 
    $('#'+$(tab).attr('body')).show().siblings().hide();
    if(typeof($(tab).attr('model'))!="undefined")
        {
        	showModel($(tab).attr('model'));
        }   
}