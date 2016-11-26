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



        /*Питомник*/

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

        /*Конец питомник*/
        /*Текст к картинкам контакты*/


        $("#tab-container").tabs(
            {
                hide: {effect: "explode", duration: 700},
                show: {effect: "slide", duration: 500}


            }
        );
    /*Подсветка название в сайдере*/
    var liveInFarmText = $('#liveinfarm img');
    liveInFarmText.on("mouseover",function(event ){

        $( this ).parent().siblings()
            .css( {"background-color":"#725337","opacity":1});

    });
    liveInFarmText.on("mouseout",function(event ){
        $( this ).parent().siblings()
            .css({"background": '',"opacity": ''});
    })

});
