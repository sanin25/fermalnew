jQuery(document).ready(function($) {
	$('#go').on('click', function(event) {
		event.preventDefault();
		
		console.log('dsd');
	});

	$('#phpner-file').on('change', function(event) {
		
	var img = document.getElementById('phpner-file_in');
	  var reader  = new FileReader();

		reader.onprogress = function(evt){

			$('#bar').html( parseInt( evt.loaded / evt.total * 100) +'%').css({
				width: evt.loaded / evt.total * 100+'%',
				property2: 'value2'
			});
			console.log(parseInt( evt.loaded / evt.total * 100));

			
		}

		reader.readAsDataURL(this.files[0]);

		reader.onload = function(event){
			img.src = reader.result;
		}
		
	});


	$('#slider-form').on('submit', function(event) {
		event.preventDefault();
		var f = document.forms[0];
		form = new FormData(f);
		form.append('action', 'my_action');		



		// с версии 2.8 'ajaxurl' всегда определен в админке
	 jQuery.ajax({
        type: 'POST',
        url: ajaxurl,
        data: form,
        contentType: false,
        processData: false,
        success: function(response){
			console.log(response);
			$('#priceListPitomnika').html('<a href="'+ response + ' ">ss</a>')
        }
    });
	});

		var full_price_list = {
			action: 'full_price_list'
		};

		jQuery.post( ajaxurl, full_price_list, function(res) {
			var r = JSON.parse(res);

			$.each(r, function(kye, val){

				var tr = '<tr><td>' + val.title+ ' </td><td>' + val.col2 + ' </td><td>' + val.col3 + ' </td><td>' + val.col4 + ' </td><td>' + val.col5 + '<a class="del" href="# '+ val.id + ' ">del</a> <a class="edit" href="# '+ val.id + ' ">Edit</a></td></tr>';

			});



		});


});