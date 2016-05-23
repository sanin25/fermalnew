<?php
/**
 * Шаблон made fermerjeck
  * https://github.com/fermerjeck
 * @package WordPress
 * @subpackage fermerjeck
 */
get_header(); // Подключаем хедер
	print_r($imagemeta = wp_get_attachment_metadata());
echo wp_get_attachment_image( $post->ID, 'mediu' );

?> 
