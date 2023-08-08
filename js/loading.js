// -----------loading div----------------
$(window).on('load', function(){
    setTimeout(removeLoader, 500);
});

function removeLoader(){
    setTimeout(function() {
        $("main").attr('style', '');
    }, 90)
    $( "#loadingElement div" ).fadeOut(100, function() {
        $( "#loadingElement" ).remove();
    });  
}