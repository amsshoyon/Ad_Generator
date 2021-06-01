/* ********************************** */
/* Custom Scripts */
/* ********************************** */
(function ($) {
   "use strict";

   /*==========================================================================
       :: All Essential Functions
   ==========================================================================*/

   function gsapAnimation() {
       const tl = gsap.timeline({repeat: 1000, yoyo: true, reverse: true});

       tl.from('.item', {duration: .8, y: '-25%', ease: 'back.inOut', stagger: .1})
   }

   function dragDrop() {
       var itemCount = $('.item').length;

       $(".item").draggable();
       $("#transparent-bg").droppable({
           accept: ".item",
           drop: function (ev, ui) {
               var dropedItem = $(ui.draggable);
               $(this).append(dropedItem);
               itemCount--;
               if(itemCount == 0){
                   $('.reval').addClass('show');
                   setTimeout(function(){ 
                       $('.reval').removeClass('show');
                       $('.link').addClass('show');
                    }, 2000);
               }
           }
       })
   }

   /*==========================================================================
       When Document Loading
   ==========================================================================*/
   $(window).on('load', function () {
       gsapAnimation();
       dragDrop();
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



