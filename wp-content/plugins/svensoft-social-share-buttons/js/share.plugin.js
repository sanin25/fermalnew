( function($){
    var methods = {
        init : function( settings ){
            // facebook
            $(this).find('.facebook-social').bind('click.share', {'settings':settings}, methods.facebook);
            // twitter
            $(this).find('.twitter-social').bind('click.share', {'settings':settings}, methods.twitter);
            // vkontakte
            $(this).find('.vkontakte-social').bind('click.share', {'settings':settings}, methods.vkontakte);
            // odnoklassniki
            $(this).find('.odnoklassniki-social').bind('click.share', {'settings':settings}, methods.odnoklassniki);
            // mailru
            $(this).find('.mailru-social').bind('click.share', {'settings':settings}, methods.mailru);
            // googleplus
            $(this).find('.googleplus-social').bind('click.share', {'settings':settings}, methods.googleplus);
            // livejournal
            $(this).find('.livejournal-social').bind('click.share', {'settings':settings}, methods.livejournal);

        },

        facebook : function( event ){
            var settings = event.data.settings;

            var url  = 'http://www.facebook.com/sharer.php?s=100';
            url += '&p[title]='     + encodeURIComponent(settings.title);
            url += '&p[summary]='   + encodeURIComponent(settings.excerpt.substr(0, 200));
            url += '&p[url]='       + encodeURIComponent(settings.url);
            url += '&p[images][0]=' + encodeURIComponent(settings.image_share);

            methods.popup(url);

            return false;
        },

        twitter : function( event ){
            var settings = event.data.settings;

            var url  = 'http://twitter.com/share?';
            url += 'text='      + encodeURIComponent(settings.excerpt.substr(0, 200));
            url += '&url='      + encodeURIComponent(settings.url);
            url += '&counturl=' + encodeURIComponent(settings.url);

            methods.popup(url);

            return false;
        },

        vkontakte : function( event ){
            var settings = event.data.settings;

            var url  = 'http://vkontakte.ru/share.php?';
            url += 'url='          + encodeURIComponent(settings.url);
            url += '&title='       + encodeURIComponent(settings.title);
            url += '&description=' + encodeURIComponent(settings.excerpt.substr(0, 200));
            url += '&image='       + encodeURIComponent(settings.image_share);
            url += '&noparse=true';

            methods.popup(url);

            return false;
        },

        odnoklassniki : function( event ){
            var settings = event.data.settings;

            var url  = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1';
            url += '&st.comments=' + encodeURIComponent(settings.excerpt.substr(0, 200));
            url += '&st._surl='    + encodeURIComponent(settings.url);
            url += '&noparse=true';

            methods.popup(url);

            return false;
        },

        mailru : function( event ){
            var settings = event.data.settings;

            var url  = 'http://connect.mail.ru/share?';
            url += 'url='          + encodeURIComponent(settings.url);
            url += '&title='       + encodeURIComponent(settings.title);
            url += '&description=' + encodeURIComponent(settings.excerpt.substr(0, 200));
            url += '&imageurl='    + encodeURIComponent(settings.image_share);

            methods.popup(url);

            return false;
        },

        googleplus : function( event ){
            var settings = event.data.settings;

            var url = 'https://plus.google.com/share?';
            url += 'url='          + encodeURIComponent(settings.url);
            url += '&gpsrc=frameless';
            url += '&partnerid=frameless';

            methods.popup(url);

            return false;
        },

        livejournal : function( event ){
            var settings = event.data.settings;

            var  url  = 'http://livejournal.com/update.bml?';
            url += 'subject='        + encodeURIComponent(settings.title);
            url += '&event='         + encodeURIComponent(settings.excerpt + '<br/><a href="' + settings.url + '">' + settings.title + '</a>');
            url += '&transform=1';

            methods.popup(url);

            return false;
        },

        popup : function(url){
            window.open(url,'','location=0,toolbar=0,status=0,width=626,height=436,top=100,left='  + (($(document).width()/2) - 313));
        }

    }
    $.fn.share = function( options ){

        // Создаём настройки по-умолчанию, расширяя их с помощью параметров, которые были переданы
        var settings = $.extend( {
            'url'    : window.location,
            'title' : $(this).find('.svensoft-social-share-info .title').text(),
            'image_share' : $(this).find('.svensoft-social-share-info .image-share').text(),
            'excerpt' : $(this).find('.svensoft-social-share-info .excerpt').text(),
            'method' : 'init'
        }, options);


        // логика вызова метода
        if ( methods[settings.method] ) {
            return methods[ settings.method ].apply( this, new Array( settings ) );
            //return methods[ settings.method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof settings.method === 'object' || ! method ) {
            return methods.init.apply( this, new Array( settings ) );
            //return methods.init.apply( this, arguments );
        } else {
            $.error( 'Метод с именем ' +  settings.method + ' не существует для jQuery.share' );
        }

    }

} )( jQuery )

/* Кнопки расшаривания в социальных сетях */
jQuery('.share-buttons-list').share();