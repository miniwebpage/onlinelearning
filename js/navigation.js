$(document).ready(function(){
	$("#nav-icon3").click(function(){
		$(".nav-links-content").animate({
		'opacity' : '1',
		'top' : "0"
		},600);
		$("#nav-icon3").toggleClass('open');
		$(".overlay-btn").addClass("open");
	});

	$(".overlay-btn").click(function(){
		$(".nav-links-content").animate({
		'opacity' : '0',
		'top' : "-110vh"
		},600);
		$("#nav-icon3").removeClass("open");
		$(".overlay-btn").removeClass("open");
	});

	// $(".nav-link").click(function(){
	// 	$(".nav-text-con").animate({
	// 	'margin-top' : "-100vh",
	// 	'opacity' : '0'
	// 	},600);
	// 	$("#nav-icon3").removeClass("open");
	// });
});