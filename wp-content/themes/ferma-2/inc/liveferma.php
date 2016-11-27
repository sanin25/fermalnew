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
<div class="col-md-12">
	<?php $query = new WP_Query( 'post_type=LiveOnFarm' ); ?>

	<h3><a href="<?php echo get_category_link(6); ?>">Жизнь на ферме</a></h3>
			<ul class="slider-live-on-farm">
					<?php while ( $query->have_posts()) : $query->the_post(); ?>
							<li class="liveinfarm">
								<div class="txtmin"><?php the_title();?></div>
									<a href="<?php the_permalink(); ?>"><?php the_post_thumbnail(array(500,300));?>
									</a>
							</li>
					<?php endwhile; ?>

					<?php wp_reset_postdata();?>
			</ul>
	<h3><a href="<?php echo get_category_link(6); ?>">Посмотреть всё</a></h3>
	<div class="clearfix"></div>
</div>
