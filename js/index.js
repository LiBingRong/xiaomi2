window.onload = function(){
	$(".ul3>li").hover(function(){
		$(this).find("ul").slideDown();
	
	},function(){
		$(this).find("ul").slideUp();
	});
	
	
	
	$("#tree-left>a").hover(function(){
		$(this).find("ul").stop().show();
		
	},function(){
		$(this).find("ul").stop().hide();
	})
}
