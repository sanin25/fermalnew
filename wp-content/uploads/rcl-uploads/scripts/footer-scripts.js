jQuery(function($){ $('#userpicupload').fileupload({ dataType: 'json', type: 'POST', url: Rcl.ajaxurl, formData:{action:'rcl_avatar_upload',ajax_nonce:Rcl.nonce}, loadImageMaxFileSize: 2097152, autoUpload:false, previewMaxWidth: 900, previewMaxHeight: 900, imageMinWidth:150, imageMinHeight:150, disableExifThumbnail: true, progressall: function (e, data) { var progress = parseInt(data.loaded / data.total * 100, 10); $('#avatar-upload-progress').show().html('<span>'+progress+'%</span>'); }, add: function (e, data) { if(!data.form) return false; $.each(data.files, function (index, file) { $('#rcl-preview').remove(); if(file.size>2097152){ rcl_notice('Exceeds the maximum size for a picture! Max. wp-recall MB','error'); return false; } var reader = new FileReader(); reader.onload = function(event) { var imgUrl = event.target.result; $( '#rcl-preview' ).remove(); $('body > div').last().after('<div id=\'rcl-preview\' title=\'Загружаемое изображение\'><img src=\''+imgUrl+'\'></div>'); var image = $('#rcl-preview img'); image.load(function() { var img = $(this); var height = img.height(); var width = img.width(); var jcrop_api; img.Jcrop({ aspectRatio: 1, minSize:[150,150], onSelect:function(c){ img.attr('data-width',width).attr('data-height',height).attr('data-x',c.x).attr('data-y',c.y).attr('data-w',c.w).attr('data-h',c.h); } },function(){ jcrop_api = this; }); $( '#rcl-preview' ).dialog({ modal: true, imageQuality: 1, width: width+32, dialogClass: 'rcl-load-avatar', resizable: false, close: function (e, data) { jcrop_api.destroy(); $( '#rcl-preview' ).remove(); }, buttons: { Ok: function() { data.submit(); $( this ).dialog( 'close' ); } } }); }); }; reader.readAsDataURL(file); }); }, submit: function (e, data) { var image = $('#rcl-preview img'); if (parseInt(image.data('w'))){ var src = image.attr('src'); var width = image.data('width'); var height = image.data('height'); var x = image.data('x'); var y = image.data('y'); var w = image.data('w'); var h = image.data('h'); data.formData = { coord: x+','+y+','+w+','+h, image: width+','+height, action:'rcl_avatar_upload', ajax_nonce:Rcl.nonce }; } }, done: function (e, data) { if(data.result['error']){ rcl_notice(data.result['error'],'error'); return false; } $('#rcl-contayner-avatar .rcl-user-avatar img').attr('src',data.result['avatar_url']); $('#avatar-upload-progress').hide().empty(); $( '#rcl-preview' ).remove(); rcl_notice(data.result['success'],'success'); } }); rcl_add_dropzone('#rcl-public-dropzone'); var post_id_edit = $('input[name="post-rcl"]').val(); var post_type = $('input[name="posttype"]').val(); $('#upload-public-form').fileupload({ dataType: 'json', type: 'POST', dropZone: $('#rcl-public-dropzone'), url: Rcl.ajaxurl, formData:{action:'rcl_imagepost_upload',post_type:post_type,post_id:post_id_edit,ajax_nonce:Rcl.nonce}, singleFileUploads:false, autoUpload:true, progressall: function (e, data) { /*var progress = parseInt(data.loaded / data.total * 100, 10); $('#upload-box-message .progress-bar').show().css('width',progress+'px');*/ }, send:function (e, data) { var error = false; rcl_preloader_show('.public_block form'); var cnt_now = $('#temp-files li').length; $.each(data.files, function (index, file) { cnt_now++; if(cnt_now>10){ rcl_notice('Превышено разрешенное количество файлов к загрузке! Макс. 10','error'); error = true; } if(file['size']>2097152){ rcl_notice('Превышен максимальный размер файла '+file['name']+'! Макс. 2 МВ','error'); error = true; } }); if(error){ rcl_preloader_hide(); return false; } }, done: function (e, data) { $.each(data.result, function (index, file) { if(data.result['error']){ rcl_notice(data.result['error'],'error'); rcl_preloader_hide(); return false; } if(file['string']){ $('#temp-files').append(file['string']); } }); rcl_preloader_hide(); } }); $('#lk-content').on('click','.link-file-rcl',function(){ $(this).parent().text('Удаляю файл с сервера'); }); var talker = $('input[name="adressat_mess"]').val(); var online = $('input[name="online"]').val(); $('#upload-private-message').fileupload({ dataType: 'json', type: 'POST', url: Rcl.ajaxurl, formData:{action:'rcl_message_upload',talker:talker,online:online,ajax_nonce:Rcl.nonce}, loadImageMaxFileSize: 2097152, autoUpload:true, progressall: function (e, data) { var progress = parseInt(data.loaded / data.total * 100, 10); $('#upload-box-message .progress-bar').show().css('width',progress+'px'); }, change:function (e, data) { if(data.files[0]['size']>2097152){ rcl_notice('Exceeds the maximum size for a picture! Max. wp-recall MB','error'); return false; } }, done: function (e, data) { var result = data.result; if(result['recall']==100){ var text = 'Файл был успешно отправлен'; } if(result['recall']==150){ var text = 'Вы достигли предела по кол-ву отправляемых файлов. Подождите пока файлы отправленные ранее будут приняты.'; } $('.new_mess').replaceWith('<div class="public-post message-block file"><div class="content-mess"><p style="margin-bottom:0px;" class="time-message"><span class="time">'+result['time']+'</span></p><p class="balloon-message">'+text+'</p></div></div><div class="new_mess"></div>'); $('#upload-box-message .progress-bar').hide();var div = $('#resize-content'); div.scrollTop( div.get(0).scrollHeight );} });});