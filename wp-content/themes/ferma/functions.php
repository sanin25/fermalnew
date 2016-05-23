<?php
/**
 * Шаблон made fermerjeck
 * https://github.com/fermerjeck
 * @package WordPress
 * @subpackage fermerjeck
 */
register_nav_menus( array( // Регистрируем 2 меню
	'top' => 'Верхнее меню',
	'left' => 'Нижнее'
) );
add_theme_support('post-thumbnails'); // Включаем поддержку миниатюр
set_post_thumbnail_size(254, 190); // Задаем размеры миниатюре

if ( function_exists('register_sidebar') )
register_sidebar(); // Регистрируем сайдбар
/*Подключаю JS*/

    function addAllScriptsAndCss(){
        /*Scripts*/

        wp_enqueue_script( 'my-bxslider', get_template_directory_uri().'/js/jquery.bxslider.min.js',array('jquery'));

        wp_enqueue_script( 'my_magnific', get_template_directory_uri().'/js/jquery.magnific-popup.min.js',array('jquery'));

        wp_enqueue_script( 'my_magnific', get_template_directory_uri().'/js/jhtml5shiv-printshiv.js',array('jquery'));

        wp_enqueue_script( 'my_TimelineMax', get_template_directory_uri().'/js/TimelineMax.min.js',array('jquery'));

        wp_enqueue_script( 'my_TimeMax', get_template_directory_uri().'/js/TweenMax.min.js',array('jquery'));

        wp_enqueue_script( 'my_ui', ('https://code.jquery.com/ui/1.11.4/jquery-ui.js'),array('jquery'));

        wp_enqueue_script( 'my-script', get_template_directory_uri().'/js/myscript.js',array('jquery'));

        /*Css*/
        

        wp_enqueue_style( 'my-mystyle', get_stylesheet_directory_uri().'/css/style.css');

        wp_enqueue_style( 'my-animate', get_stylesheet_directory_uri().'/css/animate.css');

        wp_enqueue_style( 'my-magnific', get_stylesheet_directory_uri().'/css/magnific-popup.css');

    }

    add_action('wp_enqueue_scripts', 'addAllScriptsAndCss');


    function segment_more($more) {
    return '...';
    }
    function segment_length($lengt) {
    return 6;
    }

    function pitomnik_length($lengt) {
    return 10;
}

    function announcement($length, $more='') {
       global $post;
       add_filter('excerpt_length', $length);
       add_filter('excerpt_more', $more);
         $output = get_the_excerpt();
         $output = apply_filters('wptexturize', $output);
         $output = apply_filters('convert_chars', $output);
         $output = ''.$output.'';
    echo $output;
    }
     /*ajax запросы*/
    
    function my_mail_callback(){
      $recepient = "snitin@fermaeko.com";
      $name = trim($_POST["name"]);
      $mail= trim($_POST["mail"]);
      $text = trim($_POST["textarea"]);
      $message = "Имя: $name \nПочта: $mail \nТекст: $text";
    $pagetitle = "Новая заявка с сайта \"$sitename\"";
    $headers[] = 'From: Миша <tootii@mail.ru>';
    $headers[] = 'Content-type: text/html; charset=utf-8';
     
       if (wp_mail($recepient, $pagetitle, $message, $headers))
        echo "Сообщения отправлено!";
       else
        echo "Не отправлено!";
       die();
    }
    add_action('wp_ajax_my_mail', 'my_mail_callback');
    add_action('wp_ajax_nopriv_my_mail', 'my_mail_callback');


function is_user_role( $role, $user_id = null ) {
    $user = is_numeric( $user_id ) ? get_userdata( $user_id ) : wp_get_current_user();

    if( ! $user )
        return false;

    return in_array( $role, (array) $user->roles );
}

if( is_user_role( 'editor' ) ){

    function remove_menus(){
    remove_menu_page( 'index.php' );                    //Записи
	remove_menu_page( 'upload.php' );                 //Медиафайлы
	remove_menu_page( 'edit.php?post_type=page' );         //Комментарии
	remove_menu_page( 'themes.php' );                 //Внешний вид
	remove_menu_page( 'plugins.php' );                //Плагины
	remove_menu_page( 'users.php' );                  //Пользователи
	remove_menu_page( 'tools.php' );                  //Инструменты
	remove_menu_page( 'options-general.php' );        //Параметры
	remove_menu_page( 'profile.php' );        //Параметры
}
add_action( 'admin_menu', 'remove_menus' );
    add_action( 'admin_menu', 'my_remove_menu_pages' );
    function my_remove_menu_pages() {
        remove_submenu_page('edit.php','edit-tags.php?taxonomy=post_tag');
    }



    function wph_new_toolbar() {
        global $wp_admin_bar;
        $wp_admin_bar->remove_menu('new-content'); //меню "добавить"
        $wp_admin_bar->remove_menu('updates');     //меню "обновления"
        $wp_admin_bar->remove_menu('wp-logo');     //меню "о wordpress"
        $wp_admin_bar->remove_menu('wpseo-menu');     //меню "о wordpress"
    }
    add_action('wp_before_admin_bar_render', 'wph_new_toolbar');
}

?>