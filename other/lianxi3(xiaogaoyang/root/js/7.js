var i=1;
function Tab(j){
    $('#container').find('li').eq(j-1).addClass('leftmove curr1');
    $('#container').find('li').eq(j).addClass('rightmove curr1');
    $('.curr1').fadeOut(1500);
    setTimeout(function(){
        if(i == 25){
            $('#container').find('li').eq(0).fadeIn(500);
            $('#container').find('li').eq(1).fadeIn(500);
        }else{
            $('#container').find('li').eq(j+1).fadeIn(1000);
            $('#container').find('li').eq(j+2).fadeIn(1000);
        }
        $('#container').find('li').eq(j-1).css({'display':'none'});
        $('#container').find('li').eq(j).css({'display':'none'});
        $('#container').find('li').eq(j-1).removeClass('leftmove curr1');
        $('#container').find('li').eq(j).removeClass('rightmove curr1');
        if(i == 25){
            i-=24;
        }else{
            i+=2;
        }
    },1500);
}
window.onload = function(){
    $('#button').click(function(){
        $('#zhe').css('z-index','99');
        Tab(i);
        setTimeout('Tab(i)',2000);
        setTimeout('Tab(i)',4000);
        setTimeout('Tab(i)',6000);
        setTimeout('Tab(i)',8000);
        setTimeout('Tab(i)',10000);
        setTimeout('Tab(i)',12000);
        setTimeout('Tab(i)',14000);
        setTimeout('Tab(i)',16000);
        setTimeout('Tab(i)',18000);
        setTimeout('Tab(i)',20000);
        setTimeout('Tab(i)',22000);
        setTimeout('Tab(i)',24000);
        setTimeout(function(){
            $('#zhe').css('z-index','0');
        },26000)
    });
    $('#button').mouseover(function(){
        $('.tip').fadeOut();
    })
}