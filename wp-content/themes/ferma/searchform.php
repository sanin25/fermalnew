<?php/**
 * Шаблон made fermerjeck
 * https://github.com/fermerjeck
 * @package WordPress
 * @subpackage fermerjeck
 */
?>

<form role="search" method="get" id="searchform" action="<?php echo home_url( '/' ) ?>" >
    <!--<label class="screen-reader-text" for="s">Поиск </label>-->
    <input type="text" placeholder="Enter" value="<?php echo get_search_query() ?>" name="s" id="formainput" />
    <!--<input type="submit" id="searchsubmit" value="найти" />-->
</form>
