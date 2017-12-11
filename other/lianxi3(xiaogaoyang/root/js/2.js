window.onload = function(){



    setTimeout(function(){
        $('#img1').css('bottom','9%');
    },500);
    setTimeout(function(){
        $('#img1').css('bottom','8%');
    },1000);




    $('#img1').click(function(){
        $('#imgdiv').slideUp(1000);
    });
    $('#img2').click(function(){
        $('#imgdiv').slideDown(1000);
        setTimeout(function(){
            $('#enter').fadeIn(100);
            $('#container').fadeOut(100);
        },1000);
    });




    setInterval(function(){
        var ds = parseInt($('#nav').css('top'));
        if(ds > -432){
            $('#img2').fadeOut();
        }else{
            $('#img2').fadeIn();
        }
    },30);




    $('#button').click(function(){
        $('#enter').fadeOut();
        $("#container").fadeIn();
    })



};