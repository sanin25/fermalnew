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
<?php
	 $args = array(
	'posts_per_page' => 3,
	'orderby' => 'id',
	'order' => 'DESC',
	'post_type' => 'pavlin'
);

$query = new WP_Query($args);
?>

<h2><a href="<?php echo get_category_link(4); ?>">Павлины</a></h2>

<?php ?>

<?php while ( $query->have_posts()) : $query->the_post(); ?>

	<div class="col-md-4 col-sm-4 col-xs-6">
		<div class="thumbnail">

			<div class="imgin">

				<a href="<?php the_permalink(); ?>"><?php the_post_thumbnail(array(300,200));?></a>

			</div>

			<h3><a href="<?php the_permalink()?>"><?php the_title(); ?></a> </h3>
			<div class="caption">


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

	</div>

<?php endwhile; ?>
<div class="clearfix"></div>

<h3><a href="<?php echo get_category_link(4); ?>">Посмотреть всё</a></h3>

<?php wp_reset_postdata();?>





