// -----------loading div----------------
$(window).on('load', function(){
    setTimeout(removeLoader, 1000); //wait for page load PLUS two seconds.
});

function removeLoader(){
    $( "#loadingElement" ).fadeOut(100, function() {
    $( "#loadingElement" ).remove();
});  
}