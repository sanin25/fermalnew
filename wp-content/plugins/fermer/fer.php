<?php
/*
Plugin Name: fermer
Plugin URI:
Description: Добавить фермера
Version: 1.0
Author: sanin25
 */

add_action( 'init', 'create_fermer' );

function create_fermer() {
	$arg = array(
		'labels' => array(
			'name' => 'Дружный Фермер',
			'singular_name' => 'Movie Review',
			'add_new' => 'Добавить фермера',
			'add_new_item' => 'Добавление нового участника',
			'edit' => 'Edit',
			'edit_item' => 'Редактировать фермера',
			'new_item' => 'New Movie Review',
			'view' => 'View',
			'view_item' => 'Посмотреть похожие записи',
			'search_items' => 'Поиск фермера',
			'not_found' => 'Ни найден не один фермер!',
			'not_found_in_trash' => 'Нет фермера в корзине',
			'parent' => 'Parent Movie Review'
		),
		'public' => true,
		'menu_position' => 15,
		'supports' => array( 'title','editor', 'thumbnail' ),
		'taxonomies' => array( '' ),
		'menu_icon' => plugins_url( 'images/image.png', __FILE__ ),
		'has_archive' => true

	);
	register_post_type( 'fermer',$arg );
}

?>