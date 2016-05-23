<?php
/**
 * Шаблон made fermerjeck
 * https://github.com/fermerjeck
 * @package WordPress
 * @subpackage fermerjeck
 */
?>
<!DOCTYPE html>
<html lang="ru">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta charset="UTF-8">
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
<body>
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

<div class="kontackt">
<?php get_template_part('inc/contact');?>
</div>
<img id="imgsearch" src="<?php echo get_template_directory_uri();?>/img/search.png">
<div class="search">
	<div class="searchform">
		<img id="searchformimg" src="<?php echo get_template_directory_uri();?>/img/searchform.png">
		<img id="closesearch" src="<?php echo get_template_directory_uri();?>/img/close.png">
		<?php get_search_form(); ?>
	</div>
</div>
