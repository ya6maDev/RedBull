
/* menu */
$(function(){
	$("#toggle").click(function(){
		$("#top_menu").slideToggle();
		return false;
	});
	$(window).resize(function(){
		var win = $(window).width();
		var p = 480;
		if(win > p){
			$("#top_menu").show();
		} else {		
			$("#top_menu").hide();
		}
	});
});