function generalImgs() {
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
}