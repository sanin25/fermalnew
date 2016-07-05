/**
 * Created by sanin on 05.07.2016.
 */
jQuery(document).ready(function($){
    var controller = new ScrollMagic.Controller();
    
    var preloader = document.getElementById("txt").parentNode;
    
    preloader.id = "preloader";
    var hidden =  document.getElementsByClassName("hidden");
    


    hidden.id = '';


        // number of loaded images for preloader progress
        var loadedCount = 0; //current number of images loaded
        var imagesToLoad = $('.bcg').length; //number of slides with .bcg container
        var loadingProgress = 0; //timeline progress - starts at 0

        $('.bcg').imagesLoaded({


                background: true
            }
        ).progress(function (instance, image) {
            loadProgress();
        });

        function loadProgress(imgLoad, image) {

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
                .to($('.cont1 .bcg'), 3, {scale: 1,yoyo:true,repeat:-1,repeatDelay: 1,ease: Power0.easeNone });


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
            triggerElement: '.cont8',
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

});
