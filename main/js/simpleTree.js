// 加参数obj是因为当多个元素调用simpleTree方法时,如果不对每个方法调用限定范围,会产生冲突
function simpleTree(obj) {
	$(".itemTitle:not(.titleShow)",obj).addClass("titleHide");
	$(".itemContent:not(.contentShow)",obj).addClass("contentHide");
	$(".itemTitle",obj).click(function(){
		if ($(this).hasClass("titleShow")) {
			$(this).removeClass("titleShow").addClass("titleHide");
			$(this).next().removeClass("contentShow").addClass("contentHide");
		} else if ($(this).hasClass("titleHide")) {
			$(this).removeClass("titleHide").addClass("titleShow");
			$(this).next().removeClass("contentHide").addClass("contentShow");
		};
	});
	$(".bullet",obj).click(function(){
		$(".menuSelected").removeClass("menuSelected");
		$(this).addClass("menuSelected");
	});
}

function hierarchicalList (obj) {
	$(".itemTitle",obj).find(".sn").text(function(i){
		$(this).parent().next().find(".bullet .sn").text(function(j){
			return (i+1) + "." + (j+1) + ".";
		});
		return i + 1 + ". ";
	});
}