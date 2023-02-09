<?php get_header(); ?>
<?php
  $TEMPLATE_URI = get_template_directory_uri();
  $TEMPLATE_RELATIVE_PATH = parse_url($TEMPLATE_URI, PHP_URL_PATH);
?>



<?php
get_footer();