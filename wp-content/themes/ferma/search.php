<?php
/**
 * Шаблон made fermerjeck
 * https://github.com/fermerjeck
 * @package WordPress
 * @subpackage fermerjeck
 */
get_header(); // Подключаем хедер?>
<section class="searchsection heigh2">
<?php if ( function_exists('yoast_breadcrumb') )
{yoast_breadcrumb('<p id="breadcrumbs">','</p>');} ?>
<div class="searchpage">
	
		<h1><?php printf( __( 'Результаты поиска: %s', 'twentyten' ), '' . get_search_query() . '' ); // Динамический заголовок поиска?></h1>
	<?php if (have_posts()) : while (have_posts()) : the_post(); // Цикл записей ?>
<div class="searchbody">

		<a href="<?php the_permalink(); ?>"><h3><?php the_title(); ?></h3><!-- Заголовок поста + ссылка на него -->
			<?php the_time('F j, Y'); // Дата создания поста ?>
		
				<?php if ( has_post_thumbnail() ) 
					{ the_post_thumbnail(); } // Проверяем наличие миниатюры, если есть показываем ?>
									
									</a>
									<?php
										announcement('segment_length','segment_more'); 
									?>
</div>
<?php endwhile; // Конец цикла.
else: echo '<h2>Извините, ничего не найдено...</h2>'; endif; // Если записей нет - извиняемся ?>
<?php // Пагинация
global $wp_query;
$big = 999999999;
echo paginate_links( array(
	'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
	'format' => '?paged=%#%',
	'current' => max( 1, get_query_var('paged') ),
	'type' => 'list',
	'prev_text'    => __('« Назад'),
    'next_text'    => __('Вперёд »'),
	'total' => $wp_query->max_num_pages
) );
?>
</div>
</section>
<?php get_sidebar(); // Подключаем сайдбар ?>
<?php get_footer(); // Подключаем футер ?>