/* ============================================================
    [Master Scripts]

    Theme Name:     AudiQ 
    Theme URL:      https://photoclerks.com/template/audiq/
    Description:    AudiQ - Voice AI Solutions html template
    Author:         PhotoClerks           
    Version:        1.0.0

============================================================== */
/*
========================================
*********** TABLE OF CONTENTS **********
 
    01.  Country Dropdown Select Js
    02.  Brand slider Js
    03.  Testimonial slider Js
    04.  Blog slider Js
    05.  Password Input box toggle Js
    06.  Cursor Design Js
    07.  Title animation Js
    08.  Odometer Counter Up Js
    09.  Audio Music Js
    10.  Navbar Links Active  Js
    11.  Scroll back to top  Js
    12.  preloader Js 
    13.  textarea characters Js
 
========================================*/

'use strict';
(function ($) {
  // Gsap Plugin Register
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  /* ========================================
    Country Dropdown Select Js
  ======================================== */
  const dropdownItems = document.querySelectorAll('.country__select li');
  const dropdownLink = document.getElementById('countryDropdown');
  dropdownItems.forEach(item => {
    item.addEventListener('click', function () {
      const newText = this.getAttribute('data-text');
      const newImg = this.getAttribute('data-img');
      dropdownLink.innerHTML = `<img src="${newImg}" class="img-flag"> ${newText}`;
    });
  });

  /* ========================================
    Brand slider Js
  ======================================== */
  const brandSwiper = new Swiper('.brand-active-slid', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    allowTouchMove: false,
    spaceBetween: 20,
    speed: 4000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });

  /* ========================================
    Testimonial slider Js
  ======================================== */
  const feedbackOneSwiper = new Swiper('.testimonial-slide', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 24,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: 'slide',
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      }
    },
  });

  /* ========================================
    Blog slider Js
  ======================================== */
  const blogSwiper = new Swiper('.blog-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 24,
    navigation: {
      nextEl: ".blog-button-next",
      prevEl: ".blog-button-prev",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    effect: 'slide',
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      }
    },
  });

  /* ========================================
    Brand slider Js
  ======================================== */
  const reviewSwiper = new Swiper('.review-slid', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    allowTouchMove: true,
    speed: 7000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      }
    },
  });

  const reviewRightSwiper = new Swiper('.review-slid_right', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    allowTouchMove: true,
    speed: 7000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      }
    },
  });

  /* ========================================
    Password Input box toggle Js
  ======================================== */
  if ($('.password-show-toggle').length) {
    const showBtn = $('.password-show-toggle');
    showBtn.each(function () {
      $(this).on('click', function () {
        let inputField = $(this).closest('.contact-input').find('input');
        let openEye = $(this).find('.open-eye-icon');
        let closeEye = $(this).find('.close-eye-icon');

        // Toggle password visibility
        if (inputField.attr('type') === "password") {
          inputField.attr('type', 'text');
          openEye.show();
          closeEye.hide();
        } else {
          inputField.attr('type', 'password');
          openEye.hide();
          closeEye.show();
        }
      });
    });
  }

  /* ========================================
    Cursor Design Js
  ======================================== */
  if ($('.cursor, .cursor-trail').length) {
    const cursor = document.querySelector(".cursor");
    const cursorTrail = document.querySelector(".cursor-trail");

    document.addEventListener("mousemove", (event) => {
      gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.1,
      });

      gsap.to(cursorTrail, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    const interactiveElements = document.querySelectorAll("a, button");

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(cursor, { scale: 1.05 });
        gsap.to(cursorTrail, { scale: 1.7, backgroundColor: "rgba(255, 255, 255, 0.0)" });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(cursor, { scale: 1 });
        gsap.to(cursorTrail, { scale: 1, backgroundColor: "rgba(255, 255, 255, 0.308)" });
      });

    });
  }

  /* ========================================
    Title animation Js
  ======================================== */
  if ($(".title-animation").length) {
    const char_come = gsap.utils.toArray(".title-animation");
    char_come.forEach((char_come) => {
      const split_char = new SplitText(char_come, {
        type: "chars, words",
        lineThreshold: 0.5,
      });
      const staggerDuration = window.innerWidth < 768 ? 0.05 : 0.03;
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: char_come,
          start: "top 90%",
          end: "bottom 60%",
          scrub: false,
          markers: false, // Change to true for debugging
          toggleActions: "play none none none",
        },
      });
      tl2.from(split_char.chars, {
        duration: 0.8,
        x: 70,
        autoAlpha: 0,
        stagger: staggerDuration,
      });
    });


    /* ========================================
      Sub title animation Js
    ======================================== */
    if ($(".sub-animation").length) {
      const animateTextFromBottom = gsap.utils.toArray(".sub-animation");
      animateTextFromBottom.forEach((item) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "bottom 60%",
            toggleActions: "play none none none",
          },
        });
        const splitText = new SplitText(item, { type: "chars, words, lines" });
        splitText.split({ type: "words" });
        tl.from(splitText.words, {
          duration: 1,
          y: 50,
          autoAlpha: 0,
          stagger: 0.05,
          onComplete: () => {
            splitText.revert();
          },
        });
      });
    }

    /* ========================================
      3d animation Js
    ======================================== */
    if ($(".animate-3d").length) {
      const animateLine3d = gsap.utils.toArray(".animate-3d");
      animateLine3d.forEach((item) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "bottom 60%",
            toggleActions: "play none none none",
          },
        });
        const animateLine3dSplitted = new SplitText(item, { type: "chars, words, lines" });
        gsap.set(item, { perspective: 400 });
        animateLine3dSplitted.split({ type: "lines" });
        tl.from(animateLine3dSplitted.lines, {
          duration: 1,
          delay: 0.3,
          opacity: 0,
          rotationX: -80,
          force3D: true,
          transformOrigin: "top center -50",
          stagger: 0.1,
          onComplete: () => {
            animateLine3dSplitted.revert();
          },
        });
      });
    }

    /* ========================================
      Button and text animation Js
    ======================================== */
    if ($(".btn-text-animate").length) {
      const animateTextFromBottom = gsap.utils.toArray(".btn-text-animate");
      animateTextFromBottom.forEach((item) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "bottom 60%",
            toggleActions: "play none none none",
          },
        });
        const animateTextFromBottomSplitted = new SplitText(item, { type: "chars, words, lines" });
        animateTextFromBottomSplitted.split({ type: "words" });
        tl.from(animateTextFromBottomSplitted.words, {
          duration: 1,
          y: 50,
          autoAlpha: 0,
          stagger: 0.05,
          onComplete: () => {
            animateTextFromBottomSplitted.revert();
          },
        });
      });
    }

    /* ========================================
      Generalized Fade-In animation Js
    ======================================== */
    function fadeIn(targets, properties = {}, options = {}) {
      const elements = gsap.utils.toArray(targets);
      if (elements.length === 0) return;
      gsap.from(elements, {
        opacity: properties.opacity ?? 0,
        y: properties.y ?? 0,
        x: properties.x ?? 0,
        duration: properties.duration ?? 1,
        delay: properties.delay ?? 0,
        stagger: options.stagger ?? 0.15,
        ease: options.ease ?? "power2.out",
        scrollTrigger: {
          trigger: elements,
          start: options.start || "top 90%",
          end: options.end || "bottom 60%",
          toggleActions: options.toggleActions || "play none none none",
        },
      });
    }
    function fadeInElements() {
      fadeIn(".animate-fadeInBottom", { y: 50 }, { stagger: 0.1 });
      fadeIn(".fadeIn_50", { y: 50 });
      fadeIn(".fadeIn_promo", { y: 80 });
      fadeIn(".fadeDown_testimonial", { y: 80 });
      fadeIn(".fadeIn_every", { y: 100 }, { stagger: 0.25 });
      fadeIn(".fadeIn_pricing", { y: 100 }, { stagger: 0.25 });
      fadeIn(".team-section__item", { y: 100 }, { stagger: 0.25 });
      fadeIn(".testimonial-slide__item", { y: 90 }, { stagger: 0.15 });

      fadeIn(".fadeDown_50", { x: -50 });
      fadeIn(".fadeDown_80", { x: -80 });
      fadeIn(".fadeDown_100", { x: -100 });
      fadeIn(".fadeIn_cases", { x: -100 });
      fadeIn(".fadeIn_faq", { x: -100 });
      fadeIn(".fadeIn_faq2", { x: 100 });
      fadeIn(".fadeIn_content", { x: -100 });

      fadeIn(".input-box", { duration: 2, delay: 0.25 }, { stagger: 0.25 });
      fadeIn(".fadeIn_1", { duration: 2, delay: 0.25 }, { stagger: 0.25 });
      fadeIn(".fadeIn_human", { duration: 2, delay: 0.25 }, { stagger: 0.25 });
      fadeIn(".blog-section__item", { duration: 1.8, delay: 0.20 }, { stagger: 0.25 });
    }
    fadeInElements();


    if ($(".reveal-img").length > 0) {
      gsap.utils.toArray(".reveal-img").forEach((el) => {
        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            markers: false,
            onEnter: () => {
              el.classList.add("reveal-img-active");
            },
          },
        });
      });
    }

    /* ========================================
      Navbar sticky Js
    ======================================== */
    if ($('.navbar').length) {
      gsap.to(".navbar", {
        scrollTrigger: {
          trigger: ".navbar",
          start: "top+=1 top",
          endTrigger: "body",
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
          toggleClass: { targets: ".navbar", className: "sticky" },
        },
      });
    }

    const imageParallax = document.querySelectorAll(".parallax-image");

    // Check if there are any matching elements
    if (imageParallax.length > 0) {
      // Iterate through each element
      imageParallax.forEach(function (element) {
        // Create the wrapper elements
        const wrapper = document.createElement("div");
        wrapper.className = "parallax-image-wrap";

        const innerWrapper = document.createElement("div");
        innerWrapper.className = "parallax-image-inner";

        // Wrap the element with the created wrappers
        element.parentNode.insertBefore(wrapper, element);
        wrapper.appendChild(innerWrapper);
        innerWrapper.appendChild(element);

        // Apply CSS styles to the wrapper
        wrapper.style.overflow = "hidden";

        // Animation setup for parallax effect
        const animImageParallax = element;
        const imgParallaxWrapper = wrapper;
        const innerWrap = innerWrapper;

        const tlImageParallax = gsap.timeline({
          scrollTrigger: {
            trigger: imgParallaxWrapper,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            onEnter: animImgParallaxRefresh,
          },
        });

        tlImageParallax.to(animImageParallax, {
          yPercent: 35,
          ease: "none",
        });

        // Function to refresh the scroll trigger
        function animImgParallaxRefresh() {
          tlImageParallax.scrollTrigger.refresh();
        }

        // Animation setup for zoom-in effect
        const tlZoomIn = gsap.timeline({
          scrollTrigger: {
            trigger: imgParallaxWrapper,
            start: "top 99%",
          },
        });

        tlZoomIn.from(innerWrap, {
          duration: 1.5,
          opacity: 0,
          scale: 1.2,
          ease: "power2.out",
          clearProps: "all",
        });
      });
    }

  }

  /* ========================================
    Odometer Counter Up Js
   ======================================== */
  // data-odometer-final
  if ($('.odometer').length) {
    $(window).on('scroll', function () {
      $('.odometer').each(function () {
        if ($(this).isInViewport()) {
          if (!$(this).data('odometer-started')) {
            $(this).data('odometer-started', true);
            this.innerHTML = $(this).data('odometer-final');
          }
        }
      });
    });
  }
  // isInViewport helper function
  $.fn.isInViewport = function () {
    let elementTop = $(this).offset().top;
    let elementBottom = elementTop + $(this).outerHeight();
    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  /* ========================================
     Audio Music Js
   ======================================== */
  if ($('.play-btn').length) {
    const playButtons = document.querySelectorAll('.play-btn');
    let currentlyPlayingAudio = null;
    let currentWave = null;
    let currentButton = null;

    playButtons.forEach(button => {
      button.addEventListener('click', () => {
        const audioSrc = button.getAttribute('data-audio');
        const wave = button.previousElementSibling;
        const parentItem = button.closest('.play__item');
        const isPlaying = button.getAttribute('data-playing') === 'true';

        if (isPlaying) {
          currentlyPlayingAudio.pause();
          currentlyPlayingAudio.currentTime = 0;
          button.querySelector('i').textContent = 'play_circle';
          button.setAttribute('data-playing', 'false');
          wave.classList.remove('wave_active');
          parentItem.classList.remove('active');
        } else {
          if (currentlyPlayingAudio) {
            currentlyPlayingAudio.pause();
            currentlyPlayingAudio.currentTime = 0;

            if (currentWave) currentWave.classList.remove('wave_active');
            if (currentButton) {
              currentButton.querySelector('i').textContent = 'play_circle';
              currentButton.setAttribute('data-playing', 'false');
              currentButton.closest('.play__item').classList.remove('active');
            }
          }

          const audio = new Audio(audioSrc);
          audio.volume = 0.8;
          audio.play().then(() => {
            currentlyPlayingAudio = audio;

            button.querySelector('i').textContent = 'pause_circle';
            button.setAttribute('data-playing', 'true');

            wave.classList.add('wave_active');
            parentItem.classList.add('active');

            currentButton = button;
            currentWave = wave;

            audio.addEventListener('ended', () => {
              button.querySelector('i').textContent = 'play_circle';
              button.setAttribute('data-playing', 'false');
              wave.classList.remove('wave_active');
              parentItem.classList.remove('active');
            });
          }).catch(error => {
            console.error('Error playing audio:', error);
          });
        }
      });
    });
  }


  /* ========================================
     Navbar Links Active  Js
   ======================================== */
  if ($('.navbar-nav').length) {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .dropdown-menu .dropdown-item');

    const removeActiveClass = () => {
      navLinks.forEach((link) => link.classList.remove('active'));
    };

    const setActiveLink = () => {
      const currentPath = window.location.pathname;
      removeActiveClass();

      navLinks.forEach((link) => {
        const linkPath = link.getAttribute('href');
        if (linkPath && currentPath.endsWith(linkPath)) {
          link.classList.add('active');

          const parentDropdown = link.closest('.dropdown-menu')?.previousElementSibling;
          if (parentDropdown) {
            parentDropdown.classList.add('active');
          }
        }
      });
    };
    setActiveLink();
  }

  /* ========================================
     Scroll back to top  Js
   ======================================== */
  if ($('.progress-wrap').length) {
    const progressPath = document.querySelector('.progress-wrap path');
    const pathLength = progressPath.getTotalLength();

    // Set up the initial stroke styles
    progressPath.style.transition = 'none';
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();

    // Set transition for stroke-dashoffset
    progressPath.style.transition = 'stroke-dashoffset 10ms linear';

    const updateProgress = () => {
      const scroll = $(window).scrollTop();
      const height = $(document).height() - $(window).height();
      const progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = progress;
    };

    updateProgress();
    $(window).on('scroll', updateProgress);

    const offset = 50;
    const duration = 550;

    $(window).on('scroll', () => {
      $('.progress-wrap').toggleClass('active-progress', $(window).scrollTop() > offset);
    });

    $('.progress-wrap').on('click', (event) => {
      event.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, duration);
    });
  }

  /* ========================================
    preloader Js
  ======================================== */
  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  });


  /* ========================================
    textarea characters Js
  ======================================== */
  if ($('.input-box').length) {
    const textarea = document.getElementById('controlTextarea');
    const charCount = document.getElementById('charCount');

    if (textarea && charCount) {
      const updateCounter = () => {
        const currentLength = textarea.value.length;
        charCount.textContent = `${currentLength}/250 Characters Used`;

        if (currentLength >= 250) {
          charCount.style.color = '#fb4646';
        } else {
          charCount.style.color = '';
        }
      };

      textarea.addEventListener('input', updateCounter);
    }
  }

  if ($('#contact-form').length) {
    var form = $('#contact-form');
    var formMessages = $('.form-message');

    $(form).submit(function (e) {
      e.preventDefault();

      var formData = $(form).serialize();

      $.ajax({
        type: 'POST',
        url: $(form).attr('action'),
        data: formData
      })
        .done(function (response) {
          $(formMessages).removeClass('error').addClass('success').text(response);
          $('#contact-form input, #contact-form textarea').val('');
        })
        .fail(function (data) {
          $(formMessages).removeClass('success').addClass('error');
          $(formMessages).text(data.responseText || 'Oops! An error occurred and your message could not be sent.');
        });
    });
  }


})(jQuery);
