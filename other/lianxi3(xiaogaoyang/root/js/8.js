window.onload = function(){
    var index = 0;
    var input = document.getElementsByTagName('input');
    judge();
    //背景切换
    input[0].onclick = function(){
        for(var i=0;i<5;i++){
            $('#bg').find('li').eq(i).fadeOut();
        }
        index--;
        if(index == -1){
            index = 4;
        }
        judge();
        $('#bg').find('li').eq(index).fadeIn().css('display','block');
    }
    input[1].onclick = function(){
        for(var i=0;i<5;i++){
            $('#bg').find('li').eq(i).fadeOut();
        }
        index++;
        if( index == 5){
            index = 0;
        }
        judge();
        $('#bg').find('li').eq(index).fadeIn().css('display','block');
    }
    //判断
    function judge(){
        if(index == 0){
            $('#text1').removeClass('pos5 pos2');
            $('#text2').removeClass('pos5 pos2');
            $('#text1').addClass('pos1');
            $('#text1').slideDown(1000);
            $('#text2').hide();
            $('#nav').css({'left':'85px','right':''});
        }else if(index == 1){
            $('#text1').removeClass('pos3 pos1');
            $('#text2').removeClass('pos3 pos1');
            $('#text2').addClass('pos2');
            $('#text2').slideDown(1000);
            $('#text1').hide();
        }else if(index == 2){
            $('#text1').removeClass('pos4 pos2');
            $('#text2').removeClass('pos4 pos2');
            $('#text1').addClass('pos3');
            $('#text1').slideDown(1000);
            $('#text2').hide();
            $('#nav').css({'right':'85px','left':''});
        }else if(index == 3){
            $('#text1').removeClass('pos5 pos3');
            $('#text2').removeClass('pos5 pos3');
            $('#text2').addClass('pos4');
            $('#text2').slideDown(1000);
            $('#text1').hide();
            $('#nav').css({'left':'85px','right':''});
        }else if(index == 4){
            $('#text1').removeClass('pos4 pos1');
            $('#text2').removeClass('pos4 pos1');
            $('#text2').addClass('pos5');
            $('#text2').slideDown(1000);
            $('#text1').hide();
        }    
    }
    //语言切换
    $('#input1').click(function(){
        $('.zh').fadeIn();
        $('.en').fadeOut();
    });
    $('#input3').click(function(){
        $('.zh').fadeIn();
        $('.en').fadeOut();
    });
    $('#input2').click(function(){
        $('.en').fadeIn();
        $('.zh').fadeOut();
    });
    $('#input4').click(function(){
        $('.en').fadeIn();
        $('.zh').fadeOut();
    });
}