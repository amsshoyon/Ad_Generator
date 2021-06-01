/* ********************************** */
/* Custom Scripts */
/* ********************************** */
(function ($) {
   "use strict";

   /*==========================================================================
       :: All Essential Functions
   ==========================================================================*/
   function customAnimation() {
       gsap.from('.title', {duration: 3, x: 100, ease: 'elastic', yoyo: true, repeat: 1000})
       
       const tl = gsap.timeline();
       const tl2 = gsap.timeline({repeat: 1000, repeatDelay: 4});
       
       tl.from('.click-me-btn', {duration: 1, x: 150, ease: 'power2', opacity: 0})
       tl2.fromTo('.click-me-btn', {scale: 0, opacity: 0}, {duration: 1, opacity: 1, scale: 1, ease: 'bounce'});
   }

   function onlyHour(){
       var clock = $('.clock').FlipClock({
           clockFace: 'HourlyCounter',
           autoStart: true,
           callbacks: {
               stop: function () {
                   $('.message').html('The clock has stopped!')
               }
           },
           animationRate: 1000
       });
   
       // set time
       clock.setTime(66600);
   
       // countdown mode
       clock.setCountdown(true);
   
       // start the clock
       clock.start();
   }

   /*==========================================================================
       When Document Loading
   ==========================================================================*/
   $(window).on('load', function () {
       customAnimation();
       onlyHour();
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