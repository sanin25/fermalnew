<?php
/**
 * The template for displaying all single posts and attachments
 * Theme Name: ferma
 * @package WordPress
 * @subpackage ferma
 * @since Twenty Fifteen 1.0
 * Author: phpner
 */?>
<?php get_header(); // Подключаем хедер?>
<div class="container-fluid pitomnik  bg-7">

    <div class="container categoty-all ">
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
                            'depth'=> 2,
                            'menu_class' => "nav navbar-nav",
                            'fallback_cb' => '__return_empty_string',
                        );

                        wp_nav_menu($args)
                        ?>
                    </div>
                    <img id="logopitom"  src="<?php echo get_template_directory_uri()?>/img/pit.png" alt="">
                    <hr class="hr">

                </div>

<?php   $args = array(
    'post_type' => 'pit'
    );

    $query = new WP_Query($args);
    ?>

<?php while ( $query->have_posts()) : $query->the_post(); ?>

    <div class="col-md-4 col-sm-4 col-xs-6">
        <div class="thumbnail">

            <div class="imgin">

                <a href="<?php the_permalink(); ?>"><?php the_post_thumbnail(array(300,200));?></a>

            </div>

            <h3><a href="<?php the_permalink()?>"><?php the_title(); ?></a> </h3>

        </div>

    </div>

<?php endwhile; ?>
    <div class="clearfix"></div>
        </div>
    </div>
</div>

<?php get_sidebar(); // Подключаем сайдбар ?>
<?php get_footer(); // Подключаем футер ?>