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

<div class="bottommenu clearfix">
    <div class="footermob">
        <button class="spans">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>
    <div class="footer">
	<div class="menu">
        <p>Меню</p>
	<?php wp_nav_menu($args);?>
	</div>
	<div class="right">
		<div class="contactfotter clearfix">
		<p>Контакты</p>
		<br>
            <div class="tel">
		<span>+38-067-600-10-66</span>
            <br>
		<span>+38-099-759-93-94</span>
            </div>
            <div class="sety">
                <ul id="">
                    <div class="socseti">
                        <a href="http://ok.ru/profile/577599209772"  id="ok" target="_blank" id="ok">
                            <li>
                                <i class="fa fa-odnoklassniki fa-2x fa-spin "></i>
                            </li>
                        </a>
                        <a href="http://vk.com/id24463375" target="_blank" >
                            <li id="vk">
                                <i class="fa fa-vk fa-2x"></i>
                            </li>
                        </a>
                        <a href="http://vk.com/id24463375" target="_blank" >

                            <li id="fecbook">

                                <i class="fa fa-facebook-official fa-2x"></i>

                            </li>
                        </a>
                    </div>

                </ul>
            </div>
		</div>
	</div>
    </div>
    <div id="pawerby"> <span style="color: #000;">power by:</span> phpner@gmail.com</div>
</div>
</body>
</html>