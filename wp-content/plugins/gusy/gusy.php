<?php
/*
Plugin Name: Gusy
Plugin URI:
Description: гуси
Version: 1.0
Author: phpner
 */

add_action( 'init', 'create_gusy' );

function create_gusy() {
    $arg = array(
        'labels' => array(
            'name'               => 'Гуси', // основное название для типа записи
            'singular_name'      => '', // название для одной записи этого типа
            'add_new'            => 'Добавить', // для добавления новой записи
            'add_new_item'       => 'Добавление в раздел гуси', // заголовка у вновь создаваемой записи в админ-панели.
            'edit_item'          => 'Редактирование', // для редактирования типа записи
            'new_item'           => 'Новое ', // текст новой записи
            'view_item'          => 'Смотреть', // для просмотра записи этого типа.
            'search_items'       => 'Искать', // для поиска по этим типам записи
            'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено
            'not_found_in_trash' => 'Не найдено в корзине',
        ),
        'public' => true,
        'menu_position' => 16,
        'supports' => array( 'title','editor', 'thumbnail','comments' ),
        'taxonomies' => array( '' ),
        'menu_icon' => plugins_url( 'img/img.png', __FILE__ ),
        'has_archive' => true
    );
    register_post_type( 'gusy',$arg );
}

?>