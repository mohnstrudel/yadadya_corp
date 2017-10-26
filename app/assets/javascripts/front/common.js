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
        isHeaderHide: window.matchMedia("(max-width: 900px)")
	},
	rem: parseFloat(getComputedStyle($("html")[0]).fontSize),
	resize: function(func){
		$(window).on("resize", func);
	},
	resetItems: {},
	supportFunc: {},
	reset: function(){		
	},
	mobile: function(){		
	},
	tablet: function(){
	},
	desctop: function(){
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

		        // Make sure they scroll more than delta
		        if(Math.abs(lastScrollTop - st) <= delta)
		            return;

		        // If they scrolled down and are past the navbar, add class .nav-up.
		        // This is necessary so you never see what is "behind" the navbar.
		        if (st > lastScrollTop && st > navbarHeight){
		            // Scroll Down
		            $('header').addClass('g-header_hidden');
		        } else {
		            // Scroll Up
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

		    //Disable double tap on document
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
// Var Yadadya end

Yadadya.resize(function(){
	Yadadya.reset();
	Yadadya.run();
  // console.log('resized!');

});
// $(document).on('turbolinks:load', function(){
Yadadya.DOMReady(function(){
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
    console.log('clicked menu!');
    var menu = $('#menu-wrapper');
    var body = $('body');
    // console.log(menu);
		// Yadadya.params.$body.css({"height": $(window).outerHeight()}).toggleClass("g-body_overflow");	
		// Yadadya.params.$menu.toggleClass("g-menu_visible");
    body.css({"height": $(window).outerHeight()}).toggleClass("g-body_overflow"); 
    menu.toggleClass("g-menu_visible");
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