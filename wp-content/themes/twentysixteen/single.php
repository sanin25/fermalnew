<?php
/**
 * The template for displaying all single posts and attachments
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */

get_header(); ?>

    <div class="container-fluid bg-singl">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">

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

                </div>
                <div class="col-md-12">

                    <h1 class="text-center"><?php the_title(); // Заголовок ?></h1>

                    <hr class="hr">

                <?php if ( have_posts() ) while ( have_posts() ) : the_post(); // Начало цикла ?>



                   <?php the_content()?>



                    <?php the_tags( 'Тэги: ', ' | ', '' ); // Выводим тэги(метки) поста ?>

                <?php endwhile; // Конец цикла

                wp_reset_query();

                ?>

        </div>
                <div class="clearfix"></div>

        <?php comments_template('/comments.php'); ?>

            </div>
        </div>

    </div>

<?php get_sidebar(); // Подключаем сайдбар ?>

<?php get_footer(); // Подключаем футер ?>