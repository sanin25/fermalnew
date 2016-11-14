jQuery(document).ready(function($) {

    $('img').addClass('responsive-img');

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

    $('.bxslider').owlCarousel({
        items:4,
        loop: true,
		autoplay:true,
        smartSpeed:2550,
        navSpeed:1,
        autoplayTimeout:80,
        margin: 200
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


$('ul.sub-menu li').after("<br>");

    $('ul#menu-pitomnik > li > a').append("<p class='hr'></p>");

    $(".spans").on('click',function(){
        $(".footer").toggle();

    });

    /*Притомник*/
    $('.popup-pitomnik').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});
