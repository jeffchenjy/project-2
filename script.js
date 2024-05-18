//實現點擊圖標彈出視窗和控制輪播功能。
$(document).ready(function() {
    // 點擊 #video-icon 顯示 .video-popup 彈出視窗並滑下 .iframe-src 元素
    $('#video-icon').on('click', function(e) {
        e.preventDefault();
        $('.video-popup').css('display', 'flex');
        $('.iframe-src').slideDown();
    });

    // 點擊 .video-popup 彈出視窗時處理事件
    $('.video-popup').on('click', function(e) {
        var $target = $(e.target);
        var video_src = $(this).find('iframe').attr('src');
        if (!$target.is('iframe')) {
            $('.video-popup').fadeOut();
            $('.iframe-src').slideUp();
            $('.video-popup iframe').attr('src', '');
            $('.video-popup iframe').attr('src', video_src);
        }
    });

    // 初始化 bxSlider 輪播插件，隱藏分頁器
    $('.slider').bxSlider({
        pager: false
    });
});
  //當視窗發生滾動事件時，檢查滾動的距離
  $(window).on("load",function () {
	  $.scrollIt({
	    easing: 'swing',      // the easing function for animation
	    scrollTime: 900,       // how long (in ms) the animation takes
	    activeClass: 'active', // class given to the active nav element
	    onPageChange: null,    // function(pageIndex) that is called when page is changed
	    topOffset: -63
	  });
  });
    $(function(){
        $('#BackTop').click(function(){ 
            $('html,body').animate({scrollTop:0}, 333);
        });
        $(window).scroll(function() {
            if ( $(this).scrollTop() > 300 ){
                $('#BackTop').fadeIn(222);
            } else {
                $('#BackTop').stop().fadeOut(222);
            }
        }).scroll();
    });