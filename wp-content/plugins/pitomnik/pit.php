<?php
/*
Plugin Name: pitomnik
Plugin URI:
Description: Питомник
Version: 1.0
Author: phpner
 */

add_action( 'init', 'create_pit' );

function create_pit() {
    $arg = array(
        'labels' => array(
            'name' => 'Питомник',
            'singular_name' => 'Movie Review',
            'add_new' => false,
        ),
        'public' => true,
        'menu_position' => 15,
        'supports' => array( 'title','editor', 'thumbnail' ),
        'taxonomies' => array( '' ),
        'menu_icon' => plugins_url( 'img/pit.png', __FILE__ ),
        'has_archive' => true

    );
    register_post_type( 'pit',$arg );
}

?>