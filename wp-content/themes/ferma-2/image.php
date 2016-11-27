<?php
/**
 * The template for displaying all single posts and attachments
 * Theme Name: ferma
 * @package WordPress
 * @subpackage ferma
 * @since Twenty Fifteen 1.0
 * Author: phpner
 */
?>
<?php get_header(); // Подключаем хедер?>

get_header(); // Подключаем хедер

	print_r($imagemeta = wp_get_attachment_metadata());

echo wp_get_attachment_image( $post->ID, 'mediu' );



?> 

