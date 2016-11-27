<?php 

?>
<p>Сладер</p>
<form   id="slider-form" enctype="multipart/form-data" action="" method="POST">
    <?php wp_nonce_field( 'my_file_upload', 'fileup_nonce' ); ?>
    <input name="my_file_upload" type="file" />
    <input type="submit" value="Загрузить файл" />
</form>

<p id="bar">гоо</p>
<div ></div>
<div  id="priceListPitomnika">

</div>