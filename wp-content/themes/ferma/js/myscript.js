jQuery(document).ready(function($) {
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
            height:'auto'
        });
    }

  setHeiHeight(); // устанавливаем высоту окна при первой загрузке страницы
    setHeiHeight2();

    setTimeout(setAuto, 1000);
  $(window).resize(setHeiHeight2)

/*Конец высоты*/
/*Текст к картинкам контакты*/


    $("#tab-container").tabs(
        {
            hide: { effect: "explode", duration: 700 },
            show: { effect: "slide", duration: 500 }


        }
    );

  /*Паралакс*/
  $(window).scroll(function() {
  var par = $(this).scrollTop();
  /*Лого*/
  $("#logo").css({
  	"transform" :"translate3d(0px , " + par /3 + "%, .0px)",
  	"-webkit-transform" : "translate3d(0px , " + par /3 + "%, .0px)",
  	"-moz-transform" : "translate3d(0px , " + par /3 + "%, .0px)"

  });
  /*Облока*/
  if($('.cont4').exist()){
  var cont4 = $('.cont4').offset().top - par;
  if( cont4 < 450){

  	$('.kyri').css('visibility', 'visible');/*.addClass('animated bounceInRight');*/

      var tl = new TimelineMax();


      tl.to(".line",1, {autoAlpha:1, width: "955px", ease: Linear.easeNone})

          .to(".img1",2, {autoAlpha:1,scale:"1.5",ease: Elastic.easeOut.config(2, 0.5), y: 0 },"0.1")
          .to(".line2", 0.5, {height:"580"},"-=1")
          .staggerTo($('.kyri'), 1,{ autoAlpha:1, ease:Back.easeIn}, 0.2,"-=2");


/*  var i = $('.cont4').offset().top - par;
  $("#obl1").css({
  	 "transform" :"translate3d(" + i * 1 + "%, 0%, .0px)",
    "-webkit-transform" : "translate3d(" + i * 1 + "%, 0%, .0px)",
    "-moz-transform" : "translate3d(" + i * 1 + "%, 0%, .0px)"
  	});*/
   $("#obl2").css({
  	"right" :"" + par /60 + "%",
  	});
  }
  }
/* Конец облока*/

  if($('.cont5').exist()){
  var cont5 = $('.cont5').offset().top - par;
    if( cont5 < 450){

        $(".backimg").css({
            "transform" :"translate3d(0%, " + cont5 * 1 + "%, 0px)",
            "-webkit-transform" : "translate3d(0%, " + cont5 / 15 + "%, 0px)",
            "-moz-transform" :  "translate3d(0%, " + cont5 / 15 + "%, 0px)"
        });
        $(".backimg2").css({
            "transform" : "translate3d(0%, " + cont5 / 13 + "%, 0px)",
            "-webkit-transform" : "translate3d(0%, " + cont5 / 13 + "%, 0px)",
            "-moz-transform" : "translate3d(0%, " + cont5 / 13 + "%, 0px)"
        });

        $('.gusi').css('visibility', 'visible').addClass('animated fadeInUpBig');
    }
  }
      if($('.cont6').exist()){
          var cont6 = $('.cont6').offset().top - par;
          if( cont6 < 450){

              $('.pavlin').css('visibility' , 'visible', "position" ,"foxed").addClass('animated fadeInUpBig');

              var tl = new TimelineMax();


              tl.to(".cont7",1,  {y: " " + cont6 / 2 + " "});
          }
      }

      if($('.cont7').exist()){
          var cont7 = $('.cont7').offset().top - par;
          if( cont7 < 450){

              $('.fazan').css('visibility', 'visible').addClass('animated zoomInRight');

          }
      }

    /*Часть About */
  if ($(this).scrollTop() > 300) {
          $('.fotoin').css('visibility', 'visible').addClass('animated bounceInLeft');
          $('.textunber').css('visibility', 'visible').addClass('animated bounceInRight');
          $('.about h3').css('visibility', 'visible').addClass('animated bounceInUp');
      }
  });
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

    /*Слайден Питомника*/
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
