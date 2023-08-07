function generalScripts() {
	// ---------general imgs--------
    if($('main').hasClass('insidepage')) {
        $(".nav-logo img").attr('src', '../images/icons/OL-logo.svg');
        $(".footer-logo img").attr('src', '../images/icons/OL-logo.svg');
        $("img.fb-ico").attr('src', '../images/icons/fb.svg');
        $("img.tw-ico").attr('src', '../images/icons/tw.svg');
        $("img.in-ico").attr('src', '../images/icons/in.svg');
        $("img.yt-ico").attr('src', '../images/icons/yt.svg');
    } else {
        $(".nav-logo img").attr('src', 'images/icons/OL-logo.svg');
        $(".footer-logo img").attr('src', 'images/icons/OL-logo.svg');
        $("img.fb-ico").attr('src', 'images/icons/fb.svg');
        $("img.tw-ico").attr('src', 'images/icons/tw.svg');
        $("img.in-ico").attr('src', 'images/icons/in.svg');
        $("img.yt-ico").attr('src', 'images/icons/yt.svg');
    }

	// -------navigation------------------
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


	// -------footer-------------
	var e = new Date().getFullYear(); 
	$('#currentyr').append(e);

}