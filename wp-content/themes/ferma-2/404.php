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
<?php if ( function_exists('yoast_breadcrumb') )

{yoast_breadcrumb('<p id="breadcrumbs">','</p>');} ?>
<h1>Страница не найдена</h1>
<?php get_sidebar();  // Подключаем сайдбар ?>
<?php get_footer(); // Подключаем футер ?>