<?php
/**
 * Шаблон made fermerjeck
 * https://github.com/fermerjeck
 * @package WordPress
 * @subpackage fermerjeck
 */
get_header(); // Подключаем хедер?>
    <section class="singl">
        <?php if ( function_exists('yoast_breadcrumb') )
        {yoast_breadcrumb('<p id="breadcrumbs">','</p>');} ?>
        <div class="wrap">
            
                <h1><?php the_title(); // Заголовок ?></h1>
                <hr class="hr">
            <?php if ( have_posts() ) while ( have_posts() ) : the_post(); // Начало цикла ?>

               <?php the_content()?>

                <?php the_tags( 'Тэги: ', ' | ', '' ); // Выводим тэги(метки) поста ?>
            <?php endwhile; // Конец цикла
            wp_reset_query();
            ?>
        </div>

        <div id="interesting_articles">

            <h3>Возможно Вам будет интересно</h3>
            <?php
            $categories = get_the_category($post->ID);
            if ($categories) {
                $category_ids = array();
                foreach($categories as $individual_category) $category_ids[] = $individual_category->term_id;
                $args=array(

                    'category__in' =>  $tag_ids,  //сортировка по тегам (меткам)
                    'post__not_in' => array($post->ID),
                    'showposts'=>5,  //количество выводимых ячеек
                    'orderby'=>'rand', // в случайном порядке
                    'ignore_sticky_posts'=>1); //исключаем одинаковые записи
                $my_query = new wp_query($args);
                if( $my_query->have_posts() ) {
                    echo'<div class="slider clearfix">';
                    echo  "<div class='slider-wrapper'>";
                    echo '<ul  id="slider">';
                    $texts = array();
                    $i = 0;
                        while ($my_query->have_posts()) {
                            ++$i;
                            $my_query->the_post();
                            $texts[$i] = the_title('','',false);
                            ?>
                            <li>
                                    <a   href="<?php the_permalink() ?>"><?php the_post_thumbnail(array(350,250)); ?></a>

                            </li>
                            <?php
                            }
                    echo '</ul>';
                    echo "</div>";
                    echo "<div id='slider-pager' class='pager'>";
                    foreach ($texts as $test => $t) {
                        echo '<div>';
                        echo $t;
                        echo '</div>';
                    }
                        echo "</div>";
                        echo "</div>";

                }
                wp_reset_query();
            }
            ?>
        </div>
        <?php comments_template('/comments.php'); ?>
    </section>
<?php get_sidebar(); // Подключаем сайдбар ?>
<?php get_footer(); // Подключаем футер ?>