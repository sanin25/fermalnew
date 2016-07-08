<?php
/**
 * Шаблон made fermerjeck
 * https://github.com/fermerjeck
 * @package WordPress
 * @subpackage fermerjeck
 */

	wp_footer(); // Необходимо для нормальной работы плагинов
?>
<?php

$args = array( // Выводим верхнее меню
	'theme_location'=>'pitomnik',
	'container'=>'',
	'depth'=> 0,
	'menu_class' => "catmenu",
	'fallback_cb' => '__return_empty_string',
);
?>
<div class="bottommenu">
	<?php wp_nav_menu($args);?>
</div>
</body>
</html>