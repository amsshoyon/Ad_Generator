/* ********************************** */
/* Custom Scripts */
/* ********************************** */
(function ($) {
   "use strict";

   /*==========================================================================
       :: All Essential Functions
   ==========================================================================*/
   function textAnimation() {
       gsap.from('.title', { duration: 5, x: 100, ease: 'elastic', yoyo: true, repeat: 1000 })
       
       const tl = gsap.timeline();

       tl
       .from('#remaining-hour', {duration: 1, delay: 1, opacity: 0, rotationX:180, ease: 'power2'})
       .from('.box', {x: 300, duration: 3, ease: 'bounce.out', stagger: 2})
       .from('.footer', {duration: 1, scale: 0, ease: 'bounce.out'});
   }

   function OnlyHour() {
       // Set the date we're counting down to
       var countDownDate = new Date("Apr 19, 2022 15:20:00").getTime();

       // Update the count down every 1 second
       var x = setInterval(function () {

           // Get today's date and time
           var now = new Date().getTime();

           // Find the distance between now and the count down date
           var distance = countDownDate - now;

           // Time calculations for days, hours, minutes and seconds
           // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
           var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
           var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
           var seconds = Math.floor((distance % (1000 * 60)) / 1000);

           // Output the result in an element with id="demo"
           // document.getElementById("remaining-hour").innerHTML =  hours + "h "
           //     + minutes + "m " + seconds + "s ";

           $('#remaining-hour .hour .counter').text(String(hours).padStart(2, '0'));
           $('#remaining-hour .minutes .counter').text( String(minutes).padStart(2, '0'));
           $('#remaining-hour .seconds .counter').text(String(seconds).padStart(2, '0'));

           // If the count down is over, write some text 
           if (distance < 0) {
               clearInterval(x);
               document.getElementById("remaining-hour").innerHTML = "EXPIRED";
           }
       }, 1000);
   }


   /*==========================================================================
       When Document Loading
   ==========================================================================*/
   $(window).on('load', function () {
       textAnimation();
       OnlyHour();
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