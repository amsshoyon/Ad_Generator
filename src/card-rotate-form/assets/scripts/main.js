/* ********************************** */
/* Custom Scripts */
/* ********************************** */
(function ($) {
    "use strict";

    /*==========================================================================
        :: All Essential Functions
    ==========================================================================*/
    function customAnimation() {

        const tl = gsap.timeline({ repeat: 1000, repeatDelay: 1, yoyo: true })
        const tl2 = gsap.timeline({ repeat: 1000, repeatDelay: 5 });

        tl.from('li', { duration: 2, opacity: 0, x: '120%', ease: 'back', stagger: .3 })
        tl2.from('.card__heading', { duration: 3, x: "-120%", opacity: 0, ease: "back" })
    }

    function backSideAnimation() {

        const tl = gsap.timeline()
        tl.paused(true);
        tl.from('.card__price-only', {duration: 2, opacity: 0, x: '120%', ease: 'back' })
        tl.from('.card__price-value', {duration: 2, opacity: 0, x: '-120%', ease: 'back'}, '-=1.8')
        tl.from('#buyTicket', {duration: 2, opacity: 0, x: '120%', ease: 'back'}, '-=1.5')

        const backSide = document.querySelector('.card');

        backSide.addEventListener('mouseenter', ()=>{
            tl.play();
        });

        backSide.addEventListener('mouseleave', ()=>{
            tl.reverse();
        })
    }

    function formSubmit() {
        const buyTicket = document.getElementById('buyTicket');
        const form = document.querySelector('.form');

        const tl3 = gsap.timeline();
        tl3.paused(true);
        tl3.from('.input-field', { opacity: 0, x: 100, ease: 'back', stagger: .3 })
        tl3.from('.label', { opacity: 0, x: 100, ease: 'back', stagger: .3 }, '-=1')
        tl3.from('.button', { opacity: 0, duration: 1, y: -100, ease: 'elastic' })


        buyTicket.addEventListener("click", () => {
            tl3.play();
            form.style.display = "flex";
        })
    }

    /*==========================================================================
        When Document Loading
    ==========================================================================*/
    $(window).on('load', function () {
        customAnimation();
        backSideAnimation();
        formSubmit();
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