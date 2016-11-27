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
<?php get_header(); // Подключаем хедер?>

<div class="container-fluid">

    <div class="row heigh cont1 text-center">
		<div class="col-md-12">
			<div class="bcg"></div>
				<img id="logo" src="<?php echo get_template_directory_uri()?>/img/logo.svg" alt="Эко ферма" id="logo">
		</div>
		<div class="clearfix"></div>
		<h3>«Растёт то, что мы выращиваем в душе, - таков  закон природы».</h3>
	</div>

	<div class="row heigh  cont2 text-center">
			<div class="bcg"></div>
			<?php get_template_part('inc/liveferma');?>
	</div>

	<div class="row heigh cont-all bg-3 text-center ">
		<div class="container">
			<div class="row">
				<div class="bcg"></div>
				<?php get_template_part('inc/kyri');?>
			</div>
		</div>
	</div>

	<div class="row heigh cont-all bg-4 text-center">
		<div class="container">
			<div class="row">
					<div class="bcg"></div>
						<?php get_template_part('inc/gusi');?>
					</div>
			</div>
	</div>

	<div class="row heigh cont-all bg-5 text-center">
		<div class="container">
			<div class="row">
				<div class="bcg"></div>
					<?php get_template_part('inc/pavlin');?>
			</div>
		</div>
	</div>

	<div class="row heigh cont-all bg-6 text-center">
		<div class="container">
			<div class="row">
				<div class="bcg"></div>
					<?php get_template_part('inc/fazan');?>
			</div>
		</div>
	</div>

	<div class="row heigh pitomnik bg-7 text-center">
		<div class="container">
			<div class="row">
					<img id="logopitom"  src="<?php echo get_template_directory_uri()?>/img/pit.png" alt="">
					<hr class="hr">
					<div class="bcg"></div>
					<?php get_template_part('inc/pitomnik');?>
			</div>
				</div>
		</div>
	</div>
<?php get_sidebar(); // Подключаем сайдбар ?>
<?php get_footer(); // Подключаем футер ?>