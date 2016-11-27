<?php
/*
Plugin Name: LiveOnFarm
Plugin URI:
Description: LiveOnFarm
Version: 1.0
Author: phpner
 */

add_action( 'init', 'liveonfarm' );

function liveonfarm() {
    $arg = array(
        'labels' => array(
            'name' => 'Жизнь на Ферме',
            'singular_name' => 'Movie Review',
            'add_new' => 'Добавить',
        ),
        'public' => true,
        'menu_position' => 18,
        'supports' => array( 'title','editor', 'thumbnail' ),
        'taxonomies' => array( '' ),
        'menu_icon' => plugins_url( 'img/img.png', __FILE__ ),
        'has_archive' => true

    );
    register_post_type( 'liveonfarm',$arg );
}

?>