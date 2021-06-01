/* ********************************** */
/* Custom Scripts */
/* ********************************** */
(function ($) {
    "use strict";

    /*==========================================================================
        :: All Essential Functions
    ==========================================================================*/
    function customAnimation() {
        const tl = gsap.timeline({repeat: 1, repeatDelay: 3})
        tl
            .from('.title', { duration: 2, opacity: 0, x: '150%', ease: 'back'})
            .from('.left', {duration: 2, opacity: 0, scale: 0, ease: 'bounce'})

        const tl2 = gsap.timeline({repeat: 1000, repeatDelay: 10})
        tl2
            .from('.tick-group', {duration: 2, opacity: 0, x: '100', stagger: .3, ease: 'back'})
    }

    /*==========================================================================
        When Document Loading
    ==========================================================================*/
    $(window).on('load', function () {
        customAnimation();
    });


    /*==========================================================================
        When Window Scroll
    ==========================================================================*/
    $(window).scroll(function () {
        //
    });


    /*==========================================================================
        when Window Resize
    ==========================================================================*/
    $(window).on("resize", function () {
        //
    });

})(window.jQuery); 