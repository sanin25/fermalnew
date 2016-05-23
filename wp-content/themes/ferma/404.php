<?php
/**
 * Шаблон made fermerjeck
 * https://github.com/fermerjeck
 * @package WordPress
 * @subpackage fermerjeck
 */
get_header(); // Подключаем хедер ?>
<?php if ( function_exists('yoast_breadcrumb') )

{yoast_breadcrumb('<p id="breadcrumbs">','</p>');} ?>
<h1>Страница не найдена</h1>
<?php get_sidebar();  // Подключаем сайдбар ?>
<?php get_footer(); // Подключаем футер ?>