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

    <div class="condainer-fluid category">
        <div class="container">
            <div class="row">
                <div class="col-md-12 ">

                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#menu">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <div class="collapse navbar-collapse text-center" id="menu">
                        <?php
                        $args = array( // Выводим верхнее меню
                            'theme_location'=>'pitomnik',
                            'container'=>'',
                            'depth'=> 0,
                            'menu_class' => "nav navbar-nav",
                            'fallback_cb' => '__return_empty_string',
                        );

                        wp_nav_menu($args)
                        ?>
                    </div>

                    <h1><?php wp_title(''); // Заголовок категории ?></h1>
                    <hr>

                </div>
                <?php   $args = array(
                    'post_type' => 'fazan'
                );

                $query = new WP_Query($args);
                ?>

                <?php if ($query->have_posts()) : while ($query->have_posts()) : $query->the_post(); // Цикл записей ?>
                    <div class="col-md-4 col-xs-6 col-sm-6 text-center">

                        <div class="thumbnail">
                            <h3><?php the_title(); ?></h3>
                            <hr>
                            <div class="catimg">
                                <a href="<?php the_permalink(); ?>"><?php the_post_thumbnail(array(230,300));?></a>
                            </div>
                            <div class="caption">
                                <?php
                                announcement('segment_length','segment_more');

                                ?>
                                <a href="<?php the_permalink(); ?>">
                                    <div class="more">
                                        <i class="fa fa-hand-o-right"></i>
                                        <span >Читать полностью »</span>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                <?php endwhile; ?>
                    <div class="clearfix"></div>
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
            </div>
        </div>
    </div>

<?php get_sidebar(); // Подключаем сайдбар ?>
<?php get_footer(); // Подключаем футер ?>