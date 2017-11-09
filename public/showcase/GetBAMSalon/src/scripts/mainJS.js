/*$(window).resize(function () {
 *//* Перенос поиска в header, при изменении разрешения экрана меньше 768 *//*
 if ($('html').width() <= 768) {
 $('.search').appendTo('.header');
 } else if ($('html').width() >= 768) {
 $('.search').insertAfter('.addClient');
 }
 });*/

var close = $("#close");
$(function () {
    $(".showMore").slice(0, 3).show();
    var loadMore = $("#loadMore");
    var hideMore = $("#hideMore");
    loadMore.addClass("show");
    hideMore.addClass("hide");
    loadMore.on('click', function (e) {
        e.preventDefault();
        $(".showMore:hidden").slice(0, 3).slideDown();
        if ($(this).length == 0) {
            $("#load").fadeOut('slow');
        }
        loadMore.addClass("hide");
        hideMore.addClass("show").removeClass("hide");
    });
    hideMore.on('click', function (e) {
        e.preventDefault();
        $(".showMore").slice(3).slideUp();
        if ($(this).length == 0) {
            $("#load").fadeIn('slow');
        }
        hideMore.addClass("hide");
        loadMore.addClass("show").removeClass("hide");
        $('.comeClientsList').removeClass('master-slide');
        $('.slider').css('display', 'none');
    });
    var loadMore2 = $("#loadMore2");
    var hideMore2 = $("#hideMore2");
    $(".showMore2").slice(0, 3).show();
    loadMore2.addClass("show");
    hideMore2.addClass("hide");
    loadMore2.on('click', function (e) {
        e.preventDefault();
        $(".showMore2:hidden").slice(0, 3).slideDown();
        if ($(this).length == 0) {
            $("#load").fadeOut('slow');
        }
        loadMore2.addClass("hide");
        hideMore2.addClass("show").removeClass("hide");
    });
    hideMore2.on('click', function (e) {
        e.preventDefault();
        $(".showMore2").slice(3).slideUp();
        if ($(this).length == 0) {
            $("#load").fadeIn('slow');
        }
        hideMore2.addClass("hide");
        loadMore2.addClass("show").removeClass("hide");
    });
    var loadMore3 = $("#loadMore3");
    var hideMore3 = $("#hideMore3");
    $(".showMore3").slice(0, 3).show();
    loadMore3.addClass("show");
    hideMore3.addClass("hide");
    loadMore3.on('click', function (e) {
        e.preventDefault();
        $(".showMore3:hidden").slice(0, 3).slideDown();
        if ($(this).length == 0) {
            $("#load").fadeOut('slow');
        }
        loadMore3.addClass("hide");
        hideMore3.addClass("show").removeClass("hide");
    });
    hideMore3.on('click', function (e) {
        e.preventDefault();
        $(".showMore3").slice(3).slideUp();
        if ($(this).length == 0) {
            $("#load").fadeIn('slow');
        }
        hideMore3.addClass("hide");
        loadMore3.addClass("show").removeClass("hide");
    });

});

$(document).ready(function () {
    $('.data-one').circliful();

});

(function ($) {

    $.fn.circliful = function (options) {
        var settings = $.extend({
// These are the defaults.
            startdegree: 0,
            fgcolor: "#556b2f",
            bgcolor: "#eee",
            fill: false,
            width: 15,
            dimension: 200,
            fontsize: 15,
            percent: 50,
            animationstep: 1.0,
            iconsize: '20px',
            iconcolor: '#999',
            border: 'default',
            complete: null,
            bordersize: 10
        }, options);

        return this.each(function () {

            var customSettings = ["fgcolor", "bgcolor", "fill", "width", "dimension", "fontsize", "animationstep", "endPercent", "icon", "iconcolor", "iconsize", "border", "startdegree", "bordersize"];

            var customSettingsObj = {};
            var icon = '';
            var percent;
            var endPercent = 0;
            var obj = $(this);
            var fill = false;
            var text, info;

            obj.addClass('circliful');

            checkDataAttributes(obj);

            if (obj.data('text') != undefined) {
                text = obj.data('text');

                if (obj.data('icon') != undefined) {
                    icon = $('<i></i>')
                        .addClass('fa ' + $(this).data('icon'))
                        .css({
                            'color': customSettingsObj.iconcolor,
                            'font-size': customSettingsObj.iconsize
                        });
                }

                if (obj.data('type') != undefined) {
                    type = $(this).data('type');

                    if (type == 'half') {
                        addCircleText(obj, 'circle-text-half', (customSettingsObj.dimension / 1.45));
                    } else {
                        addCircleText(obj, 'circle-text', customSettingsObj.dimension);
                    }
                } else {
                    addCircleText(obj, 'circle-text', customSettingsObj.dimension);
                }
            }

            if ($(this).data("total") != undefined && $(this).data("part") != undefined) {
                var total = $(this).data("total") / 100;

                percent = (($(this).data("part") / total) / 100).toFixed(3);
                endPercent = ($(this).data("part") / total).toFixed(3);
            } else {
                if ($(this).data("percent") != undefined) {
                    percent = $(this).data("percent") / 100;
                    endPercent = $(this).data("percent");
                } else {
                    percent = settings.percent / 100;
                }
            }

            if ($(this).data('info') != undefined) {
                info = $(this).data('info');

                if ($(this).data('type') != undefined) {
                    type = $(this).data('type');

                    if (type == 'half') {
                        addInfoText(obj, 0.9);
                    } else {
                        addInfoText(obj, 1.25);
                    }
                } else {
                    addInfoText(obj, 1.25);
                }
            }

            $(this).width(customSettingsObj.dimension + 'px');

            var size = customSettingsObj.dimension,
                canvas = $('<canvas></canvas>').attr({
                    width: size,
                    height: size
                }).appendTo($(this)).get(0);

            var context = canvas.getContext('2d');

            var dpr = window.devicePixelRatio;
            if (dpr) {
                var $canvas = $(canvas);
                $canvas.css('width', size);
                $canvas.css('height', size);
                $canvas.css('border-radius', '25px');
                $canvas.attr('width', size * dpr);
                $canvas.attr('height', size * dpr);

                context.scale(dpr, dpr);
            }

//var container = $(canvas).parent();
            var x = size / 2;
            var y = size / 2;
//var degrees = customSettingsObj.percent * 360.0;
//var radians = degrees * (Math.PI / 180);
            var radius = size / 2.5;
            var startAngle = 2.3 * Math.PI;
            var endAngle = 0;
//var counterClockwise = false;
            var curPerc = customSettingsObj.animationstep === 0.0 ? endPercent : 0.0;
            var curStep = Math.max(customSettingsObj.animationstep, 0.0);
            var circle = Math.PI * 2;
            var quart = Math.PI / 2;
            var type = '';
            var fireCallback = true;
            var additionalAngelPI = (customSettingsObj.startdegree / 180) * Math.PI;

            if ($(this).data('type') != undefined) {
                type = $(this).data('type');

                if (type == 'half') {
                    startAngle = 2.0 * Math.PI;
                    endAngle = 3.13;
                    circle = Math.PI;
                    quart = Math.PI / 0.996;
                }
            }

            if ($(this).data('type') != undefined) {
                type = $(this).data('type');

                if (type == 'angle') {
                    startAngle = 2.25 * Math.PI;
                    endAngle = 2.4;
                    circle = 1.53 + Math.PI;
                    quart = 0.73 + Math.PI / 0.996;
                }
            }

            /**
             * adds text to circle
             *
             * @param obj
             * @param cssClass
             * @param lineHeight
             */
            function addCircleText(obj, cssClass, lineHeight) {
                $("<span></span>")
                    .appendTo(obj)
                    .addClass(cssClass)
                    .html(text)
                    .prepend(icon)
                    .css({
                        'line-height': lineHeight + 'px',
                        'font-size': customSettingsObj.fontsize + 'px'
                    });
            }

            /**
             * adds info text to circle
             *
             * @param obj
             * @param factor
             */
            function addInfoText(obj, factor) {
                $('<span></span>')
                    .appendTo(obj)
                    .addClass('circle-info-half')
                    .css(
                    'line-height', (customSettingsObj.dimension * factor) + 'px'
                )
                    .text(info);
            }

            /**
             * checks which data attributes are defined
             * @param obj
             */
            function checkDataAttributes(obj) {
                $.each(customSettings, function (index, attribute) {
                    if (obj.data(attribute) != undefined) {
                        customSettingsObj[attribute] = obj.data(attribute);
                    } else {
                        customSettingsObj[attribute] = $(settings).attr(attribute);
                    }

                    if (attribute == 'fill' && obj.data('fill') != undefined) {
                        fill = true;
                    }
                });
            }

            /**
             * animate foreground circle
             * @param current
             */
            function animate(current) {

                context.clearRect(0, 0, canvas.width, canvas.height);

                context.beginPath();
                context.arc(x, y, radius, endAngle, startAngle, false);

                context.lineWidth = customSettingsObj.width + 1;

                context.strokeStyle = customSettingsObj.bgcolor;
                context.stroke();

                if (fill) {
                    context.fillStyle = customSettingsObj.fill;
                    context.fill();
                }

                context.beginPath();
                context.arc(x, y, radius, -(quart) + additionalAngelPI, ((circle) * current) - quart + additionalAngelPI, false);

                if (customSettingsObj.border == 'outline') {
                    context.lineWidth = customSettingsObj.width + 13;
                } else if (customSettingsObj.border == 'inline') {
                    context.lineWidth = customSettingsObj.width - 13;
                }

                context.strokeStyle = customSettingsObj.fgcolor;
                context.stroke();

                if (curPerc < endPercent) {
                    curPerc += curStep;
                    requestAnimationFrame(function () {
                        animate(Math.min(curPerc, endPercent) / 100);
                    }, obj);
                }

                if (curPerc == endPercent && fireCallback && typeof(options) != "undefined") {
                    if ($.isFunction(options.complete)) {
                        options.complete();

                        fireCallback = false;
                    }
                }
            }

            animate(curPerc / 100);

        });
    };
}(jQuery));

$(function () {
    $('.slider .item').each(function (i) {
        var $this = $(this),
            width = $this.width(),
            left = width * i,
            color = 25 * i;
        $this.css({left: left})
            .find('.inset').css({backgroundColor: color});
    });
    $('.trigger').on('click', function () {
        var $this = $(this),
            width = $('.item').width() * 4,
            speed = 500;
        if ($this.hasClass('prev')) {
            $('.frame').animate({scrollLeft: '-=' + width}, speed);
        } else if ($this.hasClass('next')) {
            $('.frame').animate({scrollLeft: '+=' + width}, speed);
        }
    });
});
$(function () {
    $(".comeClinetsFoto").on('click', function () {
        if ($(this).parent().hasClass("master-slide")) {
            $('.comeClientsList').removeClass("master-slide");
            $(this).parent().addClass("master-slide");
        } else {
            $('.comeClientsList').removeClass("master-slide");
        }
        $(this).parent().toggleClass("master-slide");
        var slider = $(".slider");
        if ($(this).parent().hasClass("master-slide")) {
            slider.show();
            slider.add().insertAfter($(this).parent());
        } else {
            slider.hide();
        }

    });
});

/* Master Settings Page START*/
$('.addNewMaster').click(function () {
    $('#newMasterModal').css('display', 'block');
    $('#modal1').css('display', 'block');
});
$('#noMastersAdd').click(function () {
    $('#newMasterModal').css('display', 'block');
    $('#modal1').css('display', 'block');
});
$('.addBtn').click(function () {
    $('#newMasterModal').css('display', 'none');
    $('#modal1').css('display', 'none');
    return false;
});
$('.group-masters').click(function () {
    $('#newMasterModal').css('display', 'block');
    $('#modal-add-group').css('display', 'block');
});
$("#close").click(function () {
    $('#newMasterModal').css('display', 'none');
    $('#modal1').css('display', 'none');
    $('#modal-add-group').css('display', 'none');
});
$('.add-group').click(function () {
    $('#newMasterModal').css('display', 'none');
    $('#modal-add-group').css('display', 'none');
});

/*$(document).ready(function () {
 $('.go-to-profile').click(function () {
 $('#masterProfile').fadeIn( "slow" ).css('display', 'inline-block');
 return false;
 });
 });*/
$(document).ready(function () {
    $('.go-to-profile').click(function () {
        $('.master-worktime').fadeIn("slow").css('display', 'inline-block');
        $('.salon-worktime').css('display', 'none');
        return false;
    });
});
$('.allMastersList a').on('click', function () {
    if ($(this).hasClass('go-to-profile')) {
        $('#masterProfile').fadeIn("slow").css('display', 'none');
        $(this).removeClass('go-to-profile');
    } else {
        $('#masterProfile').fadeIn("slow").css('display', 'inline-block');
        $(this).removeClass('go-to-profile');
        $(this).addClass('go-to-profile');
    }
});

$(document).ready(function () {
    $('.salon-time').click(function () {
        $('.salon-worktime').fadeIn("slow").css('display', 'inline-block');
        $('.master-worktime').css('display', 'none');
        return false;
    });
});
/* Master Settings Page END*/
/* Client Page START*/
$('.addClient').click(function () {
    $('#newMasterModal').css('display', 'block');
    $('#modalClient').css('display', 'block');
});
$('.addClient1').click(function () {
    $('#newMasterModal').css('display', 'block');
    $('#modalClient').css('display', 'block');
});


$('.addClientsBtn').click(function () {
    $('#newMasterModal').css('display', 'none');
    $('#modalClient').css('display', 'none');
    return false;
});
$("#close").click(function () {
    $('#newMasterModal').css('display', 'none');
    $('#modalClient').css('display', 'none');
});

$('#listKozlov').click(function () {
    $('#clientKozlov').fadeIn("slow").css('display', 'inline-block');
    $('.clientVisitTable').fadeIn("slow").css('display', 'inline-block');
    $('#tableKozlov').fadeIn("slow").css('display', 'inline-block');
    $('#clientsList').css('display', 'none');
});
$('#listMedvedeva').click(function () {
    $('#clientMedvedeva').fadeIn("slow").css('display', 'inline-block');
    $('.clientVisitTable').fadeIn("slow").css('display', 'inline-block');
    $('.noVisited').fadeIn("slow").css('display', 'inline-block');
    $('#clientsList').css('display', 'none');
});
$('#toClientList').click(function () {
    $('#clientKozlov').css('display', 'none');
    $('.clientVisitTable').css('display', 'none');
    $('#tableKozlov').css('display', 'none');
    $('#clientsList').css('display', 'inline-block');
});
$('#toClientList2').click(function () {
    $('#clientMedvedeva').css('display', 'none');
    $('.noVisited').css('display', 'none');
    $('.clientVisitTable').css('display', 'none');
    $('#clientsList').css('display', 'inline-block');
});

/*$('#change-name span').click(function () {
 $('#change-name span').css('display', 'none');
 $('#change-name input').css('display', 'inline-block');
 });
 $(document).bind('click', function(e){
 if (! $(e.target).parents().is("#change-name")) $("#change-name input").hide(), $('#change-name span').show();
 });*/
$(document).ready(function () {
    $('.phoneNumber').mask('(000) 000 00 00');
    $('.dateOfFirth').mask('00.00.0000г.');
});

$(function () {
    $("#datepicker").datepicker({changeMonth: true, changeYear: true});
});


$('.placeholder').on("click", function () {
    $(this).slideUp('slow');
    $(this).parent().find(".service-toggle-field").slideDown('slow');
});
$('.btn-done').on("click", function () {
    $(this).parent().parent().slideUp('slow');
    $(this).parent().parent().parent().find(".placeholder").slideDown('slow');
});


//Transaction Page START
//----------------------
$('thead').on('click', function () {
    $(this).parent().find('tbody').toggle();
    $(this).toggleClass("thead-active");
});
$('.go-to-day1').on('click', function () {
    $(this).parent().hide();
    $('.transaction-year').hide();
    $('.transaction-day').show();
});
$('.back-to-day').on('click', function () {
    $('.transaction-day').hide();
    $('.transaction-year').show();
});
//----------------------
//Transaction Page End
//FAQ Page START
//----------------------
$('.question').on('click', function () {
    $(this).parent().find('.answer').toggle();
    $(this).toggleClass("question-active");
});
//----------------------
//FAQ Page END
//Treatment Modal START
//----------------------
$('.create-treatment').on('click', function () {
    $('#modal-background').show();
    $('#new-treatment').show();
});
$('#close, .send-treatment').click(function () {
    $('#modal-background').hide();
    $('#new-treatment').hide();
});
//----------------------
//Treatment Modal END
//Time Master Page START
//----------------------
$('#switch-off').attr('checked', true);
$('.free-master-output, .free-master-day').hide();
$('#switch-on').click(function () {
    $('#switch-off').attr('checked', false);
    $('.master-day, .master-output').hide();
    $('.free-master-output, .free-master-day').show();
});
$('#switch-off').click(function () {
    $('#switch-on').attr('checked', false);
    $('.master-day, .master-output').show();
    $('.free-master-output, .free-master-day').hide();
});
$(function () {
    $(".datepicker").datepicker({changeMonth: true, changeYear: true});
});
//----------------------
//Time Master Page END
//Requisite Page START
//----------------------
$('.add-requisite-field').on('click', function () {
    $(this).parent().find('input').clone(this).insertAfter($(this).parent()).css('margin-left', '150px').val('').after('<button class="remove-requsite"></button>');
    $('.remove-requsite').on('click', function () {
        $(this).prev().remove();
        $(this).remove();
    });
});
$('#current-account, #correspondent-account').mask('00000000000000000');
$('#BIK').mask('000000');
$('#INN').mask('0000000000');
$('#KPP').mask('000000000');
$('#ORGN').mask('0000000000000');
$('#index, #actual-index, #shipping-index').mask('000000');
$('.requisite-tel').mask('(000) 000 00 00');
$('#passport').mask('0000 000000');
$('#subdivision-code').mask('000-000');
$('#IP-INN').mask('000000000000');
$('.for-IP').hide();
$('.to-IP').on('click', function () {
    $('.for-IP').show().find('span').text('ИП');
    $('.for-OOO').hide();
});
$('.to-OOO').on('click', function () {
    $('.for-OOO').show().find('span').text($(this).text());
    $('.for-IP').hide();
});
$('.change-requisites').on('click', function(){
    $('#modal-background').show();
    $('.modal-change-requisites').show();
});
$('#close, .send-change-requisites').click(function () {
    $('#modal-background').hide();
    $('.modal-change-requisites').hide();
});
//for test
$('.requisites-done').hide();
$('.table-switch-test').on('click', function(){
    $('.requisites-form').toggle();
    $('.requisites-done').toggle();
});
//----------------------
//Requisite Page END
//Documents Page START
//----------------------
$(function () {
    $("#period-from, #period-to").datepicker({changeMonth: true, changeYear: true});
});
$('.clear-time-period').on('click', function(){
    $("#period-from, #period-to").val('');
    $('.dropdown span').text('Выберите период');
});
//----------------------
//Documents Page END
// /Выпадающий список
//------------------
var dropdowns = $(".dropdown");
// Появление выпадающего списка при клике
dropdowns.find("dt").click(function () {
    dropdowns.find("dd>ul, .search-select, .search-service").hide();
    $(this).next().children().toggle();
});
// Клик по обработчику выпадающего списка
dropdowns.find("dd a").click(function () {
    var leSpan = $(this).parents(".dropdown").find("dt a span");
// Удаление класса select
    $(this).parents(".dropdown").find('dd a').each(function () {
        $(this).removeClass('selected');
    });
// Обновление значения select
    leSpan.html($(this).html());
// Если нужно вренуться к дефолтному классу, то убирается select
    if ($(this).hasClass('default')) {
        leSpan.removeClass('selected')
    }
    else {
        leSpan.addClass('selected');
        $(this).addClass('selected');
    }
// Закрыть выпадающий список
    $(this).parents("ul").hide();
    $(".search-select").hide();
    $(".search-service").hide();
});
$("dt a span").on('click', function () {
    $(this).toggleClass('default');
    if ($("dt a span").hasClass('default')) {
        $(".dropdown dd, dd>ul, .search-select, .search-service").show();
    } else {
        $(".dropdown dd, dd>ul, .search-select, .search-service").hide();
    }
});
// Закрытие списка при клике на любой другой элемент
$(document).bind('click', function (e) {
    if (!$(e.target).parents().hasClass("dropdown")) $(".dropdown dd ul, .search-select , .search-service").hide();
});
$('#stepTimeAt').timepicker({'step': 15});
$('#stepTimeTo').timepicker({'step': 15});
$('#day-start-at').timepicker({'step': 15});
$('#day-end-at').timepicker({'step': 15});
$('.master-day-start-at').timepicker({'step': 15});
$('.master-day-end-at').timepicker({'step': 15});
$('.break, .output').timepicker({'step': 15});

$("#service-hair").click(function () {
    $("#madal-chooseAservice").removeClass().addClass('modal-val-hair dropdown');
});
$("#service-face").click(function () {
    $("#madal-chooseAservice").removeClass().addClass('modal-val-face dropdown')
});
$("#service-body").click(function () {
    $("#madal-chooseAservice").removeClass().addClass('modal-val-body dropdown');
});
$("#service-nails").click(function () {
    $("#madal-chooseAservice").removeClass().addClass('modal-val-nails dropdown');
});
$("#service-sun").click(function () {
    $("#madal-chooseAservice").removeClass().addClass('modal-val-sun dropdown');
});
$("#service-wax").click(function () {
    $("#madal-chooseAservice").removeClass().addClass('modal-val-wax dropdown');
});
$("#service-massage").click(function () {
    $("#madal-chooseAservice").removeClass().addClass('modal-val-massage dropdown');
});
$("#service-spa").click(function () {
    $("#madal-chooseAservice").removeClass().addClass('modal-val-spa dropdown');
});
$("#service-etc").click(function () {
    $("#madal-chooseAservice").removeClass().addClass('modal-val-etc dropdown');
});

$('.modalClientLink').click(function () {
    $(this).addClass('modalLinkActive').removeClass("modalLinkNone");
    $('.modalClientInfo').css('display', 'inline-block');
    $('.modalServiceLink').removeClass("modalLinkActive").addClass("modalLinkNone");
    $('.modalServiceInfo').css('display', 'none');
});
$('.modalServiceLink').click(function () {
    $(this).addClass('modalLinkActive').removeClass("modalLinkNone");
    $('.modalServiceInfo').css('display', 'inline-block');
    $('.modalClientLink').removeClass("modalLinkActive").addClass("modalLinkNone");
    $('.modalClientInfo').css('display', 'none');
});
///* Client Page END*/
//$(window).resize();
///* Мобильная версия */
//$(document).ready(function () {
//    /* Переключение checkbox'ов */
//    $('#toggle').click(function () {
//        $('#toggleSearch').attr('checked', false);
//    });
//    $('#toggleSearch').click(function () {
//        $('#toggle').attr('checked', false);
//    });
//    $('#toggle').attr('checked', false);
//    $('#toggleSearch').attr('checked', false);
//    /* Закрытие и откртытие (переключение между поиском и меню) */
//    $(".cabinet").clone().prependTo(".mobileHeader");
//    $(".icon-Settings").clone().appendTo(".mobileHeader");
//});


/*$("#search-service ul>li").on('click', function(){
 $("#search-service ul>li").css({color: "#000", "border-left": "7px solid #fff"}).children("ol").css({display: "none"});
 $(this).css({color: "#3eaf71", "border-left": "7px solid #3eaf71"}).children("ol").css({display: "block"});
 });*/

$("input.time").on('click', function () {
    if ($(this).hasClass('active')) {
        $(".ui-timepicker-wrapper").hide();
        $("input.time").removeClass('active');
    } else {
        $(this).addClass('active');
    }
});
$("#datepicker, .datepicker, #period-from, #period-to").on('click', function () {
    $(this).toggleClass('active');
    if ($("#datepicker, .datepicker, #period-from, #period-to").hasClass('active')) {
        $("#ui-datepicker-div").show();
    } else {
        $("#ui-datepicker-div").hide();
    }
});

jQuery(function ($) {
    function tog(v) {
        return v ? 'addClass' : 'removeClass';
    }

    $(document).on('input', '.clearable', function () {
        $(this)[tog(this.value)]('x');
    }).on('mousemove', '.x', function (e) {
        $(this)[tog(this.offsetWidth - 30 < e.clientX - this.getBoundingClientRect().left)]('onX');
    }).on('click', '.onX', function () {
        $(this).removeClass('x onX').val('').change();
    });
});

$(".master").click(function () {
    $(this).closest('.service-notoggle-field').append('<span class="drag">' + $(this).text() + ' <a class="del-master"></a></span>');
    $(".del-master").on('click', function () {
        $(this).parent().remove();
    });
    $(".drag").draggable({helper: 'clone', cursor: 'move'});
    $(".drop").droppable({
        accept: ".drag",
        drop: function (ev, ui) {
            $(this).insertAtCaret(ui.draggable.text());
        }
    });
});
$('.master-to-group dd ul li a').click(function () {
    var emptyFiled = $('.empty-field');
    $('.empty-field:contains("Пока нет выбранных участников")').each(function () {
        $(this).html($(this).html().split("Пока нет выбранных участников").join(""));
    });
    emptyFiled.css('padding-left', '0').append('<span class="drag">' + $(this).text() + '<a class="del-master"></a></span>');
    $(".del-master").on('click', function () {
        $(this).parent().remove();
        if ($('.empty-field span').length <= 0) {
            emptyFiled.css('padding-left', '20px').append(document.createTextNode("Пока нет выбранных участников"));
        }
    });

});

//-------------------------------------------
$(".drag").draggable({helper: 'clone', cursor: 'move'});
$(".drop").droppable({
    accept: ".drag",
    drop: function (ev, ui) {
        $(this).insertAtCaret(ui.draggable.text());
    }
});

$(".del-price-info").on('click', function () {
    $(this).parent().remove();
});
$('.static-time').mask('000');
$('.static-price').mask('00000');
var inputPrice = $('.input-price');
var inputTime = $('.input-time');
var inputMaster = $('.input-master');
inputPrice.mask('00000');
inputTime.mask('000');
$('.btn-add-price').on('click', function () {
    if (!inputPrice.val() || !inputTime.val() || !inputMaster.val()) {
        $(this).noop('click');
    } else {
        $(this).closest('.service-notoggle-field').append('<p class="price-info"><span class="span-price">' + inputPrice.val() + '</span> Р <span class="span-time">' + inputTime.val() + '</span> мин. <span class="span-master">' + inputMaster.val() + '</span><a class="del-price-info"></a></p>');
    }
    $('.input-price, .input-time, .input-master')
        .not(':button, :submit, :reset, :hidden')
        .val('')
        .removeAttr('checked')
        .removeAttr('selected');
    $(".del-price-info").on('click', function () {
        $(this).parent().remove();
    });
    $('.price-info').dblclick(function () {
        var spanPrice = $(this).find('.span-price').text();
        var spanTime = $(this).find('.span-time').text();
        var spanMaster = $(this).find('.span-master').text();
        $(this).remove().scroll('.add-service-price');
        $('.add-service-price').show();
        inputPrice.val(spanPrice);
        inputTime.val(spanTime);
        inputMaster.val(spanMaster);
    });
});

/*var staticPrice = $('.static-price');
 var staticTime = $('.static-time');
 staticPrice.mask('00000');
 staticTime.mask('000');
 $('.btn-static-price').on('click', function () {
 if (!staticPrice.val() || !staticTime.val()) {
 $(this).noop('click');
 } else {
 $(this).closest('.service-notoggle-field').append('<p class="price-info"><span class="span-price">' + staticPrice.val() + '</span> Р <span class="span-time">' + staticTime.val() + '</span> мин. <a class="del-price-info"></a></p>');
 }
 $('input')
 .not(':button, :submit, :reset, :hidden')
 .val('')
 .removeAttr('checked')
 .removeAttr('selected');
 $(".del-price-info").on('click', function () {
 $(this).parent().remove();
 });
 });*/
$.fn.insertAtCaret = function (myValue) {
    return this.each(function () {
//IE support
        var sel;
        if (document.selection) {
            this.focus();
            sel = document.selection.createRange();
            sel.text = myValue;
            this.focus();
        }
//MOZILLA / NETSCAPE support
        else if (this.selectionStart || this.selectionStart == '0') {
            var startPos = this.selectionStart;
            var endPos = this.selectionEnd;
            var scrollTop = this.scrollTop;
            this.value = this.value.substring(0, startPos) + myValue + this.value.substring(endPos, this.value.length);
            this.focus();
            this.selectionStart = startPos + myValue.length;
            this.selectionEnd = startPos + myValue.length;
            this.scrollTop = scrollTop;
        } else {
            this.value += myValue;
            this.focus();
        }
    });
};
$('.btn-price').on('click', function () {
    $('.add-service-price').slideToggle("slow");
    $(this).toggleClass("btn-price-close")
});

var block3ver2 = $('.block3ver2');
var mastersList = $('.mastersList');
$(".remove-break").on('click', function () {
    $(this).parent().remove();
    block3ver2.animate({height: '-=36'});
    mastersList.animate({height: '-=36'});
});
$(".remove-output").on('click', function () {
    $(this).parent().remove();
    block3ver2.animate({height: '-=36'});
    mastersList.animate({height: '-=36'});
});
$(".add-break").on('click', function () {
    $('.master-select-break:first').show().clone(this).insertAfter($(this).parent());
    $('body .master-select-break:first').hide();
    if (block3ver2.height() > $('.salon-worktime').height()) {
        block3ver2.animate({height: '+=36'});
        mastersList.animate({height: '+=36'});
    }
});
$(".add-output").on('click', function () {
    $('.output-select:first').show().clone(this).insertBefore(this);
    $('body .output-select:first').hide();
    block3ver2.animate({height: '+=36'});
    mastersList.animate({height: '+=36'});
});
$(function () {
    $("#search-client").smartAutoComplete({source: "names.json", forceSelect: true, maxResults: 5, delay: 200});
});
/*$('.del-event').hide();
 $(".dhx_cal_event_line ").on('click', function () {
 $('.del-event').show();
 });

 $("#close").on('click', function () {
 $('.del-event').hide();
 });*/
mastersList.mCustomScrollbar({
    theme: "minimal-dark",
    scrollInertia: 100
});
$("#select-master ul").mCustomScrollbar({
    theme: "minimal-dark",
    scrollInertia: 100
});
$(".middle").mCustomScrollbar({
    theme: "minimal-dark",
    scrollInertia: 100
});
$(window).ready(function () {
    $(".mastersSettings").height($(window).height() - 62);
    $(".mastersList").height($(window).height() - 62);

});
$(window).resize(function () {
    $(".mastersSettings").height($(window).height() - 62);
    $(".mastersList").height($(window).height() - 62);
});


var $cell = $('.image__cell');

$cell.find('.image--basic').click(function () {
    var $thisCell = $(this).closest('.image__cell');

    if ($thisCell.hasClass('is-collapsed')) {
        $cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed');
        $thisCell.removeClass('is-collapsed').addClass('is-expanded');
    } else {
        $thisCell.removeClass('is-expanded').addClass('is-collapsed');
    }
});

$cell.find('.expand__close').click(function () {
    var $thisCell = $(this).closest('.image__cell');
    $thisCell.removeClass('is-expanded').addClass('is-collapsed');
});

var options = {
    valueNames: ['master', 'sub-services']
};

var userList = new List('select-master', options);
var userListServ = new List('search-service', options);