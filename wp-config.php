<?php

/**

 * The base configuration for WordPress

 *

 * The wp-config.php creation script uses this file during the

 * installation. You don't have to use the web site, you can

 * copy this file to "wp-config.php" and fill in the values.

 *

 * This file contains the following configurations:

 *

 * * MySQL settings

 * * Secret keys

 * * Database table prefix

 * * ABSPATH

 *

 * @link https://codex.wordpress.org/Editing_wp-config.php

 *

 * @package WordPress

 */



// ** MySQL settings - You can get this info from your web host ** //

/** The name of the database for WordPress */

define('DB_NAME', 'fermasa_wordpress');



/** MySQL database username */

define('DB_USER', 'root');



/** MySQL database password */

define('DB_PASSWORD', '');



/** MySQL hostname */

define('DB_HOST', 'localhost');



/** Database Charset to use in creating database tables. */

define('DB_CHARSET', 'utf8mb4');



/** The Database Collate type. Don't change this if in doubt. */

define('DB_COLLATE', '');



/**#@+

 * Authentication Unique Keys and Salts.

 *

 * Change these to different unique phrases!

 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}

 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.

 *

 * @since 2.6.0

 */

define('AUTH_KEY',         ':mNTjNP8dpBhrSFr:FB)@oe[[kknV)X-Py!FMKW s|]`_d{%[<YvZv:)*x^yJv(W');

define('SECURE_AUTH_KEY',  'KP:Isk&rf,SJ{yMYx~h4..<&`]++m.IU+#`*g-H&@5DF1lLPRgQ|nHj%6G-{.qI`');

define('LOGGED_IN_KEY',    'T1ot&I=F6ChV~%{bw7_S@NSFE?/o+A)|.;,MO}$lYj%|U!eS;rbv{r4Hz>*F;]Ok');

define('NONCE_KEY',        '9C+UDEbPZ_@i@UqB(,a8jLWZz|ZVJLL6|*G?)TX*x`GF00s>:DjJPSvq#v~QREH7');

define('AUTH_SALT',        'u`ry>bMrNG_gfz[!b%@g!WpJk{7WuhCLGpDz<MG~a?;&LYSXMIH/x^@_:po)^ft~');

define('SECURE_AUTH_SALT', '}Ng&wtv.BJ[/|5!_-:]lJ5.wy}!*XJxRptiu[9o{n&b%iD]lpyEHh}|yo+Gpc(<g');

define('LOGGED_IN_SALT',   '^bM>x%XMGggjAW<W[$5C7o 7R*(^(fk)lk@3D/.X$0ab}`g225cZ|~Nt7%<p N$t');

define('NONCE_SALT',       'd~WAXr@VM8w}10]q0,e+}hwk6[e^<SKA%&+7kBGSr+N?a(LsW/Z-gPcy|/?:bD[r');



/**#@-*/



/**

 * WordPress Database Table prefix.

 *

 * You can have multiple installations in one database if you give each

 * a unique prefix. Only numbers, letters, and underscores please!

 */

$table_prefix  = 'wp_';



/**

 * For developers: WordPress debugging mode.

 *

 * Change this to true to enable the display of notices during development.

 * It is strongly recommended that plugin and theme developers use WP_DEBUG

 * in their development environments.

 *

 * For information on other constants that can be used for debugging,

 * visit the Codex.

 *

 * @link https://codex.wordpress.org/Debugging_in_WordPress

 */

define('WP_DEBUG', false);



/* That's all, stop editing! Happy blogging. */



/** Absolute path to the WordPress directory. */

if ( !defined('ABSPATH') )

	define('ABSPATH', dirname(__FILE__) . '/');



/** Sets up WordPress vars and included files. */

require_once(ABSPATH . 'wp-settings.php');

