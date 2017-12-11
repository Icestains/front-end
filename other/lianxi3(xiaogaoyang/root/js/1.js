window.onload = function(){
    var container = document.getElementById('container');
    drag(container);
    $(function(){
        var roll;
        roll = $.roll('.conul','#container',{effect:'scrollY',duration:60,delay:500}).rollRun();
    });
    $('.conul').mouseover(function(){
        $('.tip').fadeOut();
    });
};