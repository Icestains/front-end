$(document).ready(function(){
    $(".intro").flipping_text({
        tickerTime:20,
        customRandomChar:false,
        tickerCount:5,
        opacityEffect:true,
        resetOnChange:false
    });
    var container = document.getElementById('container');
    drag(container);
    $('#container').mouseover(function(){
        $('.tip').fadeOut();
    });
});