<?php
/**
 * Шаблон made fermerjeck
  * https://github.com/fermerjeck
 * @package WordPress
 * @subpackage fermerjeck
 * Template Name: ferma
 */
get_header(); // Подключаем хедер?>
    <section class="heigh2 cont1 clearfix">
		<div class="bcg"></div>
		<img src="<?php echo get_template_directory_uri()?>/img/logo.svg" alt="Эко ферма" id="logo">
        <h1>«Растёт то, что мы выращиваем в душе, - таков  закон природы».</h1>
    </section>

	<section class="heigh cont3">
        <div class="bcg"></div>
		<?php get_template_part('inc/liveferma');?>
	</section>

	<section class="heigh cont4 clearfix" id="slide02">

        <div class="bcg"></div>

		<?php get_template_part('inc/kyri');?>
	</section>

	<section class="heigh cont5 clearfix">
        <div class="bcg"></div>
		<?php get_template_part('inc/gusi');?>
	</section>

	<section class="heigh cont6 clearfix">
        <div class="bcg"></div>
		<?php get_template_part('inc/pavlin');?>
	</section>

	<section class="heigh cont7 clearfix">
        <div class="bcg"></div>
		<?php get_template_part('inc/fazan');?>
	</section>
	<section class="heigh cont8 clearfix">
	
		<div class="fade">
			<img id="logopitom"  src="<?php echo get_template_directory_uri()?>/img/pit.png" alt="">
			<hr class="hr">
		</div>
        <div class="bcg"></div>
		<?php get_template_part('inc/pitomnik');?>

	</section>
<?php get_sidebar(); // Подключаем сайдбар ?>
<?php get_footer(); // Подключаем футер ?>