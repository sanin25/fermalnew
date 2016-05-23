<?php
/**
 * Шаблон made fermerjeck
  * https://github.com/fermerjeck
 * @package WordPress
 * @subpackage fermerjeck
 */
?>
	<div id="tab-container" class="about clearfix">
	<h3>Дружный фермер</h3>

		<?php
		$mypost = array( 'post_type' => 'fermer', );
		$loop = new WP_Query( $mypost );
		$idp = [];
		$attachments = [];
		?>

	  <div class="fotoin clearfix">

		  <ul>
			  <?php while ( $loop->have_posts() ) : $loop->the_post();?>

		  <li class=""><a href="#<?php the_ID(); ?>"><?php the_post_thumbnail(array(300,200));?></a></a></li>


			   <?php endwhile; ?>
		  </ul>
		  <?php wp_reset_query(); ?>
	  </div>
		<div class="textunber panel-container">

			<?php while ( $loop->have_posts() ) : $loop->the_post();?>

			<div id="<?php the_ID(); ?>" class="panel">

				<div class="img"><?php the_post_thumbnail(array(400,300));?></div>
				<h2><?php the_title();?></h2>

				<div class="content">
				<?php
				the_content()
				?>
				</div>
				</div>

			<?php endwhile; ?>

			<?php wp_reset_query(); ?>
		  </div>

