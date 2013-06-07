// 标记当前是在机构,结构还是电气部分
var baseInfoPage;
// 在点击左边树状菜单时存储要在右边显示的structContentTitle
var structContentTitle;
// 标记当前是在"基本信息参数","失效监测检测"还是在"健康诊断预报"
var rightShowCtx="baseinfo";
// 存储被点击的部件id,传递给失效模式页面以确定显示哪一个部件的失效模式
var shownId;
function showModel(img)
{
	$("#craneModelDiv").html("<div><img id='modelImg' src=''/></div><div class='componentInfoTitle'>动态信息</div><div id='craneComponentInfo'></div>");
	$("#modelImg").attr("src",img);
}

/*directory用来存储基本信息与失效模式页面所在目录,
  不同的机构传递来的目录不同,所有机构目录下都有
  baseinfo.html和failuremode.html*/ 
function iniTab(directory)
{
  var url;
	//tab切换
      $('.tab').mouseover(function(){
      	changeTab(this,directory);
      });

      //展示模型图片
      $(".tabItem").click(function(){
      	showModel($(this).attr('model'));
        showContent(directory,this);
      });

}

function changeTab(tab,directory)
{
  	$(tab).addClass("current").siblings().removeClass("current"); 
    $('#'+$(tab).attr('body')).show().siblings().hide();
    if(typeof($(tab).attr('model'))!="undefined")
        {
        	showModel($(tab).attr('model'));
        };
    if (typeof($(tab).attr("nochild"))!="undefined") {
      showContent(directory,tab);
    };
    if ($(tab).attr("id")=="diankong") {
      $("#craneComponentInfo").load("mechanism/" + directory + "/elecinfo.html");
    };
}

//根据不同的目录(也就是不同的机构)和不同的rightShowCtx显示不同的内容
function showContent(directory,obj)
{
  switch(rightShowCtx)
        {
          case "baseinfo":
            $('#structContentDiv').load("mechanism/" + directory + "/baseinfo.html");
            shownId = $(obj).attr('id');
            break;
          case "failuremode":
            $('#structContentDiv').load("mechanism/" + directory + "/failuremode.html");
            shownId = $(obj).attr('id');
            break;
          case "forcast":
            break;
        }
}