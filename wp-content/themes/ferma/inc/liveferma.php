<?php
/**
 * Шаблон made fermerjeck
 * https://github.com/fermerjeck
 * @package WordPress
 * @subpackage fermerjeck
 */
?>
<div class="katalog">
	<?php $query = new WP_Query( 'category__in=6' ); ?>
	<h3><a href="<?php echo get_category_link(6); ?>">Жизнь на ферме</a></h3>
	<ul class="bxslider">
		<?php while ( $query->have_posts()) : $query->the_post(); ?>
			<li>
				<div class="txtmin"><?php the_title();?></div>
			<a href="<?php the_permalink(); ?>"><?php the_post_thumbnail(array(500,300));?>
			</a>
			</li>
		
	<?php endwhile; ?>
	<?php wp_reset_postdata();?>


	</ul>
	<h3><a href="<?php echo get_category_link(6); ?>">Посмотреть всё</a></h3>

</div>
