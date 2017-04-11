window.onload = function(){
    var li = $('.conli');
    li[0].onmouseover = function(){
        $('h1').eq(0).fadeOut(500);
        $('.ziul').eq(0).fadeIn(500);
    }
    li[0].onmouseout = function(){
        $('h1').eq(0).fadeIn(500);
        $('.ziul').eq(0).fadeOut(500);
    }
    li[1].onmouseover = function(){
        $('h1').eq(1).fadeOut(500);
        $('.ziul').eq(1).fadeIn(500);
    }
    li[1].onmouseout = function(){
        $('h1').eq(1).fadeIn(500);
        $('.ziul').eq(1).fadeOut(500);
    }
    li[2].onmouseover = function(){
        $('h1').eq(2).fadeOut(500);
        $('.ziul').eq(2).fadeIn(500);
    }
    li[2].onmouseout = function(){
        $('h1').eq(2).fadeIn(500);
        $('.ziul').eq(2).fadeOut(500);
    }
    li[3].onmouseover = function(){
        $('h1').eq(3).fadeOut(500);
        $('.ziul').eq(3).fadeIn(500);
    }
    li[3].onmouseout = function(){
        $('h1').eq(3).fadeIn(500);
        $('.ziul').eq(3).fadeOut(500);
    }
}