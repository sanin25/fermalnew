jQuery(document).ready(function($) {

    $('img').addClass('responsive-img');

    var  ie = BrowserDetect.browser == 'Explorer';
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
