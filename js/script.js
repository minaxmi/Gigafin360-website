

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar_short");
    } else {
      $("#mainNav").removeClass("navbar_short");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

$(document).ready(function() {

    toggle_nav_container();
    // gotoByScroll();


});



var toggle_nav_container = function() {



    var $toggleButton = $('#toggle_m_nav');
    $navContainer = $('#m_nav_container');
    $menuButton = $('#m_nav_menu')
    $menuButtonBars = $('.m_nav_ham');
    $wrapper = $('#wrapper');

    // toggle the container on click of button (can be remapped to $menuButton)

    $toggleButton.on("click", function() {

        // declare a local variable for the window width
        var $viewportWidth = $(window).width();

        // if statement to determine whether the nav container is already toggled or not

        if ($navContainer.is(':hidden')) {
            $wrapper.removeClass('closed_wrapper');
            $wrapper.addClass("open_wrapper");
            $navContainer.slideDown(200).addClass('container_open').css("z-index", "2");
            // $(window).scrollTop(0);
            $menuButtonBars.removeClass('button_closed');
            $menuButtonBars.addClass('button_open');
            $("#m_ham_1").addClass("m_nav_ham_1_open");
            $("#m_ham_2").addClass("m_nav_ham_2_open");
            $("#m_ham_3").addClass("m_nav_ham_3_open");

        } else {
            $navContainer.css("z-index", "0").removeClass('container_open').slideUp(200)
            $menuButtonBars.removeClass('button_open')
            $menuButtonBars.addClass('button_closed')
            $wrapper.removeClass('open_wrapper')
            $wrapper.addClass("closed_wrapper")
            $("#m_ham_1").removeClass("m_nav_ham_1_open");
            $("#m_ham_2").removeClass("m_nav_ham_2_open");
            $("#m_ham_3").removeClass("m_nav_ham_3_open");

        }
    });



}


// Function that takes the href value of links in the navbar and then scrolls 
//the div on the page whose ID matches said value. This only works if you use 
//a consistent naming scheme for the navbar anchors and div IDs

/*var gotoByScroll = function() {

    $(".m_nav_item a").on("click", function(e) {
        $('html,body').animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, "slow");

    });

}*/


$('.m_nav_item a').click(function(e){
  e.preventDefault();
  var target = $($(this).attr('href'));
  if(target.length){
    var scrollTo = target.offset().top-50;
    $('body, html').animate({scrollTop: scrollTo+'px'}, 1000);
  }
});  

// navbar activation js file

$('ul.menu__list > .menu__item').click(function(e) {
    e.preventDefault();
    $('ul.menu__list > .menu__item').removeClass('active');
    $(this).addClass('active');
});

// Slider JS

jQuery(document).ready(function($) {

    var jssor_1_SlideoTransitions = [
        [{ b: -1, d: 1, o: -1 }, { b: 0, d: 1000, x: -257, y: -5, o: 1 }],
        [{ b: 480, d: 520, x: 120, y: -270 }],
        [{ b: 1000, d: 500, y: 250 }, { b: 8000, d: 1000, x: 600 }],
        [{ b: -1, d: 1, o: -1, sX: -0.6, sY: -0.6 }, { b: 1500, d: 500, o: 1, r: 360, sX: 0.6, sY: 0.6 }, { b: 8000, d: 1000, y: -150 }],
        [{ b: -1, d: 1, o: -1, tZ: -200 }, { b: 2000, d: 1000, o: 1, tZ: 200 }, { b: 3000, d: 1000, o: -1, tZ: 200 }],
        [{ b: -1, d: 1, o: -1, tZ: -200 }, { b: 3000, d: 1000, o: 1, tZ: 200 }, { b: 4000, d: 1000, o: -1, tZ: 200 }],
        [{ b: -1, d: 1, o: -1, tZ: -200 }, { b: 4000, d: 1000, o: 1, tZ: 200 }, { b: 5000, d: 1000, o: -1, tZ: 200 }],
        [{ b: -1, d: 1, o: -1, tZ: -200 }, { b: 5000, d: 1000, o: 1, tZ: 200 }, { b: 6000, d: 1000, o: -1, tZ: 200 }],
        [{ b: -1, d: 1, o: -1, tZ: -200 }, { b: 6000, d: 1000, o: 1, tZ: 200 }, { b: 7000, d: 1000, o: -1, tZ: 200 }],
        [{ b: -1, d: 1, o: -1, tZ: -200 }, { b: 7000, d: 1000, o: 1, tZ: 200 }, { b: 8000, d: 1000, o: -1, tZ: 200 }],
        [{ b: -1, d: 1, c: { x: 250.0, t: -250.0 } }, { b: 0, d: 1000, c: { x: -250.0, t: 250.0 } }, { b: 5000, d: 1000, y: 100 }],
        [{ b: -1, d: 1, o: -1 }, { b: 1000, d: 1000, o: 1 }, { b: 5000, d: 1000, y: 280 }],
        [{ b: 2000, d: 1000, y: 190, e: { y: 28 } }, { b: 5000, d: 1000, x: 280 }],
        [{ b: 3000, d: 520, y: 50 }, { b: 5000, d: 1000, y: -50 }],
        [{ b: 3520, d: 480, x: -400 }, { b: 5000, d: 800, x: 400, e: { x: 7 } }],
        [{ b: 4000, d: 500, x: -400 }, { b: 5000, d: 800, x: 400, e: { x: 7 } }],
        [{ b: 4500, d: 500, x: -400 }, { b: 5000, d: 800, x: 400, e: { x: 7 } }],
        [{ b: -1, d: 1, c: { x: 250.0, t: -250.0 } }, { b: 0, d: 1000, c: { x: -250.0, t: 250.0 } }, { b: 10000, d: 500, y: 90 }],
        [{ b: -1, d: 1, c: { x: 150.0, t: -150.0 } }, { b: 1000, d: 1000, c: { x: -150.0, t: 150.0 } }, { b: 10000, d: 500, c: { y: 150.0, m: -150.0 } }],
        [{ b: 2000, d: 500, x: 220 }],
        [{ b: 3500, d: 500, rX: -20 }, { b: 4000, d: 1000, rX: 40 }, { b: 5000, d: 500, rX: -10 }, { b: 9500, d: 500, o: -1 }],
        [{ b: 3500, d: 2000, r: 360 }],
        [{ b: -1, d: 1, o: -1 }, { b: 2500, d: 500, x: 76, y: -25, o: 1 }],
        [{ b: -1, d: 1, o: -1 }, { b: 2500, d: 500, x: 47, y: 65, o: 1 }],
        [{ b: -1, d: 1, o: -1 }, { b: 2500, d: 500, x: -47, y: 65, o: 1 }],
        [{ b: -1, d: 1, o: -1 }, { b: 2500, d: 500, x: -76, y: -25, o: 1 }],
        [{ b: -1, d: 1, o: -1 }, { b: 2500, d: 500, y: -80, o: 1 }],
        [{ b: -1, d: 1, c: { x: 120.0, t: -120.0 } }, { b: 6100, d: 400, c: { x: -120.0, t: 120.0 } }, { b: 10000, d: 500, y: -120 }],
        [{ b: 6500, d: 500, x: 220 }],
        [{ b: -1, d: 1, o: -1, r: 180, sX: -0.5, sY: -0.5 }, { b: 7000, d: 500, o: 1, r: 180, sX: 0.5, sY: 0.5 }, { b: 8000, d: 500, o: -1, r: 180, sX: 9, sY: 9 }],
        [{ b: -1, d: 1, o: -1, r: 180, sX: -0.5, sY: -0.5 }, { b: 8000, d: 500, o: 1, r: 180, sX: 0.5, sY: 0.5 }, { b: 9000, d: 500, o: -1, r: 180, sX: 9, sY: 9 }],
        [{ b: -1, d: 1, o: -1, r: 180, sX: -0.5, sY: -0.5 }, { b: 9000, d: 500, o: 1, r: 180, sX: 0.5, sY: 0.5 }, { b: 9500, d: 500, o: -1, r: 180, sX: 9, sY: 9 }]
    ];

    var jssor_1_options = {
        $AutoPlay: true,
        $SlideEasing: $Jease$.$InOutSine,
        $CaptionSliderOptions: {
            $Class: $JssorCaptionSlideo$,
            $Transitions: jssor_1_SlideoTransitions,
            $Breaks: [
                [{ d: 3000, b: 8000, t: 2 }],
                [{ d: 2000, b: 5000 }],
                [{ d: 3000, b: 9500, t: 2 }]
            ]
        },
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
        },
        $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$
        }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    /*responsive code begin*/
    /*you can remove responsive code if you don't want the slider scales while window resizing*/
    function ScaleSlider() {
        var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
        if (refSize) {
            refSize = Math.min(refSize);
            jssor_1_slider.$ScaleWidth(refSize);
        } else {
            window.setTimeout(ScaleSlider, 30);
        }
    }
    ScaleSlider();
    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    /*responsive code end*/
});


// Tabs

$(document).ready(function() {
    $('#horizontalTab').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion           
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        closed: 'accordion', // Start closed if in accordion view
        activate: function(event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#tabInfo');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });
    $('#verticalTab').easyResponsiveTabs({
        type: 'vertical',
        width: 'auto',
        fit: true
    });
});

// button

const body = document.body;
const btn = document.querySelectorAll('.button')[0];



btn.addEventListener('mouseleave', () => {
    body.classList.remove('show');
});


(function($) {

    "use strict";

    //Hide Loading Box (Preloader)
    function handlePreloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(200).fadeOut(500);
        }
    }

    //Scroll to Top
    function headerStyle() {
        if ($('.menu').length) {
            var windowpos = $(window).scrollTop();
            var scrollLink = $('.scroll-top');
            if (windowpos >= 250) {
                scrollLink.addClass('open');
            } else {
                scrollLink.removeClass('open');
            }
        }
    }

    headerStyle();

    // Scroll to Target
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }


    /* ==========================================================================
       When document is scrolling, do
       ========================================================================== */

    $(window).on('scroll', function() {
        headerStyle();
    });

    /* ==========================================================================
       When document is loading, do
       ========================================================================== */

    $(window).on('load', function() {
        handlePreloader();
    });

})(window.jQuery);


// scroll-down

$(function() {
    $('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1000);
        event.preventDefault();
    });
});



// Partnership

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
        "<i class='fa fa-caret-left'></i>",
        "<i class='fa fa-caret-right'></i>"
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        533: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})


// counter JS

$('.counter').counterUp({
    delay: 10,
    time: 2000
});
$('.counter').addClass('animated fadeInDownBig');
$('h3').addClass('animated fadeIn');


// Parallax JS

$(function() {
    if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
        $('.parallax-container').height($(window).height() * 0.5 | 0);
    } else {
        $(window).resize(function() {
            var parallaxHeight = Math.max($(window).height() * 0.7, 100) | 0;
            $('.parallax-container').height(parallaxHeight);
        }).trigger('resize');
    }
});


