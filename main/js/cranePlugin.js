// 在点击左边树状菜单时存储要在右边显示的structContentTitle
var rightShowCtx="baseinfo";
// 存储被点击部件所属大类(机构,结构,电气);
var domain;
// 存储被点击部件所属小类(起升机构,行走机构,门架结构等);
var scope;
// 存储被点击的部件id,传递给失效模式页面以确定显示哪一个部件的失效模式
var shownId;

//根据不同的目录(也就是不同的机构)和不同的rightShowCtx显示不同的内容
function showContent(domain,scope,id)
{
  $("#craneModelDiv").load(domain + "/" + scope + "/model.html");
  $('#rightMainDiv').load(domain + "/" + scope + "/" + rightShowCtx + ".html");
}