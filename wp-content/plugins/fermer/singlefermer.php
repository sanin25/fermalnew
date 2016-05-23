<?php
/*
Template Name: Мой шаблон страницы
*/
$mypost = array( 'post_type' => 'fermer', );
$loop = new WP_Query( $mypost );
?>
<ul>
			  <?php while ( $loop->have_posts() ) : $loop->the_post();?>
    <li class="active"><a href="#<?php the_ID(); ?>"><?php the_post_thumbnail(array(300,200));?></a></a></li>

    <?php $idp[get_the_ID()] =  get_the_content(); ?>

<?php endwhile; ?>
</ul>