window.onload = function(){
    $('#container').find('img').eq(2).mouseover(function(){
        $(this).css({'top':'0','left':'20px'})
    })
    $('#container').find('img').eq(2).mouseout(function(){
        $(this).css({'top':'-45px','left':'-20px'})
    })
    $('#container').find('img').eq(3).mouseover(function(){
        $(this).css({'bottom':'180px','left':'20px'})
    })
    $('#container').find('img').eq(3).mouseout(function(){
        $(this).css({'bottom':'240px','left':'-90px'})
    })
    $('#container').find('img').eq(4).mouseover(function(){
        $(this).css({'left':'25px','top':'-30px'})
    })
    $('#container').find('img').eq(4).mouseout(function(){
        $(this).css({'left':'-160px','top':'-110px'})
    })
    $('#container').find('img').eq(7).mouseover(function(){
        $(this).css({'top':'315px','right':'25px'})
    })
    $('#container').find('img').eq(7).mouseout(function(){
        $(this).css({'top':'360px','right':'0'})
    })
    $('#container').find('img').eq(8).mouseover(function(){
        $(this).css({'top':'315px','left':'445px'})
    })
    $('#container').find('img').eq(8).mouseout(function(){
        $(this).css({'top':'420px','left':'550px'})
    })
    $('#container').find('img').eq(10).mouseover(function(){
        $(this).css('top','-35px')
    })
    $('#container').find('img').eq(10).mouseout(function(){
        $(this).css('top','-55px')
    })
    $('#container').find('img').eq(11).mouseover(function(){
        $(this).css({'top':'-40px','left':'370px'})
    })
    $('#container').find('img').eq(11).mouseout(function(){
        $(this).css({'top':'-70px','left':'430px'})
    })
    $('#container').find('img').eq(12).mouseover(function(){
        $(this).css({'left':'360px','top':'-40px'})
    })
    $('#container').find('img').eq(12).mouseout(function(){
        $(this).css({'left':'500px','top':'-170px'})
    })
    $('#container').find('img').eq(14).mouseover(function(){
        $(this).css({'left':'20px','bottom':'-30px'})
    })
    $('#container').find('img').eq(14).mouseout(function(){
        $(this).css({'left':'-30px','bottom':'-80px'})
    })
    $('#container').find('img').eq(15).mouseover(function(){
        $(this).css({'left':'20px','top':'180px'})
    })
    $('#container').find('img').eq(15).mouseout(function(){
        $(this).css({'left':'-100px','top':'290px'})
    })
    $('#container').find('img').eq(16).mouseover(function(){
        $(this).css({'left':'20px','top':'200px'})
    })
    $('#container').find('img').eq(16).mouseout(function(){
        $(this).css({'left':'-160px','top':'350px'})
    })
    $(function(){
        var leftroll;
        leftroll = $.roll('.left','#leftbox',{effect:'scrollY',duration:40,delay:500}).rollRun();
    })
    $(function(){
        var rightroll;
        rightroll = $.roll('.right','#rightbox',{effect:'scrollY',duration:40,delay:500}).rollRun();
    })
}