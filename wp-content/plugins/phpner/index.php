<?php
/*
Plugin Name: phpner
Plugin URI: http://wordpress.org
Description: phpner
Author: phpner
Author URI: http://example.com
*/

// Hook for adding admin menus
add_action('admin_menu', 'pricelist');

// регистрация в админ меню
function pricelist() {
    // Add a new top-level menu (ill-advised):
    add_menu_page('Test Toplevel', 'Прайс', 8, __FILE__, 'viewHome');

}


// Вид меню
function viewHome() {
  require_once plugin_dir_path( __FILE__ ).'include/home.php';
}

// Регистрация загрузки скриптов на одной странице
function custom_admin_scripts() {
    wp_enqueue_style( 'admin-css', plugins_url('css/style.css', __FILE__), array(), null, 'all' );
    wp_enqueue_script( 'admin-init', plugins_url('js/main-phpner.js', __FILE__) , array('jquery'), null, true );
}
add_action('admin_enqueue_scripts', 'custom_admin_scripts' );


add_action('wp_ajax_my_action', 'my_action_callback');
function my_action_callback() {

    if( wp_verify_nonce( $_POST['fileup_nonce'], 'my_file_upload' ) ){
        if ( ! function_exists( 'wp_handle_upload' ) )
            require_once( ABSPATH . 'wp-admin/includes/file.php' );

        $file = &$_FILES['my_file_upload'];
        $overrides = array( 'test_form' => false );

        $movefile = wp_handle_upload( $file, $overrides );
        global $wpdb;
        $wpdb->insert('wp_price_list',['title' => $movefile['url']]);

        if ( $movefile ) {
           echo ($movefile{'url'});
           die();
        } else {
            echo "Возможны атаки при загрузке файла!\n";
            die();
        }
    }


}

add_action('wp_ajax_full_price_list', 'full_price_list_callback');

function full_price_list_callback(){

    global $wpdb;

   $res =  $wpdb->get_results("SELECT `id`, `title`, `col2`,`col3`,`col4`,`col5` FROM `wp_price_list`",ARRAY_A);

    echo json_encode($res);
    die();
    

}

