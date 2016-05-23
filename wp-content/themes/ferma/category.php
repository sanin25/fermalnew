<?php
/**
 * Чистый Шаблон для разработки
 * Шаблон вывода постов в категории(рубрике)
 * http://dontforget.pro
 * @package WordPress
 * @subpackage clean
 */

get_header(); // Подключаем хедер ?>

	<section class="category heigh2 clearfix">
	<?php if ( function_exists('yoast_breadcrumb') ) 
{yoast_breadcrumb('<p id="breadcrumbs">','</p>');} ?>

<h1><?php wp_title(''); // Заголовок категории ?></h1>
				
			<div class="wrapper clearfix">
		<?php if (have_posts()) : while (have_posts()) : the_post(); // Цикл записей ?>
				<div class="cat">
					<h2><?php the_title(); ?></h2>
					<hr>
						<div class="catimg">
								<a href="<?php the_permalink(); ?>"><?php the_post_thumbnail(array(300,200));?></a>
						</div>		
						<div class="cattext">
							<div class="cattextin">
								<?php
									announcement('segment_length','segment_more'); 
								?>
							</div>
							<a href="<?php the_permalink(); ?>">
							<div class="more">
								<i class="fa fa-hand-o-right"></i>
								<span >Читать полностью »</span>
							</div>
						</a>
						</div>
										
				</div>
		<?php endwhile; ?>
		</div>
		<?php wp_reset_postdata();?>
				
<?php else: echo '<h2>Извините, ничего не найдено...</h2>'; endif; // Если записей нет - извиняемся ?>	 
<?php // Пагинация
global $wp_query;
$big = 999999999;
echo paginate_links( array(
	'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
	'format' => '?paged=%#%',
	'current' => max( 1, get_query_var('paged') ),
	'type' => 'list',
	'prev_text'    => __('« Сюда'), 
    'next_text'    => __('Туда »'),
	'total' => $wp_query->max_num_pages
) );
?>
</section>
<?php get_sidebar(); // Подключаем сайдбар ?>
<?php get_footer(); // Подключаем футер ?>