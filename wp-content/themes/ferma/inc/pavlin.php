<?php
/**
 * Шаблон made fermerjeck
 * https://github.com/fermerjeck
 * @package WordPress
 * @subpackage fermerjeck
 */
?>
<div class="pavlinbody clearfix">

	<?php
		$args = array(
			'posts_per_page' => 3,
			'category__in' => 4
			
		);
	 $query = new WP_Query($args); ?>
	<h3><a href="<?php echo get_category_link(2); ?>">Павлины</a></h3>
		<?php while ( $query->have_posts()) : $query->the_post(); ?>
<div class="pavlin">
	<div class="gusiimg">
			<a href="<?php the_permalink(); ?>"><?php the_post_thumbnail(array(300,200));?></a>
	</div>		
			<div class="gusitext">
			<h2><a href="<?php the_permalink()?>"><?php the_title(); ?></a> </h2>
				<?php
					announcement('segment_length','segment_more'); 
				?>
				<a href="<?php the_permalink(); ?>">
				<br/>
				<div class="more">
				<span >Читать полностью »</span>
				</div>
			</a>
			</div>
			
</div>
	<?php endwhile; ?>
	<h3><a href="<?php echo get_category_link(4); ?>">Посмотреть всё</a></h3>
	</div>
	<?php wp_reset_postdata();?>


