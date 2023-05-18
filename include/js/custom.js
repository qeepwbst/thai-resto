var $ = jQuery.noConflict();

jQuery(document).ready(function ($) {
  /*==========================*/
  /* sliders */
  /*==========================*/
  if ($(".simple-slider").length > 0) {
    jQuery(".simple-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      infinite: true,
      centerMode: false,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  if ($(".gallery-slider").length > 0) {
    jQuery(".gallery-slider").slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      infinite: true,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  if ($(".gallery-slider-row").length > 0) {
    jQuery(".gallery-slider-row").slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      infinite: true,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  }

  /*==========================*/
  /* Mobile Slider */
  /*==========================*/
  if ($(".mobile-slider").length > 0) {
    jQuery(".mobile-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      infinite: true,
      centerMode: false,
      responsive: [
        {
          breakpoint: 5000,
          settings: "unslick",
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            adaptiveHeight: false,
          },
        },
      ],
    });
  }

  /*==========================*/
  /* Scroll next */
  /*==========================*/

  jQuery(document).ready(function ($) {
    $("a").click(function (e) {
      e.preventDefault();
      $id = $(this).attr("href");
      $("body,html").animate(
        {
          scrollTop: $($id).offset().top,
        },
        500
      );
    });
  });

  /*==========================*/
  /* Scroll on top */
  /*==========================*/
  $(document).ready(function () {
    "use strict";
    var offSetTop = 100;
    var $scrollToTopButton = $(".scrollToTop");
    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
      if ($(this).scrollTop() > offSetTop) {
        $scrollToTopButton.fadeIn();
      } else {
        $scrollToTopButton.fadeOut();
      }
    });

    //Click event to scroll to top
    $scrollToTopButton.click(function () {
      $("html, body").animate({ scrollTop: 0 }, 800);
      return false;
    });
  });

  /*==========================*/
  /* Scroll on top */
  /*==========================*/

  // Get the element
  let topBtn = document.querySelector(".top-btn");

  // On Click, Scroll to the page's top, replace 'smooth' with 'auto' if you don't want smooth scrolling
  topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // On scroll, Show/Hide the btn with animation
  window.onscroll = () =>
    window.scrollY > 500
      ? (topBtn.style.opacity = 1)
      : (topBtn.style.opacity = 0);
  /*==========================*/
  /* Scroll on animate */
  /*==========================*/
  function onScrollInit(items, trigger) {
    items.each(function () {
      var osElement = $(this),
        osAnimationClass = osElement.attr("data-os-animation"),
        osAnimationDelay = osElement.attr("data-os-animation-delay");
      osElement.css({
        "-webkit-animation-delay": osAnimationDelay,
        "-moz-animation-delay": osAnimationDelay,
        "animation-delay": osAnimationDelay,
      });
      var osTrigger = trigger ? trigger : osElement;
      osTrigger.waypoint(
        function () {
          osElement.addClass("animated").addClass(osAnimationClass);
        },
        {
          triggerOnce: true,
          offset: "95%",
        }
      );
      // osElement.removeClass('fadeInUp');
    });
  }
  onScrollInit($(".os-animation"));
  onScrollInit($(".staggered-animation"), $(".staggered-animation-container"));

  /*==========================*/
  /* Header fix */
  /*==========================*/
  var scroll = $(window).scrollTop();
  if (scroll >= 10) {
    $("body").addClass("fixed");
  } else {
    $("body").removeClass("fixed");
  }
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 10) {
    $("body").addClass("fixed");
  } else {
    $("body").removeClass("fixed");
  }
});
