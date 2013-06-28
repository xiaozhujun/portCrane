/*
function simpleTree() {
	$(".itemTitle").addClass("titleHide");
	$(".itemContent").addClass("contentHide");
	$(".itemTitle").click(function(){
		if ($(this).hasClass("titleShow")) {
			$(this).removeClass("titleShow").addClass("titleHide");
			$(this).next().removeClass("contentShow").addClass("contentHide");
		} else if ($(this).hasClass("titleHide")) {
			$(this).removeClass("titleHide").addClass("titleShow");
			$(this).next().removeClass("contentHide").addClass("contentShow");
		};
	});
	$(".bullet").click(function(){
		$(".menuSelected").removeClass("menuSelected");
		$(this).addClass("menuSelected");
	});
}
*/
function simpleTree(){
	collapseAll()
	$(".itemTitle").click(function(){
		$(this).toggleClass("titleShow titleHide");
		if ($(this).parent().hasClass("treeItem")) {
			$(this).next().toggle();
		} ;
	});
	$(".bullet").click(function(){
		$(".menuSelected").removeClass("menuSelected");
		$(this).addClass("menuSelected");
	});
}
function collapseAll(){
	$(".itemTitle").addClass("titleHide");
	$(".itemContent").hide();
}
function expandAll() {
	$(".itemTitle").addClass("titleShow");
	$(".itemContent").show();
}