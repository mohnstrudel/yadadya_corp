function onYouTubePlayerAPIReady() {
    player = new YT.Player("video-b24-player", {
        height: "100%",
        width: "100%",
        videoId: videoId,
        playerVars: {
            autoplay: 0,
            controls: 0,
            showinfo: 0,
            modestbranding: 0,
            loop: 1,
            fs: 0,
            rel: 0,
            cc_load_policy: 0,
            iv_load_policy: 3,
            playlist: videoId
        },
        events: {
            onReady: onPlayerReady
        }
    })
}

function stopVideo() {
    player.stopVideo()
}

function playVideo() {
    player.playVideo()
}
var Yadadya = {
    params: {
        $menu: $("#menu-wrapper"),
        $header: $("#g-header"),
        $body: $(".g-body"),
        $animated: [],
        windowPoint: parseInt(.9 * $(window).height()),
        isDesctop: window.matchMedia("(min-width: 1151px)"),
        isTablet: window.matchMedia("(max-width: 1150px)"),
        isTabletSmall: window.matchMedia("(max-width: 1150px)"),
        isMobile: window.matchMedia("(max-width: 720px)"),
        isHeaderHide: window.matchMedia("(max-width: 900px)"),
        pageClasses: {
            main: "g-body_main",
            about: "g-body_about",
            contact: "g-body_contact",
            service: "g-body_service"
        }
    },
    rem: parseFloat(getComputedStyle($("html")[0]).fontSize),
    resize: function(e) {
        $(window).on("resize", e)
    },
    resetItems: {},
    supportFunc: {},
    reset: function() {
        Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.main) ? (Yadadya.resetItems.whatSlider && (Yadadya.resetItems.whatSliderSlide = Yadadya.resetItems.whatSlider.getCurrentSlide(), Yadadya.resetItems.whatSlider.destroySlider(), Yadadya.resetItems.whatSlider = null), Yadadya.resetItems.whySlider && (Yadadya.resetItems.whySliderSlide = Yadadya.resetItems.whySlider.getCurrentSlide(), Yadadya.resetItems.whySlider.destroySlider(), Yadadya.resetItems.whySlider = null), Yadadya.resetItems.casesSlider && (Yadadya.resetItems.casesSliderSlide = Yadadya.resetItems.casesSlider.getCurrentSlide(), Yadadya.resetItems.casesSlider.destroySlider(), Yadadya.resetItems.casesSlider = null)) : Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.about) ? (Yadadya.resetItems.proposalSlider && (Yadadya.resetItems.proposalSliderSlide = Yadadya.resetItems.proposalSlider.getCurrentSlide(), Yadadya.resetItems.proposalSlider.destroySlider(), Yadadya.resetItems.proposalSlider = null), Yadadya.resetItems.leadershipSlider && (Yadadya.resetItems.leadershipSliderSlide = Yadadya.resetItems.leadershipSlider.getCurrentSlide(), Yadadya.resetItems.leadershipSlider.destroySlider(), Yadadya.resetItems.leadershipSlider = null), Yadadya.resetItems.aboutSlider && (Yadadya.resetItems.aboutSliderSlide = Yadadya.resetItems.aboutSlider.getCurrentSlide(), Yadadya.resetItems.aboutSlider.destroySlider(), Yadadya.resetItems.aboutSlider = null)) : Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.contact)
    },
    mobile: function() {
        Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.main) ? (Yadadya.resetItems.whatSlider = $("#what-slider").bxSlider({
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 1,
            mouseDrag: !0,
            adaptiveHeight: !0,
            startSlide: Yadadya.resetItems.whatSliderSlide || 0
        }), Yadadya.resetItems.whySlider = $("#why-slider").bxSlider({
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 1,
            mouseDrag: !0,
            adaptiveHeight: !0,
            startSlide: Yadadya.resetItems.whySliderSlide || 0
        }), Yadadya.resetItems.casesSlider = $("#cases-slider").bxSlider({
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 1,
            mouseDrag: !0,
            startSlide: Yadadya.resetItems.casesSliderSlide || 0
        })) : Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.about) ? (Yadadya.resetItems.proposalSlider = $("#proposal-slider").bxSlider({
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 1,
            mouseDrag: !0,
            adaptiveHeight: !0,
            startSlide: Yadadya.resetItems.proposalSliderSlide || 0
        }), Yadadya.resetItems.leadershipSlider = $("#leadership-slider").bxSlider({
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 1,
            mouseDrag: !0,
            adaptiveHeight: !0,
            startSlide: Yadadya.resetItems.proposalSliderSlide || 0
        }), Yadadya.resetItems.aboutSlider = $("#about-write-slider").bxSlider({
            minSlides: 3,
            maxSlides: 3,
            moveSlides: 1,
            mouseDrag: !0,
            adaptiveHeight: !0,
            slideWidth: parseInt(7.27 * Yadadya.rem, 10),
            slideMargin: parseInt(1.81 * Yadadya.rem, 10),
            startSlide: Yadadya.resetItems.aboutSliderSlide || 0
        })) : Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.contact)
    },
    tablet: function() {
        if (Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.main)) {
            $(".g-what-list__item, .g-why-list__item").css({
                height: "auto"
            }), Yadadya.resetItems.casesSlider = $("#cases-slider").bxSlider({
                minSlides: 3,
                maxSlides: 5,
                moveSlides: 1,
                slideWidth: parseInt(317 * Yadadya.rem / 13, 10),
                slideMargin: parseInt(10 * Yadadya.rem / 13, 10),
                mouseDrag: !0,
                startSlide: Yadadya.resetItems.casesSliderSlide || 0
            }), Yadadya.resetItems.whatSlider = $("#what-slider").bxSlider({
                minSlides: 3,
                maxSlides: 3,
                moveSlides: 1,
                slideWidth: parseInt(28.5 * Yadadya.rem, 10),
                slideMargin: parseInt(.5 * Yadadya.rem, 10),
                mouseDrag: !0,
                startSlide: Yadadya.resetItems.whatSliderSlide || 0
            }), Yadadya.resetItems.whySlider = $("#why-slider").bxSlider({
                minSlides: 2,
                maxSlides: 2,
                moveSlides: 1,
                slideWidth: parseInt(57 * Yadadya.rem, 10),
                slideMargin: parseInt(.5 * Yadadya.rem, 10),
                mouseDrag: !0,
                startSlide: Yadadya.resetItems.whySliderSlide || 0
            });
            var e = 0;
            $("#what-slider").find(".g-what-list__item").each(function() {
                e < $(this).outerHeight() && (e = $(this).outerHeight())
            }).css({
                height: e
            }), e = 0, $("#why-slider").find(".g-why-list__item").each(function() {
                e < $(this).outerHeight() && (e = $(this).outerHeight())
            }).css({
                height: e
            })
        } else Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.about) || Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.contact)
    },
    desctop: function() {
        Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.main) ? Yadadya.resetItems.casesSlider = $("#cases-slider").bxSlider({
            minSlides: 3,
            maxSlides: 5,
            moveSlides: 2,
            slideWidth: parseInt(317 * Yadadya.rem / 13, 10),
            slideMargin: parseInt(10 * Yadadya.rem / 13, 10),
            mouseDrag: !0,
            startSlide: Yadadya.resetItems.casesSliderSlide || 0
        }) : Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.about) || Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.contact)
    },
    run: function() {
        Yadadya.rem = parseFloat(getComputedStyle($("html")[0]).fontSize), Yadadya.params.windowPoint = parseInt(.9 * $(window).height()), Yadadya.params.$header.hasClass("g-header_white") && Yadadya.params.$header.next(".g-section").eq(0).css({
            "margin-top": Yadadya.params.$header.outerHeight()
        }), Yadadya.params.$header.hasClass("g-header_white") && (Yadadya.params.isHeaderHide.matches ? (Yadadya.params.$header.find("#menu-wrapper").hide(), Yadadya.params.$header.removeClass("g-header_open"), setTimeout(function() {
            Yadadya.params.$header.find("#menu-wrapper").removeAttr("style")
        }, 300)) : Yadadya.params.$header.addClass("g-header_open")), Yadadya.params.isMobile.matches ? Yadadya.mobile() : Yadadya.params.isTablet.matches ? Yadadya.tablet() : Yadadya.desctop()
    },
    DOMReady: function(e) {
        $(document).ready(function() {
            function a() {
                var e = $(this).scrollTop();
                Math.abs(i - e) <= d || (e > i && e > t ? $("header").addClass("g-header_hidden") : e + $(window).height() < $(document).height() && $("header").removeClass("g-header_hidden"), i = e)
            }
            var s, i = 0,
                d = 5,
                t = $("header").outerHeight();
            $(window).scroll(function(e) {
                s = !0, $(this).scrollTop() > $(".g-header").outerHeight() ? $(".g-header").addClass("g-header_fixed") : $(".g-header").removeClass("g-header_fixed")
            }), setInterval(function() {
                s && (a(), s = !1)
            }, 250), document.documentElement.addEventListener("touchstart", function(e) {
                e.touches.length > 1 && e.preventDefault()
            }, !1);
            var l = 0;
            document.documentElement.addEventListener("touchend", function(e) {
                var a = (new Date).getTime();
                a - l <= 300 && e.preventDefault(), l = a
            }, !1), e()
        })
    },
    scroll: function(e) {
        $(window).scroll(e)
    }
};
Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.main) ? Yadadya.resetItems = {
    whatSlider: null,
    whatSliderSlide: null,
    whySlider: null,
    whySliderSlide: null,
    casesSlider: null,
    casesSliderSlide: null
} : Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.about) ? Yadadya.resetItems = {
    proposalSlider: null,
    proposalSliderSlide: null,
    leadershipSlider: null,
    leadershipSliderSlide: null,
    aboutSlider: null,
    aboutSliderSlide: null
} : Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.contact), Yadadya.resize(function() {
    Yadadya.reset(), Yadadya.run()
}), Yadadya.DOMReady(function() {
    function e(e, a) {
        e.parents(".g-input").toggleClass("g-input_error", a)
    }

    function a(e, a) {
        e.parents(".g-input").toggleClass("g-input_success", a)
    }

    function s(e) {
        var a = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return a.test(e)
    }

    function i() {
        Yadadya.params.$body.hasClass("g-body_overflow") ? (Yadadya.params.$body.removeAttr("style"), $(window).scrollTop(t)) : (t = $(window).scrollTop(), Yadadya.params.$body.css({
            position: "fixed",
            top: -t,
            left: 0,
            right: 0
        })), Yadadya.params.$body.toggleClass("g-body_overflow")
    }

    function d(e) {
        i(), e.fadeToggle()
    }
    Yadadya.run(), Yadadya.params.isMobile.matches ? Yadadya.params.$animated = $(".js-animation.js-animation_mobile") : Yadadya.params.isTablet.matches ? Yadadya.params.$animated = $(".js-animation.js-animation_tablet") : Yadadya.params.$animated = $(".js-animation"), Yadadya.params.$animated.each(function() {
        $(this).css({
            visibility: "hidden",
            "animation-name": "none"
        })
    }), $(".js-input-phone").length > 0 && $(".js-input-phone").inputmask({
        mask: "+7 (999) 999-99-99",
        showMaskOnHover: !1
    }), $(".js-input").on("focus", function() {
        e($(this), !1), a($(this), !1)
    });
    var t;
    if ($(".js-menu").on("click", function() {
            console.log(Yadadya.params.$menu), Yadadya.params.$body.css({
                height: $(window).outerHeight()
            }).toggleClass("g-body_overflow"), Yadadya.params.$menu.toggleClass("g-menu_visible")
        }), $(".js-popup").on("click", function() {
            d($("#form-popup"))
        }), !Yadadya.params.isMobile.matches) {
        var l = $(".g-speakers__list"),
            r = l.find(".g-speakers__item"),
            o = 4;
        Yadadya.params.isMobile.matches ? o = 1 : Yadadya.params.isTablet.matches && (o = 3);
        for (var n = 0; n < o; n++) $("<div>", {
            "class": "g-speakers__colum"
        }).appendTo(l);
        var p = l.find(".g-speakers__colum");
        r.each(function(e) {
            $(this).appendTo(p.eq(e % o))
        })
    }
    if ($(".g-popup").on("click", function(e) {
            ($(e.target).hasClass("g-popup") || 1 == $(e.target).closest(".js-close").length) && d($(this))
        }), $(document).on("submit", ".g-form", function(i) {
            i.preventDefault();
            var t = $(this).find(".js-input"),
                l = !1;
            if (t.each(function() {
                    switch ($(this).attr("name")) {
                        case "name":
                            "" == $(this).val() ? (l = !0, e($(this), !0)) : a($(this), !0);
                            break;
                        case "company":
                            "" == $(this).val() ? (l = !0, e($(this), !0)) : a($(this), !0);
                            break;
                        case "email":
                            s($(this).val()) ? a($(this), !0) : (l = !0, e($(this), !0));
                            break;
                        case "phone":
                            $(this).inputmask("isComplete") ? a($(this), !0) : (l = !0, e($(this), !0))
                    }
                }), !l) {
                var r = $(this);
                r.find("input").attr("disabled", !0), setTimeout(function() {
                    d($("#form-popup")), setTimeout(function() {
                        d($("#success-popup"))
                    }, 500), t.each(function() {
                        $(this).val("").parents(".g-input").removeClass("g-input_success")
                    }), r.find("input").removeAttr("disabled")
                }, 1e3)
            }
            return !1
        }), Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.main)) {
        $('input[type="file"]').fileuploader({
            theme: "onebutton",
            addMore: !0,
            enableApi: !0
        }), Yadadya.params.isDesctop.matches && $("#video-wrapper").append('<video id="video" width="100%" height="auto" autoplay="autoplay" loop="loop" preload="auto"><source src="img/coding.webm" type="video/webm"></source></video>');
        var m = {
            movement: {
                imgWrapper: {
                    translation: {
                        x: -5,
                        y: -5,
                        z: -5
                    },
                    rotation: {
                        x: 0,
                        y: 0,
                        z: 0
                    },
                    reverseAnimation: {
                        duration: 200,
                        easing: "easeOutQuad"
                    }
                }
            }
        };
        $(".js-tilter").each(function() {
            new TiltFx(this, m)
        })
    } else if (Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.about)) {
        Yadadya.params.isMobile.matches && $(".g-skills").on("click", function() {
            var e = $(this);
            return e.hasClass("g-skills_open") ? void e.removeClass("g-skills_open") : ($(".g-skills").removeClass("g-skills_open"), void setTimeout(function() {
                e.addClass("g-skills_open")
            }, 250))
        });
        var m = {
            movement: {
                imgWrapper: {
                    translation: {
                        x: -5,
                        y: -5,
                        z: -5
                    },
                    rotation: {
                        x: 0,
                        y: 0,
                        z: 0
                    },
                    reverseAnimation: {
                        duration: 200,
                        easing: "easeOutQuad"
                    }
                }
            }
        };
        $(".js-tilter").each(function() {
            new TiltFx(this, m)
        })
    } else if (Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.contact)) {
        var m = {
            movement: {
                imgWrapper: {
                    translation: {
                        x: -5,
                        y: -5,
                        z: -5
                    },
                    rotation: {
                        x: 0,
                        y: 0,
                        z: 0
                    },
                    reverseAnimation: {
                        duration: 200,
                        easing: "easeOutQuad"
                    }
                }
            }
        };
        $(".js-tilter").each(function() {
            new TiltFx(this, m)
        }), $('input[type="file"]').fileuploader({
            theme: "onebutton",
            addMore: !0,
            enableApi: !0
        }), mapboxgl.accessToken = "pk.eyJ1Ijoic2NobmliYmEiLCJhIjoiMWEwYWI4YTA3YTAwYjVhYTY1YWZiZGFiZDk1Zjk5NGUifQ.ueMMb8kMdWxrP5N4iqx67Q";
        new mapboxgl.Map({
            container: "g-map",
            style: "mapbox://styles/mapbox/light-v9",
            center: [37.565337, 55.805336],
            zoom: 14.5,
            hash: !1,
            interactive: !0
        })
    } else Yadadya.params.$body.hasClass(Yadadya.params.pageClasses.service) && $('input[type="file"]').fileuploader({
        theme: "onebutton",
        addMore: !0,
        enableApi: !0
    })
}), Yadadya.scroll(function(e) {
    Yadadya.params.$animated.length > 0 && Yadadya.params.$animated.each(function() {
        $(this).offset().top < $(window).scrollTop() + Yadadya.params.windowPoint && !$(this).hasClass("js-animation_animated") && $(this).removeAttr("style").css({
            "animation-delay": $(this).data("animation-delay")
        }).addClass("js-animation_animated")
    })
}), $(window).on("load", function() {
    $(".g-img-wrapper").each(function() {
        $(this).css({
            width: $(this).find(".g-img-wrapper__bg").outerWidth()
        })
    })
});
var userAgent = navigator.userAgent.toLowerCase(),
    isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    isTouch = "ontouchstart" in window,
    mobile = !1;
(isMobile || isTouch) && (mobile = !0);
var videoData = document.getElementsByClassName("js-video-b24");
if (videoData.length > 0) {
    var videoId = "mSVmK4Alve8",
        onPlayerReady, tag = document.createElement("script");
    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var player
}
$(document).ready(function() {
    var e = ($(document), $(window));
    $("html"), $("body");
    $("img, a, button").on("dragstart", function(e) {
        e.preventDefault()
    });
    var a = $(window).width(),
        s = document.querySelectorAll(".scene");
    if (e.width() > 1024 && !isMobile)
        for (var i = 0; i < s.length; ++i) {
            new Parallax(s[i], {
                relativeInput: !0,
                clipRelativeInput: !1,
                hoverOnly: !0,
                calibrateX: !0,
                calibrateY: !0,
                invertX: !1,
                invertY: !0,
                limitX: 25,
                limitY: 15,
                frictionX: .1,
                frictionY: .1,
                selector: ".layer",
                pointerEvents: !0
            })
        }
    var d = {
        movement: {
            imgWrapper: {
                translation: {
                    x: -5,
                    y: -5,
                    z: -5
                },
                rotation: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                reverseAnimation: {
                    duration: 200,
                    easing: "easeOutQuad"
                }
            },
            lines: {
                translation: {
                    x: -8,
                    y: -8,
                    z: -8
                },
                rotation: {
                    x: 0,
                    y: 0,
                    z: 2
                },
                reverseAnimation: {
                    duration: 100,
                    easing: "easeOutQuad"
                }
            }
        }
    };
    if ($(".js-tilter").each(function() {
            new TiltFx(this, d)
        }), videoData.length > 0) {
        var t = +$("#video-b24").offset().top,
            l = +$("#video-b24").height(),
            r = +$("header").height();
        $(".js-anchor-video").on("click", function(e) {
            e.preventDefault();
            var a = t - r;
            $("body, html").animate({
                scrollTop: a
            }, 1e3), playVideo()
        }), onPlayerReady = function(e) {
            e.target.mute();
            var a = $(window).scrollTop();
            a >= t - 2 * r ? (playVideo(), a >= t + l && stopVideo()) : stopVideo(), $(window).on("scroll", function() {
                var e = $(window).scrollTop();
                e >= t - 2 * r ? (playVideo(), e >= t + l && stopVideo()) : stopVideo()
            })
        }
    }
    $(".js-acc-toggle").on("click", function(e) {
        e.preventDefault();
        var a = $(this).closest(".js-acc"),
            s = a.find(".js-acc-item");
        a.toggleClass("open"), s.slideToggle(200)
    }), $(".js-anchor-link").on("click", function(e) {
        e.preventDefault();
        var s = $(this).attr("href"),
            i = 0;
        a > 720 && (i = +$("header").height());
        var d = +$(s).offset().top - i;
        $("body, html").animate({
            scrollTop: d
        }, 1e3)
    });
    var o = new Swiper(".js-slider-b24", {
            loop: !1,
            slidesPerView: 1,
            spaceBetween: "20%",
            speed: 800,
            effect: "fade",
            fadeEffect: {
                crossFade: !0
            }
        }),
        n = null,
        p = 1;
    o.on("slideChange", function() {
        var e = +$(this)[0].realIndex + 1;
        if ($(window).width() > 767) {
            var a = $(".js-slider-b24-nav"),
                s = $(".slider-b24__nav-list").find('.js-slider-b24-nav[data-toggle="' + e + '"]');
            a.removeClass("active"), s.addClass("active"), e > p ? (n = s.prev(".slider-b24__nav-line"), n.addClass("animate")) : (n = s.next(".slider-b24__nav-line"), n.addClass("animate reverse")), p = e, setTimeout(function() {
                n.removeClass("animate reverse")
            }, 800)
        } else {
            var i = $(".slider-b24__mobnav-dropdown").find('.js-dropdown-link[data-toggle="' + e + '"]'),
                d = i.text(),
                t = i.closest(".js-dropdown");
            t.find(".js-dropdown-toggle span").text(d)
        }
    }), $(".js-slider-b24-nav").on("click", function(e) {
        e.preventDefault();
        var a = +$(this).data("toggle") - 1;
        o.slideTo(a)
    });
    var m = (new Swiper(".js-slider-reviews", {
            loop: !0,
            slidesPerView: 3,
            spaceBetween: 10,
            speed: 600,
            navigation: {
                nextEl: $(".js-slider-reviews-next"),
                prevEl: $(".js-slider-reviews-prev")
            },
            breakpoints: {
                767: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    autoHeight: !0,
                    pagination: {
                        el: ".js-slider-reviews-dots",
                        clickable: !0
                    }
                },
                1023: {
                    slidesPerView: 2,
                    spaceBetween: 20
                }
            }
        }), {}),
        c = {
            slidesPerView: 2,
            freeMode: !1,
            loop: !0,
            spaceBetween: 20,
            speed: 400,
            slideClass: "public__img-item",
            wrapperClass: "public__img-list",
            pagination: {
                el: ".js-slider-public-dots",
                clickable: !0
            }
        };
    $(".js-slider-public").each(function(e) {
        m[e] = null
    }), $(".js-slider-public").each(function(e) {
        $(window).width() < 768 ? null === m[e] && $(".js-slider-public").length > 0 && (m[e] = new Swiper($(".public").find(".js-slider-public").eq(e), c)) : m[e] && (m[e].destroy(), m[e] = null, $(".public__img-list").removeAttr("style"))
    }), jQuery(window).resize(function() {
        $(".js-slider-public").each(function(e) {
            $(window).width() < 768 ? null === m[e] && $(".js-slider-public").length > 0 && (m[e] = new Swiper($(".public").find(".js-slider-public").eq(e), c)) : m[e] && (m[e].destroy(), m[e] = null, $(".public__img-list").removeAttr("style"))
        })
    });
    var u = {},
        h = {
            slidesPerView: 2,
            freeMode: !1,
            loop: !1,
            spaceBetween: 10,
            speed: 400,
            slideClass: "icon-col__item",
            wrapperClass: "icon-col__list",
            pagination: {
                el: $(".js-slider-icon-col-dots"),
                clickable: !0
            },
            breakpoints: {
                767: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    loop: !1,
                    autoHeight: !0
                },
                1023: {
                    slidesPerView: 2,
                    autoHeight: !1
                }
            }
        };
    $(".js-slider-icon-col").each(function(e) {
        u[e] = null
    }), $(".js-slider-icon-col").each(function(e) {
        var a = $(".js-slider-icon-col").eq(e);
        $(window).width() < 1025 ? null === u[e] && $(".js-slider-icon-col").length > 0 && (h.pagination.el = a.find(".js-slider-icon-col-dots"), u[e] = new Swiper(a, h)) : u[e] && (u[e].destroy(), u[e] = null, a.find(".icon-col__list").removeAttr("style"), a.find(".icon-col__item").removeAttr("style"))
    }), jQuery(window).resize(function() {
        $(".js-slider-icon-col").each(function(e) {
            var a = $(".js-slider-icon-col").eq(e);
            $(window).width() < 1025 ? null === u[e] && $(".js-slider-icon-col").length > 0 && (h.pagination.el = a.find(".js-slider-icon-col-dots"), u[e] = new Swiper($(".js-slider-icon-col").eq(e), h)) : u[e] && (u[e].destroy(), u[e] = null, a.find(".icon-col__list").removeAttr("style"), a.find(".icon-col__item").removeAttr("style"))
        })
    });
    var y = {},
        g = {
            slidesPerView: 2,
            freeMode: !1,
            loop: !1,
            spaceBetween: 10,
            speed: 400,
            slideClass: "num-col__item",
            wrapperClass: "num-col__list",
            pagination: {
                el: $(".js-slider-num-col-dots"),
                clickable: !0
            },
            breakpoints: {
                767: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    loop: !1,
                    autoHeight: !0
                },
                1023: {
                    slidesPerView: 2,
                    autoHeight: !1
                }
            }
        };
    $(".js-slider-num-col").each(function(e) {
        y[e] = null
    }), $(".js-slider-num-col").each(function(e) {
        var a = $(".js-slider-num-col").eq(e);
        $(window).width() < 1025 ? null === y[e] && $(".js-slider-num-col").length > 0 && (g.pagination.el = a.find(".js-slider-num-col-dots"), y[e] = new Swiper($(".js-slider-num-col").eq(e), g)) : y[e] && (y[e].destroy(), y[e] = null, a.find(".num-col__list").removeAttr("style"), a.find(".num-col__item").removeAttr("style"))
    }), jQuery(window).resize(function() {
        $(".js-slider-num-col").each(function(e) {
            var a = $(".js-slider-num-col").eq(e);
            $(window).width() < 1025 ? null === y[e] && $(".js-slider-num-col").length > 0 && (g.pagination.el = a.find(".js-slider-num-col-dots"), y[e] = new Swiper($(".js-slider-num-col").eq(e), g)) : y[e] && (y[e].destroy(), y[e] = null, a.find(".num-col__list").removeAttr("style"), a.find(".num-col__item").removeAttr("style"))
        })
    }), $(".js-dropdown-toggle").on("click", function(e) {
        e.preventDefault();
        var a = $(this).closest(".js-dropdown");
        a.toggleClass("open"), a.find(".js-dropdown-list").fadeToggle("fast")
    }), jQuery(document).click(function(e) {
        var a = $(e.target).hasClass("js-dropdown") || $(e.target).closest(".dropdown").hasClass("js-dropdown");
        a || ($(".js-dropdown").removeClass("open"), $(".js-dropdown-list").fadeOut("fast"))
    }), $(".js-dropdown-link").on("click", function(e) {
        e.preventDefault();
        var a = $(this).text(),
            s = $(this).closest(".js-dropdown");
        s.find(".js-dropdown-toggle span").text(a), s.removeClass("open"), s.find(".js-dropdown-list").fadeToggle("fast");
        var i = +$(this).data("toggle") - 1;
        o.slideTo(i)
    })
});