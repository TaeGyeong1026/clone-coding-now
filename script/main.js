$(document).ready(function(){
    var ww = $(window).width();
    $(window).resize(function(){
       ww = $(window).width(); 
    });
    
    headerLogoInterval()
    function headerLogoInterval(){
        logoInterval = setInterval(function(){
            $('.logo').toggleClass('dotted');
        },500);
    }
    
    $('.artist-box').hover(function(){
       $(this).children('.artist-text-wrap').addClass('on');
    },function(){
       $(this).children('.artist-text-wrap').removeClass('on');
    });
    
    var tabGroup = [$('.artist-box'),
                    $('.around'),
                    $('.kpop'),
                    $('.hiphop'),
                    $('.entertain'),
                    $('.allday')]
    $('.tab-list').click(function(){
        clickIndex = $(this).index();
        
        $('.tab-list').removeClass('selected');
        $(this).addClass('selected');
        
        $('.artist-box').removeClass('on');
        tabGroup[clickIndex].addClass('on');
    });
    
    if(ww < 960){
        $('body').mousewheel(function (event, delta) {
            if (delta > 0) {
                $('.mobile-button-wrap').css({
                    position: 'fixed',
                    bottom: -54,
                });
            } else if (delta < 0) {
                $('.mobile-button-wrap').css({
                    position: 'fixed',
                    bottom: 0,
                });
            }
        });
    }
    
});     //end