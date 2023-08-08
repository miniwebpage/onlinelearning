// -----------loading div----------------
$(window).on('load', function(){
    setTimeout(removeLoader, 500);
});

function removeLoader(){
    $("main").attr('style', '');
    $( "#loadingElement" ).fadeOut(100, function() {
    $( "#loadingElement" ).remove();
});  
}