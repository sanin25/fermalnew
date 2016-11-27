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
<form role="search" method="get" id="searchform" action="<?php echo home_url( '/' ) ?>" >

    <!--<label class="screen-reader-text" for="s">Поиск </label>-->

    <input type="text" placeholder="Enter" value="<?php echo get_search_query() ?>" name="s" id="formainput" />

    <!--<input type="submit" id="searchsubmit" value="найти" />-->

</form>

