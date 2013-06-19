function simpleTree(obj) {
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
}
