// 存储被点击部件所属大类(机构,结构,电气);
var domain;
// 存储被点击部件所属小类(起升机构,行走机构,门架结构等);
var scope;
// 存储被点击的部件id,传递给失效模式页面以确定显示哪一个部件的失效模式
var shownId;
// 判断字符串是否以s结尾
String.prototype.endWith=function(s){
  if(s==null||s==""||this.length==0||s.length>this.length)
   return false;
  if(this.substring(this.length-s.length)==s)
    return true;
  else
    return false;
  return true;
}

function render (page) {
	if (typeof(scope)=="undefined") {
    //alert(domain + "/" + page + ".html");
  $("#"+page+"Content").load(domain + "/" + page + ".html");
  } else {
    //alert(domain + "/" + scope + "/" + page + ".html");
  $("#"+page+"Content").load(domain + "/" + scope + "/" + page + ".html");
  }
}