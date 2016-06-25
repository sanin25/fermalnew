<?php
/**
 * Шаблон made fermerjeck
  * https://github.com/fermerjeck
 * @package WordPress
 * @subpackage fermerjeck
 */
get_header(); // Подключаем хедер?>
    <article class="heigh2 cont1 clearfix">
		<div class="bcg"></div>
		<img src="<?php echo get_template_directory_uri()?>/img/logo.svg" alt="Эко ферма" id="logo">
        <h1>«Растёт то, что мы выращиваем в душе, - таков  закон природы».</h1>
    </article>

    <article class="heigh cont2  clearfix">
		<div class="bcg"></div>
        <?php get_template_part('inc/about');?>
    </article>

	<article class="heigh cont3 clearfix">
        <div class="bcg"></div>
		<?php get_template_part('inc/liveferma');?>
	</article>

	<article class="heigh cont4 clearfix" id="slide02">

        <div class="bcg"></div>

		<?php get_template_part('inc/kyri');?>
	</article>

	<article class="heigh cont5 clearfix">
        <div class="bcg"></div>
		<?php get_template_part('inc/gusi');?>
	</article>

	<article class="heigh cont6 clearfix">
        <div class="bcg"></div>
		<?php get_template_part('inc/pavlin');?>
	</article>

	<article class="heigh cont7 clearfix">
        <div class="bcg"></div>
		<?php get_template_part('inc/fazan');?>
	</article>
 <div id="cont8">
	 <div class="bgc"></div>
	 <div class="fade">
	 <img id="logopitom"  src="<?php echo get_template_directory_uri()?>/img/pitomniklogo.svg" alt="">
	 </div>
 </div>
	<article class="heigh cont8 clearfix">
        <div class="bcg"></div>
		<?php get_template_part('inc/pitomnik');?>

	</article>

<?php get_sidebar(); // Подключаем сайдбар ?>
<?php get_footer(); // Подключаем футер ?>