/*
|--------------------------------------------------------------------------
| Template Name: LANSER
| Author: AWESOME THEMEZ
| Version: 1.0.0
|--------------------------------------------------------------------------
*/


/* -------------------------------------------------------------
    ## Custome jQuery
------------------------------------------------------------- */
(function ($) {

    "use strict";

    /*
    |--------------------------------------------------------------------------
    | TABLE OF CONTENTS:
    |--------------------------------------------------------------------------
    |
    | 1. Scripts initialization
    | 2. Preloader
    | 3. Primary Menu
    | 4. Scroll Function
    | 5. Section Active and Scrolling Animation
    | 6. Scroll Up
    | 7. Owl Carousel
    | 8. Smooth Scroll
    | 9. Accordian
    | 10. Portfolio
    | 11. Magnific Popup
    | 12. Tamjid Counter
    | 13. Ajax Contact Form
    |
    */

    /*--------------------------------------------------------------
      1. Scripts initialization
    --------------------------------------------------------------*/

    $(window).on('load', function () {
        $(window).trigger("scroll");
        $(window).trigger("resize");
        preloaderSetup();
        portfolioMsSetup();
    });


    $(document).ready(function () {
        $(window).trigger("resize");
        primaryMenuSetup();
        mobileMenu();
        scrollAnimation();
        sectionActive();
        scrollUp();
        owlCarouselSetup();
        smoothScrollSetup();
        accordianSetup();
        portfolioMsSetup();
        /* magnificPopupSetup(); */
        counterUp();
        //contactForm();
        $(".player").YTPlayer();
        new WOW().init();
        $('.parallax').parallax("50%", 0.3);
    });


    $(window).on('resize', function () {
        mobileMenu();
        portfolioMsSetup();
    });


    $(window).on('scroll', function () {
        scrollFunction();
    });


    /*--------------------------------------------------------------
      2. Preloader
    --------------------------------------------------------------*/

    function preloaderSetup() {

        $("body").imagesLoaded(function () {
            $(".t-circle").fadeOut();
            $("#preloader").delay(200).fadeOut("slow").remove();
        });

    }


    /*--------------------------------------------------------------
      3. Primary Menu
    --------------------------------------------------------------*/

    function primaryMenuSetup() {

        $(".primary-nav-list").before("<div class='m-menu-btn'><span></span></div>");

        $(".m-menu-btn").on('click', function () {
            $(this).toggleClass("m-menu-btn-ext");
            $(this).siblings('.primary-nav-list').slideToggle("slow");
        });

        $(".menu-item-has-children > ul").before("<i class='fa fa-plus m-dropdown'></i>");

        $('.m-dropdown').on('click', function () {
            $(this).siblings('ul').slideToggle("slow");
            $(this).toggleClass("fa-plus fa-minus");
        });

        $('.primary-nav-list .menu-item').on('click', function () {
            $(this).closest('.primary-nav-list').siblings(".m-menu-btn").toggleClass("m-menu-btn-ext");
            $(this).closest('.primary-nav-list').slideToggle("slow");
        });
    }


    function mobileMenu() {

        if ($(window).width() <= 983) {
            $('.primary-nav').addClass('m-menu').removeClass('primary-nav');
        } else {
            $('.m-menu').addClass('primary-nav').removeClass('m-menu');
        }

    }


    /*--------------------------------------------------------------
      4. Scroll Function
    --------------------------------------------------------------*/

    function scrollFunction() {

        var scroll = $(window).scrollTop();

        if (scroll >= 10) {
            $(".site-header").addClass("small-height");
        } else {
            $(".site-header").removeClass("small-height");
        }

        // For Scroll Up
        if (scroll >= 350) {
            $(".scrollup").addClass("scrollup-show");
        } else {
            $(".scrollup").removeClass("scrollup-show");
        }

    }


    /*--------------------------------------------------------------
      5. Section Active and Scrolling Animation
    --------------------------------------------------------------*/

    function scrollAnimation() {

        $('a:not(".social-media")').on('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top - 69)
            }, 1250, 'easeInOutExpo');
            event.preventDefault();
        });

    }

    function sectionActive() {

        $('body').scrollspy({
            target: '.site-header',
            offset: 70
        });
    }


    /*--------------------------------------------------------------
      6. Scroll Up
    --------------------------------------------------------------*/

    function scrollUp() {

        $("body").append("<span class='scrollup'></span>");

        $('.scrollup').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 1000);
        });

    }


    /*--------------------------------------------------------------
      7. Owl Carousel
    --------------------------------------------------------------*/

    function owlCarouselSetup() {

        /* Owl Carousel For hero-slider */
        $('.hero-slider').owlCarousel({
            items: 1,
            animateOut: 'fadeOut',
            loop: true,
            autoplay: true
        });
        /* Owl Carousel For Testimonial */
        $('.testimonial').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayHoverPause: false,
            smartSpeed: 1000,
            autoplayTimeout: 5000
        });

    }


    /*--------------------------------------------------------------
      8. Smooth Scroll
    --------------------------------------------------------------*/

    function smoothScrollSetup() {

        if (typeof smoothScroll == 'object') {
            smoothScroll.init();
        }

    }


    /*--------------------------------------------------------------
      9. Accordian
    --------------------------------------------------------------*/

    function accordianSetup() {

        var $this = $(this);
        $(".accordian-head").append("<span class='accordian-toggle'></span>");
        $('.single-accordian').filter(':nth-child(n+2)').children('.accordian-body').hide();
        $('.single-accordian:first-child').children('.accordian-head').addClass('active');
        $('.accordian-head').on('click', function () {
            $(this).parent('.single-accordian').siblings().children('.accordian-body').slideUp();
            $(this).siblings().slideToggle();
            /* Accordian Active Class */
            $(this).toggleClass('active');
            $(this).parent('.single-accordian').siblings().children('.accordian-head').removeClass('active');
        });

    }


    /*--------------------------------------------------------------
    10. Portfolio
    --------------------------------------------------------------*/

    function portfolioMsSetup() {

        $('.portfolio').isotope({
            itemSelector: '.portfolio-item',
            transitionDuration: '0.60s',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer'
            }
        });

        /* Active Class of Portfolio*/
        $('.portfolio-filter ul li').on('click', function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });

        /*=== Portfolio filtering ===*/
        $('.portfolio-filter ul').on('click', 'a', function () {
            var filterElement = $(this).attr('data-filter');
            $(this).parents(".portfolio-filter").next().isotope({
                filter: filterElement
            });
        });

    }


    /*--------------------------------------------------------------
      11. Magnific Popup
    --------------------------------------------------------------*/

    /*   	function magnificPopupSetup() {
    
            $('.zoom-gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                closeOnContentClick: false,
                closeBtnInside: false,
                mainClass: 'mfp-with-zoom mfp-img-mobile',
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,
                    duration: 300, // don't foget to change the duration also in CSS
                    opener: function(element) {
                        return element.find('img');
                    }
                }
                
            });
            
            } */


    /*--------------------------------------------------------------
      12. Tamjid Counter
    --------------------------------------------------------------*/
    function counterUp() {

        $('.counter').tamjidCounter({
            duration: 1500,
            delay: 0,
            easing: 'swing'
        });

    }

    /*--------------------------------------------------------------
        13. Ajax Contact Form
    --------------------------------------------------------------*/

    /* function contactForm() {
        $('.cf-msg').hide();
            $('form#cf button#submit').on('click', function() {
                var name = $('#name').val();
                var email = $('#email').val();
                var msg = $('#msg').val();
                var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                
                if (!regex.test(email)) {
                    $('.cf-msg').fadeIn().html('<div class="alert alert-danger"><strong>Alerta!</strong> Por favor introduzca un correo electrónico válido.</div>');
                    return false;
                }

                name = $.trim(name);
                email = $.trim(email);
                msg = $.trim(msg);

                if (name != '' && email != '' && msg != '') {
                    var values = "name=" + name + "&email=" + email + " &msg=" + msg;
                    $.ajax({
                        type: "POST",
                        url: "mail.php",
                        data: values,

                        success: function() {
                            $('#name').val('');
                            $('#email').val('');
                            $('#msg').val('');

                            $('.cf-msg').fadeIn().html('<div class="alert alert-success"><strong>Éxito!</strong> El correo eléctronico se ha enviado exitosamente.</div>');
                            setTimeout(function() {
                                $('.cf-msg').fadeOut('slow');
                            }, 4000);
                        },
                        error: function() {
                            $('.cf-msg').fadeIn().html('<div class="alert alert-danger"><strong>Error!</strong> No fue posible enviar el correo eléctronico.</div>');
                            setTimeout(function() {
                                $('.cf-msg').fadeOut('slow');
                            }, 4000);
                        }
                    });
                } else {
                    $('.cf-msg').fadeIn().html('<div class="alert alert-danger"><strong>Alerta!</strong> Todos los campos son requeridos.</div>');
                }
                return false;
            });
    } */


})(jQuery); // End of use strict


