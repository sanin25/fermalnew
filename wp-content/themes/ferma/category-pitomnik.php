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

        <img id="logopitom"  src="<?php echo get_template_directory_uri()?>/img/pit.png" alt="">
        <div class="contactpit">
            <ul>
                <li><i class="fa fa-phone" aria-hidden="true"></i> +38-067-600-10-66</li>
                <li><i class="fa fa-phone" aria-hidden="true"></i> +38-099-759-93-94</li>
                <hr>
                <li class="pricelict"><i class="fa fa-list-alt" aria-hidden="true"></i> Прайс растение</li>
                <li class="pricelict"><i class="fa fa-list-alt" aria-hidden="true"></i> Прайс птицы</li>
            </ul>
        </div>
        <div class="pitomnikbody clearfix ">
            <div class="pitomnikbox">
                <ul>

                    <?php
                    $gallery = get_post_gallery( 235, false );

                    $gids = explode( ",", $gallery['ids'] );

                    foreach ($gids as $id) {
                    echo " <li>";
                    $attachment = wp_prepare_attachment_for_js($id);
                    ?>
                    <a class="popup-pitomnik" href="#<?php echo $id;?>"><img src="<?php echo $attachment['url']; ?>" class="my-custom-class" alt="<?php echo $attachment['caption']; ?>" />
                        <?php
                        echo  "<span>".$attachment['caption']."</span></a>";
                        echo "<div id='$id' class='inboxpit'>";
                        echo "<br>";
                        echo  "<h3>".$attachment['caption']."</h3><br>".$attachment['description'] ;
                        echo "<p><a class=\"popup-modal-dismiss\" href=\"#\">Закрыть</a></p> </div>";
                        echo " </li>";
                        }
                        ?>
                </ul>
            </div>

            <div class="leika"></div>

        </div>
    </section>

<?php get_sidebar(); // Подключаем сайдбар ?>
<?php get_footer(); // Подключаем футер ?>