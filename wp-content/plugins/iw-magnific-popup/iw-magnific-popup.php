<?php
/*
Plugin Name: IW Magnific Popup
Plugin URI: https://github.com/huwrowlands/IW-Magnific-Popup
Description: A plugin to include the Magnific Popup lightbox for single & gallery images in WordPress.
Author: Huw Rowlands
Author URI: http://www.inspiredworx.com
Version: 1.3.1.1
*/

/*******************
	Global Variables
*******************/

$iwmp_prefix = "iwmp_"; // Declare the prefix name. (This helps to stop function name conflicts with other plugins.)
$iwmp_plugin_name = "IW Magnific Popup"; // Plugin name.
$iwmp_options = array();

/*******************
	Includes
*******************/
include('includes/wp-gallery-shortcode-override.php'); // Customise the native WordPress gallery shortcode, to add our custom class to the HTML.
include('includes/plugin-settings-page.php'); // Settings Page
include('includes/conditionals.php'); // Load conditionals

?>