(function($){
	// banner top height js
    /*function addHeight() {
        let widthResize = $(window).width();
        let mainBanner = jQuery('.banner_wrap');
        let marqueeWrap = jQuery('.marQ_dskArea').height();
        let header_Height = jQuery('.fixed_header').height();
        let totalHeight = marqueeWrap + header_Height;
        if (widthResize > 1024 && widthResize < 1440) {
            mainBanner.css("margin-top", totalHeight)
        }else {
            mainBanner.css("margin-top", header_Height)
        }
    }
    addHeight();
    jQuery(window).resize(function() {
        addHeight();
    });*/
    
    
    function addHeight() {
        let widthResize = jQuery(window).width();
        let mainBanner = jQuery('.banner_wrap');
        let header_Height = jQuery('.header_area').height();
        let top_mbArea = jQuery('.top_mbArea ').height();
        let totalHeight = top_mbArea + header_Height;

        if (jQuery(".header_container").hasClass("fixed_header")) {
            mainBanner.css("margin-top", header_Height);
            if (widthResize < 992) {
                mainBanner.css("padding-top", header_Height);
                jQuery(".header_area").css("margin-top", top_mbArea);
                mainBanner.css("margin-top", 0 + "px");
            }else {
                mainBanner.css("margin-top", header_Height);
            }
        }
        // else if(widthResize > 1024 && widthResize < 1441) {
        //     mainBanner.css("margin-top", marqueeWrap);
        // }
        else {
            mainBanner.css("margin-top", 0 +"px");
        }
    }
    addHeight();
    jQuery(window).resize(function() {
        addHeight();
    });

    jQuery('.common_btn').click(function () {
        let header_Height = jQuery('.header_container').height();
        var Lochref = jQuery(this).attr('href');
        jQuery("html, body").stop().animate({
        scrollTop: jQuery(Lochref).offset().top - header_Height
        }, 1500);
        return false;
    });

    if(matchMedia('only screen and (max-width: 991px)').matches) {
        var $mwo = $('.marquee-with-options');
        jQuery('.marquee').marquee();
        jQuery('.marquee-with-options').marquee({
            speed: 40,
            gap: 0,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            pauseOnHover: true
        });

        //pause and resume links
        jQuery('.pause').click(function(e){
            e.preventDefault();
            $mwo.trigger('pause');
        });

        jQuery('.resume').click(function(e){
            e.preventDefault();
            $mwo.trigger('resume');
        });

        //toggle
        jQuery('.toggle').hover(function(e){
            $mwo.trigger('pause');
            },function(){
            $mwo.trigger('resume');
        })
        .click(function(e){
            e.preventDefault();
        })
    }


    jQuery( ".toggle_view_bg" ).click(function(e) {
        if(jQuery(this).parent('.toggle_view_item').hasClass('active')) {
        } else {
            $( ".toggle_view_bg" ).each(function() {
                if(jQuery(this).parent('.toggle_view_item').hasClass('active')) {
                    jQuery(this).parent('.toggle_view_item').toggleClass('active');
                    jQuery(this).next('.show_details').slideToggle('hide');
                }
            });
        }
        jQuery(this).parent('.toggle_view_item').toggleClass('active');
        jQuery(this).next('.show_details').slideToggle('slow');
        e.preventDefault();
    });
})(jQuery);

// scrolling event floating btn
jQuery(document).ready(function (){

    // couner js
    // let number = document.getElementById("countdown");
    // let counterDSK = 5;
    // setInterval(() => {
    //     if(counterDSK == 0){
    //         clearInterval();
    //     }else{
    //         counterDSK -= 1;
    //         number.innerHTML = counterDSK;
    //     }
    // }, 1000);


    jQuery('.header_container').addClass('allow_expand');
    jQuery(window).scroll(function(){
        var Header_innH = jQuery('.header_area').height();
        var First_offH = jQuery('.visible_itme1').offset().top - 140;
        var Second_offH = jQuery('.visible_itme2').offset().top;

        var Third_offH = jQuery('.visible_itme3').offset().top;

        var First_innerH = jQuery('.visible_itme1').height();
        var Second_innerH = jQuery('.visible_itme2').height();

        var Third_innerH = jQuery('.visible_itme2').height();

        var scree_vh = jQuery(window).height();
        var scrollTop = jQuery(this).scrollTop();

        // offset top form scree height positiive
        var total_FoffstH_innH = First_offH + First_innerH;
        var total_SoffstH_innH = Second_offH + Second_innerH;

        var total_ToffstH_innH = Third_offH + Third_innerH;

        // offset top form scree height nagetive
        var total_FoffH_SCNH = First_offH - scree_vh;
        var total_SoffH_SCNH = Second_offH - scree_vh;

        var total_ToffH_SCNH = Third_offH - scree_vh;

        if (( scrollTop > total_FoffH_SCNH && scrollTop < total_FoffstH_innH )  || ( scrollTop > total_SoffH_SCNH && scrollTop < total_SoffstH_innH ) || ( scrollTop > total_ToffH_SCNH && scrollTop < total_ToffstH_innH )) {
        	jQuery('.header_container').addClass('width_manage');
        }else {
        	jQuery('.header_container').removeClass('width_manage');
        }


        let top_mbArea = jQuery('.top_mbArea ').height();
        if (scrollTop > 0) {
            jQuery(".header_area").css({
                "margin-top" : 0 + "px"
            });
            jQuery(".header_area").addClass("sticky_positon");
        }else {
            jQuery(".header_area").css({
                "margin-top" : top_mbArea,
            });
            jQuery(".header_area").removeClass("sticky_positon");
        }
    });

    jQuery(window).scroll(function(){
        var First_offH = jQuery('.visible_itme1').offset().top - 200;
        var First_boxH = jQuery('.visible_itme1').height();
        var scrollTop = jQuery(this).scrollTop() - First_boxH;
        if (scrollTop > First_offH) {
            jQuery('.header_container').removeClass('allow_expand');
            jQuery('.header_container').addClass('width_less');
        }else {
            jQuery('.header_container').addClass('allow_expand');
            jQuery('.header_container').removeClass('width_less');
        }
    });
});
