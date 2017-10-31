  var Yadadya = {
  params: {
    $menu: $("#menu-wrapper"),
    $header: $("#g-header"),
    $body: $(".g-body"),
    $animated: [],
    windowPoint: parseInt($(window).height() * 0.9),
    isDesctop: window.matchMedia("(min-width: 1151px)"),
    isTablet: window.matchMedia("(max-width: 1150px)"),
    isTabletSmall: window.matchMedia("(max-width: 1150px)"),
        isMobile: window.matchMedia("(max-width: 720px)"),
        isHeaderHide: window.matchMedia("(max-width: 900px)"),
      pageClasses: {
      main: "home",
      about: "about",
      contact: "contact"
    }
  },
  rem: parseFloat(getComputedStyle($("html")[0]).fontSize),
  resize: function(func){
    $(window).on("resize", func);
  },
  resetItems: {},
  supportFunc: {},
  reset: function(){
    if(Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.main)){
      if(Yadadya.resetItems.whatSlider){
            Yadadya.resetItems.whatSliderSlide = Yadadya.resetItems.whatSlider.getCurrentSlide();
            Yadadya.resetItems.whatSlider.destroySlider();
            Yadadya.resetItems.whatSlider = null;
        }
        if(Yadadya.resetItems.whySlider){
            Yadadya.resetItems.whySliderSlide = Yadadya.resetItems.whySlider.getCurrentSlide();
            Yadadya.resetItems.whySlider.destroySlider();
            Yadadya.resetItems.whySlider = null;
        }
        if(Yadadya.resetItems.casesSlider){
            Yadadya.resetItems.casesSliderSlide = Yadadya.resetItems.casesSlider.getCurrentSlide();
            Yadadya.resetItems.casesSlider.destroySlider();
            Yadadya.resetItems.casesSlider = null;
        }
    } else if(Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.about)){
      if(Yadadya.resetItems.proposalSlider){
            Yadadya.resetItems.proposalSliderSlide = Yadadya.resetItems.proposalSlider.getCurrentSlide();
            Yadadya.resetItems.proposalSlider.destroySlider();
            Yadadya.resetItems.proposalSlider = null;
        }
        if(Yadadya.resetItems.leadershipSlider){
            Yadadya.resetItems.leadershipSliderSlide = Yadadya.resetItems.leadershipSlider.getCurrentSlide();
            Yadadya.resetItems.leadershipSlider.destroySlider();
            Yadadya.resetItems.leadershipSlider = null;
        }
        if(Yadadya.resetItems.aboutSlider){
            Yadadya.resetItems.aboutSliderSlide = Yadadya.resetItems.aboutSlider.getCurrentSlide();
            Yadadya.resetItems.aboutSlider.destroySlider();
            Yadadya.resetItems.aboutSlider = null;
        }
    } else if(Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.contact)){
    }
  },
  mobile: function(){
    if(Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.main)){
      Yadadya.resetItems.whatSlider = $("#what-slider").bxSlider({
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        mouseDrag: true,
        adaptiveHeight: true,
        startSlide: Yadadya.resetItems.whatSliderSlide || 0
      });
      Yadadya.resetItems.whySlider = $("#why-slider").bxSlider({
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        mouseDrag: true,
        adaptiveHeight: true,
        startSlide: Yadadya.resetItems.whySliderSlide || 0
      });
      Yadadya.resetItems.casesSlider = $("#cases-slider").bxSlider({
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        mouseDrag: true,
        startSlide: Yadadya.resetItems.casesSliderSlide || 0
      });
    } else if(Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.about)){
      Yadadya.resetItems.proposalSlider = $("#proposal-slider").bxSlider({
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        mouseDrag: true,
        adaptiveHeight: true,
        startSlide: Yadadya.resetItems.proposalSliderSlide || 0
      });
      Yadadya.resetItems.leadershipSlider = $("#leadership-slider").bxSlider({
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        mouseDrag: true,
        adaptiveHeight: true,
        startSlide: Yadadya.resetItems.proposalSliderSlide || 0
      });
      Yadadya.resetItems.aboutSlider = $("#about-write-slider").bxSlider({
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 1,
        mouseDrag: true,
        adaptiveHeight: true,
        slideWidth: parseInt(7.27 * Yadadya.rem, 10),
        slideMargin: parseInt(1.81 * Yadadya.rem, 10),
        startSlide: Yadadya.resetItems.aboutSliderSlide || 0
      });
    } else if(Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.contact)){
    }
  },
  tablet: function(){
    if(Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.main)){
      $(".g-what-list__item, .g-why-list__item").css({height: "auto"});
      Yadadya.resetItems.casesSlider = $("#cases-slider").bxSlider({
        minSlides: 3,
        maxSlides: 5,
        moveSlides: 1,
        slideWidth: parseInt(317 * Yadadya.rem / 13, 10),
        slideMargin: parseInt(10 * Yadadya.rem / 13, 10),
        mouseDrag: true,
        startSlide: Yadadya.resetItems.casesSliderSlide || 0
      });
      Yadadya.resetItems.whatSlider = $("#what-slider").bxSlider({
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 1,
        slideWidth: parseInt(28.5 * Yadadya.rem, 10),
        slideMargin: parseInt(0.5 * Yadadya.rem, 10),
        mouseDrag: true,
        startSlide: Yadadya.resetItems.whatSliderSlide || 0
      });
      Yadadya.resetItems.whySlider = $("#why-slider").bxSlider({
        minSlides: 2,
        maxSlides: 2,
        moveSlides: 1,
        slideWidth: parseInt(57 * Yadadya.rem, 10),
        slideMargin: parseInt(0.5 * Yadadya.rem, 10),
        mouseDrag: true,
        startSlide: Yadadya.resetItems.whySliderSlide || 0
      });
      var maxHeight = 0;
      $("#what-slider").find(".g-what-list__item").each(function(){
        if(maxHeight < $(this).outerHeight())
          maxHeight = $(this).outerHeight();
      }).css({height: maxHeight});
      maxHeight = 0;
      $("#why-slider").find(".g-why-list__item").each(function(){
        if(maxHeight < $(this).outerHeight())
          maxHeight = $(this).outerHeight();
      }).css({height: maxHeight});
    } else if(Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.about)){
    } else if(Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.contact)){
    }
  },
  desctop: function(){
    if(Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.main)){
      Yadadya.resetItems.casesSlider = $("#cases-slider").bxSlider({
        minSlides: 3,
        maxSlides: 5,
        moveSlides: 2,
        slideWidth: parseInt(317 * Yadadya.rem / 13, 10),
        slideMargin: parseInt(10 * Yadadya.rem / 13, 10),
        mouseDrag: true,
        startSlide: Yadadya.resetItems.casesSliderSlide || 0
      });
    } else if(Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.about)){
    } else if(Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.contact)){
    }
  },
  run: function(){
    Yadadya.rem = parseFloat(getComputedStyle($("html")[0]).fontSize);
    Yadadya.params.windowPoint = parseInt($(window).height() * 0.9);
      if(Yadadya.params.$header.hasClass("g-header_white"))
        Yadadya.params.$header.next(".g-section").eq(0).css({'margin-top' : Yadadya.params.$header.outerHeight()});
    if(Yadadya.params.$header.hasClass("g-header_white")){
      if(Yadadya.params.isHeaderHide.matches){
        Yadadya.params.$header.find("#menu-wrapper").hide();
        Yadadya.params.$header.removeClass("g-header_open");
        setTimeout(function(){
          Yadadya.params.$header.find("#menu-wrapper").removeAttr("style");
        }, 300);
      } else{
        Yadadya.params.$header.addClass("g-header_open");
      }
    }
    if (Yadadya.params.isMobile.matches) {
      Yadadya.mobile();
      } else if (Yadadya.params.isTablet.matches) {
        Yadadya.tablet();
      } else {
        Yadadya.desctop();
      }
  },
  DOMReady: function(func){
    $(document).ready(function(){
      var didScroll;
        var lastScrollTop = 0;
        var delta = 5;
        var navbarHeight = $('header').outerHeight();
        $(window).scroll(function(event){
            didScroll = true;
            if ($(this).scrollTop() > $(".g-header").outerHeight()) {
                $(".g-header").addClass("g-header_fixed")
            } else {
                $(".g-header").removeClass("g-header_fixed")
            }
        });
        setInterval(function() {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);
        function hasScrolled() {
            var st = $(this).scrollTop();
            if(Math.abs(lastScrollTop - st) <= delta)
                return;
            if (st > lastScrollTop && st > navbarHeight){
                $('header').addClass('g-header_hidden');
            } else {
                if(st + $(window).height() < $(document).height()) {
                    $('header').removeClass('g-header_hidden');
                }
            }
            lastScrollTop = st;
        }
        document.documentElement.addEventListener('touchstart', function (event) {
          if (event.touches.length > 1) {
            event.preventDefault();
          }
        }, false);
        var lastTouchEnd = 0;
        document.documentElement.addEventListener('touchend', function (event) {
          var now = (new Date()).getTime();
          if (now - lastTouchEnd <= 300) {
            event.preventDefault();
          }
          lastTouchEnd = now;
        }, false);
      func();
    });
  },
  scroll: function(func){
    $(window).scroll(func);
  }
}

if(Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.main)){
  Yadadya.resetItems = {
    whatSlider: null,
      whatSliderSlide: null,
      whySlider: null,
      whySliderSlide: null,
      casesSlider: null,
      casesSliderSlide: null
  }
} else if(Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.about)){
  Yadadya.resetItems = {
    proposalSlider: null,
    proposalSliderSlide: null,
    leadershipSlider: null,
    leadershipSliderSlide: null,
    aboutSlider: null,
    aboutSliderSlide: null,
  }
} else if(Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.contact)){
}
Yadadya.resize(function(){
  Yadadya.reset();
  Yadadya.run();
});
Yadadya.DOMReady(function(){
  console.log("dom ready!");
  Yadadya.run();
  if (Yadadya.params.isMobile.matches)
    Yadadya.params.$animated = $(".js-animation.js-animation_mobile");
  else if (Yadadya.params.isTablet.matches)
    Yadadya.params.$animated = $(".js-animation.js-animation_tablet");
  else
    Yadadya.params.$animated = $(".js-animation");
  Yadadya.params.$animated.each(function(){
    $(this).css({
      "visibility": "hidden",
          "animation-name": "none"});
  });
  if($(".js-input-phone").length > 0)
    $(".js-input-phone").inputmask("+7 (999) 999-99-99");
  function setErrorInput($input, state){
        $input.parents(".g-input").toggleClass("g-input_error", state);
    }
    function setSuccessInput($input, state){
        $input.parents(".g-input").toggleClass("g-input_success", state);
    }
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
  $(".js-input").on("focus", function(){
      setErrorInput($(this), false);
      setSuccessInput($(this), false);
  });
  var ycord;
  function fixBody(){
    if(Yadadya.params.$body.hasClass("g-body_overflow")){
      Yadadya.params.$body.removeAttr("style");
      $(window).scrollTop(ycord);
    }
    else{
      ycord = $(window).scrollTop();
      Yadadya.params.$body.css({position: "fixed", top: -ycord, left: 0, right: 0});
    }
    Yadadya.params.$body.toggleClass("g-body_overflow");
  }
  $(".js-menu").on("click", function(){
    console.log(Yadadya.params.$menu);
    Yadadya.params.$body.css({"height": $(window).outerHeight()}).toggleClass("g-body_overflow");
    Yadadya.params.$menu.toggleClass("g-menu_visible");
  });
  function togglePopup($popup){
    fixBody();
    $popup.fadeToggle();
  };
  $(".js-popup").on("click", function(){
    togglePopup($("#form-popup"));
  });
  if (!Yadadya.params.isMobile.matches){
    var $speak_wrapper = $(".g-speakers__list"),
          $speakers = $speak_wrapper.find(".g-speakers__item"),
          counter = 4;
          if (Yadadya.params.isMobile.matches)
              counter = 1;
          else if (Yadadya.params.isTablet.matches)
              counter = 3;
          for(var i = 0; i < counter; i++)
              $("<div>", {class: "g-speakers__colum"}).appendTo($speak_wrapper);
          var $colums = $speak_wrapper.find(".g-speakers__colum");
          $speakers.each(function(idx){
              $(this).appendTo(
                  $colums.eq(idx % counter)
              );
          });
  }
  $(".g-popup").on("click", function(ev){
    if($(ev.target).hasClass("g-popup") || $(ev.target).closest(".js-close").length == 1)
      togglePopup($(this));
  });
  $(document).on("submit", ".g-form", function(e){
            e.preventDefault();
            var $inputs = $(this).find(".js-input"),
                error = false;
            $inputs.each(function(){
                switch($(this).attr("name")) {
                    case "name":
                        if($(this).val() == ""){
                            error = true;
                            setErrorInput($(this), true);
                        } else
                          setSuccessInput($(this), true);
                        break;
                    case "company":
                        if($(this).val() == ""){
                            error = true;
                            setErrorInput($(this), true);
                        } else
                          setSuccessInput($(this), true);
                        break;
                    case "email":
                        if(!validateEmail($(this).val())){
                            error = true;
                            setErrorInput($(this), true);
                        } else
                          setSuccessInput($(this), true);
                        break;
                    case "phone":
                        if(!$(this).inputmask("isComplete")){
                            error = true;
                            setErrorInput($(this), true);
                        } else
                          setSuccessInput($(this), true);
                    default:
                        break;
                };
            });
            if(!error){
              var $form = $(this);
              $form.find("input").attr("disabled", true);
              setTimeout(function(){
                togglePopup($("#form-popup"));
                setTimeout(function(){
                  togglePopup($("#success-popup"));
                }, 500);
                $inputs.each(function(){
                      $(this).val("").parents(".g-input").removeClass("g-input_success");
                  });
                  $form.find("input").removeAttr("disabled");
              }, 1000);
            }
            return false;
        });
    if(Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.main)){
      $('input[type="file"]').fileuploader({theme: 'onebutton', addMore: true, enableApi: true});
      if (Yadadya.params.isDesctop.matches)
        $("#video-wrapper").append('<video id="video" width="100%" height="auto" autoplay="autoplay" loop="loop" preload="auto"><source src="img/coding.webm" type="video/webm"></source></video>');
      var tiltSettings = {
            movement: {
              imgWrapper : {
                translation : {x: -5, y: -5, z: -5},
                rotation : {x: 0, y: 0, z: 0},
                reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
              }
            }
          };
      $(".js-tilter").each(function(){
        new TiltFx(this, tiltSettings);
      });
    } else if(Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.about)){
      if (Yadadya.params.isMobile.matches) {
        $(".g-skills").on("click", function(){
          var $elem = $(this);
          if($elem.hasClass("g-skills_open")){
            $elem.removeClass("g-skills_open"); 
            return;
          }
          $(".g-skills").removeClass("g-skills_open");
          setTimeout(function(){
            $elem.addClass("g-skills_open");
          }, 250);
          
        });
      }
        var tiltSettings = {
                    movement: {
                        imgWrapper : {
                            translation : {x: -5, y: -5, z: -5},
                            rotation : {x: 0, y: 0, z: 0},
                            reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
                        }
                    }
                };
        $(".js-tilter").each(function(){
            new TiltFx(this, tiltSettings);
        });
    } else if(Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.contact)){
        var tiltSettings = {
                    movement: {
                        imgWrapper : {
                            translation : {x: -5, y: -5, z: -5},
                            rotation : {x: 0, y: 0, z: 0},
                            reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
                        }
                    }
                };
        $(".js-tilter").each(function(){
            new TiltFx(this, tiltSettings);
        });
        
        $('input[type="file"]').fileuploader({theme: 'onebutton', addMore: true, enableApi: true});
      mapboxgl.accessToken = 'pk.eyJ1Ijoic2NobmliYmEiLCJhIjoiMWEwYWI4YTA3YTAwYjVhYTY1YWZiZGFiZDk1Zjk5NGUifQ.ueMMb8kMdWxrP5N4iqx67Q';
        var map = new mapboxgl.Map({
            container: 'g-map',
            style: 'mapbox://styles/mapbox/light-v9',
            // style: 'mapbox://styles/schnibba/ciw9f6qp500542qmkzdjjqd8o',
            center: [37.6124498, 55.7873651],
            zoom: 14.5,
            hash: false,
            interactive: true
        });
    }
});
Yadadya.scroll(function(e){
  if(Yadadya.params.$animated.length > 0)
    Yadadya.params.$animated.each(function(){
      if($(this).offset().top < $(window).scrollTop() + Yadadya.params.windowPoint && !$(this).hasClass("js-animation_animated"))
        $(this).removeAttr("style").css({"animation-delay": $(this).data("animation-delay")}).addClass("js-animation_animated");
    });
});
$(window).on("load", function(){
  $(".g-img-wrapper").each(function(){
    $(this).css({width: $(this).find(".g-img-wrapper__bg").outerWidth()});
  });
});







console.log(Yadadya);


  