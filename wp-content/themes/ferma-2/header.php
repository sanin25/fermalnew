<?php
/**
 * The template for displaying all single posts and attachments
 * Theme Name: ferma
 * @package WordPress
 * @subpackage ferma
 * @since Twenty Fifteen 1.0
 * Author: phpner
 */
?>
<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<!-- RSS, стиль и всякая фигня -->
<link rel="alternate" type="application/rdf+xml" title="RDF mapping" href="<?php bloginfo('rdf_url'); ?>" />
<link rel="alternate" type="application/rss+xml" title="RSS" href="<?php bloginfo('rss_url'); ?>" />
<link rel="alternate" type="application/rss+xml" title="Comments RSS" href="<?php bloginfo('comments_rss2_url'); ?>" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
	<?php
	// ОТВЕТ НА
	if ( is_singular() ) wp_enqueue_script( 'comment-reply' );
	?>
 <!--[if lt IE 9]>
	<script type="text/javascript">
		var html5Elem = ['header', 'nav', 'menu', 'section', 'article', 'aside', 'footer'];
		for (var i = 0; i < html5Elem.length; i++){
				document.createElement(html5Elem[i]);
		}
	</script>
	<link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri().'/css/ie.css'?>">
	<![endif]-->
	<title>
<?php // Генерируем тайтл в зависимости от контента с разделителем " | "
	global $page, $paged;
	wp_title( '|', true, 'right' );
	bloginfo( 'name' );
	$site_description = get_bloginfo( 'description', 'display' );
	if ( $site_description && ( is_home() || is_front_page() ) )
		echo " | $site_description";
	if ( $paged >= 2 || $page >= 2 )
		echo ' | ' . sprintf( __( 'Page %s', 'twentyten' ), max( $paged, $page ) );
?>
</title>
<?php
	wp_head(); // Необходимо для работы плагинов и функционала wp
?>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
</head>
<body >
<div id="hidden">
	<div id="txt">
		<p class="txt-perc">0%</p>
		<div class="progress"><span></span></div>
	</div>
</div>

<!-- Форма отправки почты -->
<div class="forma">
<img id="emailform" src="<?php echo get_template_directory_uri();?>/img/vopros.png">
<div class="semdmail">
	<form id="form">
<img id="close" src="<?php echo get_template_directory_uri();?>/img/close.png">
	<p>Отправить письмо</p><br/>
		<div class="formblock">
			<label for="name">Ваше имя:</label>
			<input type="text" name="name"  placeholder="Имя" required>
		</div>
		<div class="formblock">
			<label for="mail">Ваша почта:</label>
			<input type="email" name="mail" required placeholder="Почта">
			<input type="hidden" name="action" value="my_mail" />
		</div>
		<textarea name="textarea" cols="40" rows="10" maxlength="1500" placeholder="Задать вопрос" ></textarea>
		<br/>
		<br/>
		<button>Отправить</button>
	</form>

</div>

</div>
<img id="imgsearch" src="<?php echo get_template_directory_uri();?>/img/search.png">
<div class="search">
	<div class="searchform">
		<img id="searchformimg" src="<?php echo get_template_directory_uri();?>/img/searchform.png">
		<img id="closesearch" src="<?php echo get_template_directory_uri();?>/img/close.png">
		<?php get_search_form(); ?>
	</div>
</div>

<!--Контакты-->

<!--<div class="contactpit">
	<ul>
		<li><i class="fa fa-phone" aria-hidden="true"></i> +38-067-600-10-66</li>
		<li><i class="fa fa-phone" aria-hidden="true"></i> +38-099-759-93-94</li>
		<hr>
		<li class="pricelict"><i class="fa fa-list-alt" aria-hidden="true"></i> Прайс растение</li>
		<li class="pricelict"><i class="fa fa-list-alt" aria-hidden="true"></i> Прайс птицы</li>
	</ul>
</div>-->

