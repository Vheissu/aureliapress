<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <base href="<?php echo get_template_directory_uri(); ?>/app/" />
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">

    <link href="<?php echo get_template_directory_uri(); ?>/app/styles/styles.css" rel="stylesheet" type="text/css" />
    <script async src="<?php echo get_template_directory_uri(); ?>/app/scripts/vendor-bundle.js" data-main="aurelia-bootstrapper"></script>

    <script>
        var wpTheme = {
            api_url: '<?php echo get_site_url(); ?>/wp-json/wp/v2/',
            template_directory: '<?php echo get_template_directory_uri(); ?>/',
            nonce: '<?php echo wp_create_nonce( 'wp_rest' ); ?>',
            is_admin: '<?php echo (current_user_can('administrator')) ? true : false; ?>'
        };
    </script>

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?> aurelia-app="main">