<?php
/**
 * Шаблон made fermerjeck
  * https://github.com/fermerjeck
 * @package WordPress
 * @subpackage fermerjeck
 */
get_header(); // Подключаем хедер?> 
	<section class="heigh2 cont1 clearfix">
		<img src="<?php echo get_template_directory_uri()?>/img/logo.png" alt="Эко ферма" id="logo">
	</section>

	<section class="heigh cont2 clearfix">
		<?php get_template_part('inc/about');?>
	</section>

	<section class="heigh cont3 clearfix">
		<?php get_template_part('inc/liveferma');?>
	</section>

	<section class="heigh cont4 clearfix">
		<?php get_template_part('inc/kyri');?>
	</section>

	<section class="heigh cont5 clearfix">
		<?php get_template_part('inc/gusi');?>
	</section>

	<section class="heigh cont6 clearfix">
		<?php get_template_part('inc/pavlin');?>
	</section>

	<section class="heigh cont7 clearfix">
		<?php get_template_part('inc/fazan');?>
	</section>
 <span id="cont8"></span>
	<section class="heigh cont8 clearfix">
		<?php get_template_part('inc/pitomnik');?>
	 
	</section>

<?php get_sidebar(); // Подключаем сайдбар ?>
<?php get_footer(); // Подключаем футер ?>