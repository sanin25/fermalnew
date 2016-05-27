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

    var controller = new ScrollMagic.Controller();

/*---Удалить !---*/
    /*    var ti = new TimelineMax();

    ti
        .to($('#slide02 h1'), 0.2, {autoAlpha: 0, ease:Power1.easeNone}, 1.5)
        .to($('#slide02 section'), 0.2, {autoAlpha: 0, ease:Power1.easeNone}, 1.5)
        .set($('#slide02 h1'), {text: "The Memories"})
        .set($('#slide02 p'), {text: "You never climb the same mountain twice, not even in memory. Memory rebuilds the mountain, changes the weather, retells the jokes, remakes all the moves."})
        .to($('.cont4'), 0.6, {scale: 1.2, transformOrigin: '0% 0%', ease:Power0.easeNone})
        .fromTo($('#slide02 h1'), 0.7, {y: '+=20'}, {y: 0, autoAlpha: 1, ease:Power1.easeOut}, '+=0.4')
        .fromTo($('#slide02 section'), 0.6, {y: '+=20'}, {y: 0, autoAlpha: 1, ease:Power1.easeOut}, '-=0.6')
        .set($('#slide02 h1'), {autoAlpha: 1}, '+=2.5');

    var pinScene02 = new ScrollMagic.Scene({
        triggerElement: '#slide02',
        triggerHook: 0,
        duration: "300%"
    })
        .setPin("#slide02")
        .setTween(ti)
        .addTo(controller);*/

/*----Выше удалить !!!----*/

    /*Затемняем в конце */

    var cants = [".cont1", ".cont3", ".cont4", ".cont5", ".cont6", ".cont7", ".cont8"];

    cants.forEach(function (cant, index) {


        var num = index+1;
    console.log(cant);
        // make scene
        var contScene = new ScrollMagic.Scene({
            triggerElement: cant ,
            triggerHook: 0,
            offset:350
        })
            .setTween(new TimelineMax().to($(cant ), 0.32, {autoAlpha:0.5, ease:Power0.easeNone}))
            .addTo(controller);
    });
    /*Первый сайд лого*/

    var tl = new TimelineMax();
    tl.to($('.cont1'),5, {scale: '1'});

    var logo = new TimelineMax();

    logo.to($('#logo'), 1, {y: '+=460'}, {ease:Power1.easeOut}, '+=0.4')
    .to($('.cont1 h1'), 1, {autoAlpha: "-1"}, { ease:Power1.easeOut}, '+=0.8');
    var logoScroll = new ScrollMagic.Scene({
        triggerElement: '.cont1',
        triggerHook: 0,
        duration: "300%"
    })
        .setTween(logo)
        .addTo(controller);

    /*Конец лого*/
    /*Салайд 2 about*/

    var about = new TimelineMax();

    var lineAbout = about.to($('#tab-container h3'), 0.8, {left:"0%",ease: Back.easeOut.config(4), y: 0 })
    .to($('#tab-container .line'), 1, {width:"100%"})
    .staggerTo($('#tab-container .fotoin ul li'), 1, {y: 0,autoAlpha: 1,rotationX:"+=360deg", ease:Power1.easeInOut},0.2)
        .to($('#tab-container .textunber '), 3, {autoAlpha:1,rotationY:"+=360deg",  ease: Elastic.easeOut.config(1, 0.3), y: 0 },"-=0.2");

    var logoScroll = new ScrollMagic.Scene({
        triggerElement: '.cont2',
        triggerHook: 0
    })
        .setTween(lineAbout)
        .addTo(controller);

    logoScroll.on("enter", function (event) {
        logoScroll.remove();
    });
    /*Салайд 4 about*/

    var Kyri = new TimelineMax();
    var lineKyri = Kyri.to($('.kyribody h3'), 1, {autoAlpha:1, ease: Back.easeOut.config(4)})
        .staggerTo($('.kyri'), 2, {y: 0,x: 0,autoAlpha:1,ease: Bounce.easeOut}, 0.5,"-=1");


       /* .to($('.kyribody'), 3, {autoAlpha:1,rotationY:"+=360deg",  ease: Elastic.easeOut.config(1, 0.3), y: 0 },"-=0.2");*/
    var kyriScroll = new ScrollMagic.Scene({
        triggerElement: '.cont4',
        triggerHook: 0,
        offset: -250
    })
        .setTween(lineKyri)
        .addTo(controller);

    kyriScroll.on("enter", function (event) {
        kyriScroll.remove();
    });
    /*Салайд 5 about*/

    var gusy= new TimelineMax();
    var lineGusy = gusy.to($('.gusi h3'), 1, {autoAlpha:1, y: 25, ease: Back.easeOut.config(4)})
        .staggerTo($('.gusi'), 2, {y: 0,x: 0,autoAlpha:1,autoAlpha:1,ease: Bounce.easeOut}, 0.5,"-=1");

    var gusyiScroll = new ScrollMagic.Scene({
        triggerElement: '.cont5',
        triggerHook: 0,
        offset: -250
    })
        .setTween(lineGusy)
        .addTo(controller);

    gusyiScroll .on("enter", function (event) {
        kyriScroll.remove();
    });
    gusyiScroll.on("enter", function (event) {
        gusyiScroll.remove();
    });


    var paraGusy = new TimelineMax();
    var paraG = paraGusy
        .set($('.backimg'),{y: '-150'})
        .set($('.backimg2'),{y: '+300'})
        .to($('.backimg'), 2,{y: '+=260'})
        .to($('.backimg2'), 2,{y: '-=660'}, "-=2");

    var gusyiScrollPara = new ScrollMagic.Scene({
        triggerElement: '.cont5',
        triggerHook: 0,
        duration: "200%",
        offset: -550
    })
        .setTween(paraG)
        .addTo(controller);


/*Текст к картинкам контакты*/


    $("#tab-container").tabs(
        {
            hide: { effect: "explode", duration: 700 },
            show: { effect: "slide", duration: 500 }


        }
    );

  /*Паралакс*/
/*  $(window).scroll(function() {
  var par = $(this).scrollTop();
  /!*Лого*!/
  $("#logo").css({
  	"transform" :"translate3d(0px , " + par /3 + "%, .0px)",
  	"-webkit-transform" : "translate3d(0px , " + par /3 + "%, .0px)",
  	"-moz-transform" : "translate3d(0px , " + par /3 + "%, .0px)"

  });
  /!*Облока*!/
  if($('.cont4').exist()){
  var cont4 = $('.cont4').offset().top - par;
  if( cont4 < 450){

  	$('.kyri').css('visibility', 'visible');/!*.addClass('animated bounceInRight');*!/

      var tl = new TimelineMax();


      tl.to(".line",1, {autoAlpha:1, width: "955px", ease: Linear.easeNone})

          .to(".img1",2, {autoAlpha:1,scale:"1.5",ease: Elastic.easeOut.config(2, 0.5), y: 0 },"0.1")
          .to(".line2", 0.5, {height:"580"},"-=1")
          .staggerTo($('.kyri'), 1,{ autoAlpha:1, ease:Back.easeIn}, 0.2,"-=2");


/!*  var i = $('.cont4').offset().top - par;
  $("#obl1").css({
  	 "transform" :"translate3d(" + i * 1 + "%, 0%, .0px)",
    "-webkit-transform" : "translate3d(" + i * 1 + "%, 0%, .0px)",
    "-moz-transform" : "translate3d(" + i * 1 + "%, 0%, .0px)"
  	});*!/
   $("#obl2").css({
  	"right" :"" + par /60 + "%",
  	});
  }
  }
/!* Конец облока*!/

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

    /!*Часть About *!/
  if ($(this).scrollTop() > 300) {
          $('.fotoin').css('visibility', 'visible').addClass('animated bounceInLeft');
          $('.textunber').css('visibility', 'visible').addClass('animated bounceInRight');
          $('.about h3').css('visibility', 'visible').addClass('animated bounceInUp');
      }
  });*/
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

