jQuery(document).ready(function($) {

    var  ie = BrowserDetect.browser == 'Explorer';
    var controller = new ScrollMagic.Controller();


    jQuery.fn.exist = function() {
        return $(this).length;

    }
    function setHeiHeight() {
        $('.heigh').css({
            height: $(window).height() + 'px'
        });
    }

    function setHeiHeight2() {
        $('.heigh2').css({
            height: $(window).height() + 'px'
        });
    }

    function setAuto() {
        $('.heigh').css({
            height: 'auto'
        });
    }

    setHeiHeight(); // устанавливаем высоту окна при первой загрузке страницы
    setHeiHeight2();

    setTimeout(setAuto, 1000);
    $(window).resize(setHeiHeight2);

    /*Конец высоты*/


    // number of loaded images for preloader progress
    var loadedCount = 0; //current number of images loaded
    var imagesToLoad = $('.bcg').length; //number of slides with .bcg container
    var loadingProgress = 0; //timeline progress - starts at 0

    if($('.bcg').exist()) {

        $('.bcg').imagesLoaded({
                background: true
            }
        ).progress(function (instance, image) {
            loadProgress();
        });

        function loadProgress(imgLoad, image) {
            //one more image has been loaded
            loadedCount++;

            loadingProgress = (loadedCount / imagesToLoad);

            // GSAP timeline for our progress bar
            TweenLite.to(progressTl, 0.7, {progress: loadingProgress, ease: Linear.easeNone});

        }

        //progress animation instance. the instance's time is irrelevant, can be anything but 0 to void  immediate render
        var progressTl = new TimelineMax({paused: true, onUpdate: progressUpdate, onComplete: loadComplete});

        progressTl
        //tween the progress bar width
            .to($('.progress span'), 1, {width: 100, ease: Linear.easeNone});

        //as the progress bar witdh updates and grows we put the precentage loaded in the screen
        function progressUpdate() {
            //the percentage loaded based on the tween's progress
            loadingProgress = Math.round(progressTl.progress() * 100);
            //we put the percentage in the screen
            $(".txt-perc").text(loadingProgress + '%');


        }

        function loadComplete() {
            // preloader out
            var preloaderOutTl = new TimelineMax();


            preloaderOutTl
                .to($('.progress'), 0.3, {y: 100, autoAlpha: 0, ease: Back.easeIn})
                .to($('.txt-perc'), 0.3, {y: 100, autoAlpha: 0, ease: Back.easeIn}, 0.1)
                .to($('#preloader'), 1.1, {autoAlpha: 0, ease: Power4.easeInOut})
                .to($('.cont1 .bcg'), 1.1, {scale: '1'}, "-=1.1")
                .set($('#preloader'), {className: '+=is-hidden'});

            return preloaderOutTl;
        }



        /*Затемняем в конце */

        var cants = [".cont1", ".cont3", ".cont4", ".cont5", ".cont6", ".cont7"];

        cants.forEach(function (cant, index) {


            var num = index + 1;
            // make scene
            var contScene = new ScrollMagic.Scene({
                triggerElement: cant,
                triggerHook: 0,
                offset: 350
            })
                .setTween(new TimelineMax().to($(cant), 0.32, {autoAlpha: 0.5, ease: Power0.easeNone}))
                .addTo(controller);
        });
        /*Первый сайд лого*/

        var logo = new TimelineMax();

        logo.to($('#logo'), 1, {y: '+=460'}, {ease: Power1.easeOut}, '+=0.4')
            .to($('.cont1 h1'), 1, {autoAlpha: "-1"}, {ease: Power1.easeOut}, '+=0.8');
        var logoScroll = new ScrollMagic.Scene({
            triggerElement: '.cont1',
            triggerHook: 0,
            duration: "300%"
        })
            .setTween(logo)
            .addTo(controller);

        /*Конец лого*/
        /*Салайд 2 */

        var about = new TimelineMax();

        var lineAbout = about
            .to($('#tab-container h3'), 0.2, {left: "0%", ease: Back.easeOut.config(4), y: 0})
            .to($('#tab-container .line'), 1, {width: "100%"})
            .to($('#tab-container .textunber '), 2, {
                autoAlpha: 1,
                ease: Elastic.easeOut.config(1, 0.3),
                y: 0
            }, "-=0.2");

        var logoScroll = new ScrollMagic.Scene({
            triggerElement: '.cont2',
            triggerHook: 0,
            reverse: false,
            offset: "-200px"
        })
            .setTween(lineAbout)
            .addTo(controller);


        /*Салайд 4 kyri*/
        var idKyri = $('.kyriimg, .kyritext');

        var Kyri = new TimelineMax();
        var lineKyri = Kyri
            .staggerTo(idKyri, 1, {autoAlpha: 1, rotationY: "+=360deg"}, 0.1, "-=1");

        var kyriScroll = new ScrollMagic.Scene({
            triggerElement: '.cont4',
            triggerHook: 0,
            reverse: false,
            offset: -250
        })
            .setTween(lineKyri)
            .addTo(controller);

        /*Салайд 5 about*/

        var gusy = new TimelineMax();
        var lineGusy = gusy
            .staggerTo($('.gusi'), 1, {y: 0, x: 0, autoAlpha: 1, ease: Bounce.easeOut}, 0.5);

        var gusyiScroll = new ScrollMagic.Scene({
            triggerElement: '.cont5',
            triggerHook: 0,
            reverse: false,
            offset: -350
        })
            .setTween(lineGusy)
            .addTo(controller);



        var paraGusy = new TimelineMax();
        var paraG = paraGusy
            .set($('.backimg'), {y: '-150'})
            .set($('.backimg2'), {y: '+300'})
            .to($('.backimg'), 2, {y: '+=260'})
            .to($('.backimg2'), 2, {y: '-=660'}, "-=2");

        var gusyiScrollPara = new ScrollMagic.Scene({
            triggerElement: '.cont5',
            triggerHook: 0,
            duration: "200%",
            reverse: false,
            offset: -550
        })
            .setTween(paraG)
            .addTo(controller);

        /*Слайд 6*/

        var pavlin = new TimelineMax();
        var linePavlin = pavlin
            .staggerTo($('.pavlin'), 1, {autoAlpha: 1, rotationY: "+=360deg"}, 0.1, "-=1");


        var pavlinScroll = new ScrollMagic.Scene({
            triggerElement: '.cont6',
            triggerHook: 0,
            reverse: false,
            offset: -250
        })
            .setTween(linePavlin)
            .addTo(controller);

        /*Слайд 7*/

        var fazan = new TimelineMax();
        var lineFazan = fazan
            .staggerTo($('.fazan'), 1, {autoAlpha: 1, rotationY: "+=360deg"}, 0.1, "-=1");


        var fazaninScroll = new ScrollMagic.Scene({
            triggerElement: '.cont7',
            triggerHook: 0,
            reverse: false,
            offset: -250
        })
            .setTween(lineFazan)
            .addTo(controller);


        /*Питомник*/
/*
        var pit = new TimelineMax();
        var pitommikLine = pit
            .to($('#cont8 .bgc'), 1, {backgroundPositionY:  90});*/


        var pitScroll = new ScrollMagic.Scene({
            triggerElement: '#cont8',
            triggerHook: 0.5,
            offset: 0,
            duration: "400%"
        })
            //.setTween(pitommikLine)
           // .addIndicators()
            .setClassToggle('.fade', 'fade-in')
            .addTo(controller);

        /*Конец питомник*/
        /*Текст к картинкам контакты*/


        $("#tab-container").tabs(
            {
                hide: {effect: "explode", duration: 700},
                show: {effect: "slide", duration: 500}


            }
        );


    }else{
        $('#preloader').css({"display": 'none'});
    }
    /* Форма отправки письма*/
    $('#emailform').click(function() {
        $('.semdmail').animate({
                marginRight: '0px'},
            400);
    });


    $('#close').click(function() {
        $('.semdmail').animate({
                marginRight: '-500px'},
            700);
    });
    /*Контакты */

    $('.popup-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true,
        // Delay in milliseconds before popup is removed
        removalDelay: 300,

        // Class that is added to popup wrapper and background
        // make it unique to apply your CSS animations just to this exact popup
        mainClass: 'mfp-fade'
    });
    $('#close2').click( function (e){
        e.preventDefault();
        $.magnificPopup.close();
    });



    /*Слайдер*/

    $('.bxslider').bxSlider({
        minSlides: 4,
        maxSlides: 4,
        slideWidth: 600,
        slideMargin: 5,
        ticker: true,
        speed: 49000

    });

    var pitomnik = new TimelineMax();
    $('pitomnikbg1').hover();
    var lineKyri = Kyri
        .staggerTo($('.kyri'), 1, {autoAlpha: 1, rotationY: "+=360deg"}, 0.1, "-=1");


    /*    /!*Слайден Питомника*!/
        $('.pitomnik').bxSlider({
            mode:"fade",
            minSlides: 1,
            controls: true,
            wrapperClass: 'pitomnikcarusel',
            auto: true,
            nextText: 'Вперед',
            prevText:'Назад',
            pager:false,
            pause:5000

        });*/

    /*Отправка письма*/

    $("#form").submit(function() {
        $.ajax({
            type: "POST",
            url: "/demo/wp-admin/admin-ajax.php",
            data: $(this).serialize()
        }).done(function(vot) {

            alert(vot);
            $("#form")[0].reset();
            $('.semdmail').animate({
                    marginRight: '-500px'},
                700);
        });
        return false;
    });

    $('img').addClass('responsive-img');


    var slider = $('#slider'); // селектор слайдера
    var pagerItem = $('#slider-pager div'); // селектор пункта пагинатора
    var active = 'activeint'; // класс активного пункта пагинатора

    if ( slider.length ) {
        var prev = false;
        function pager() {
            pagerItem.filter('.' + active).each(function() {
                var el = $(this);
                if (prev) {
                    if ( el.is(':first-child') ) {
                        el.removeClass(active);
                        pagerItem.filter(':last').addClass(active);
                    } else el.removeClass(active).prev().addClass(active);
                } else {
                    if ( el.is(':last-child') ) {
                        el.removeClass(active);
                        pagerItem.filter(':first').addClass(active);
                    } else el.removeClass(active).next().addClass(active);
                }
            })
        }
        slider.bxSlider({
            // опции плагина
            controls: false,
            minSlides: 1,
            slideWidth: 578,
            pager: false,
            auto: true,
            wrapperClass: '',
            useCSS: false,
            pause: 5000,
            onSlidePrev: function() { prev = true; pager(); },
            onSlideNext: function() { prev = false; pager(); }
            // конец опций
        });
        pagerItem.hover(function() {
            slider.stopAuto();
            var index = pagerItem.index($(this));
            slider.finish().goToSlide(index);
            pagerItem.removeClass(active);
            $(this).addClass(active);
        }).mouseleave(function() {
            slider.startAuto();
        });
        pagerItem.filter(':first').addClass(active);
    }

    /*Поиск*/
    $('#imgsearch').click(function(){
        $(this).hide(500);
        $('.search').css({
            "transform": "translate(0%, 10px)",
            "transition": "transform 500ms"
        },500);
    });
    $("#closesearch").click(function(){
        $('#imgsearch').show(500);
        $('.search').css({
            "transform": "translate(-100%,0px)",
            "transition": "transform 100ms"
        },500);
    });


});