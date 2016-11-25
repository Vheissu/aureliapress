<script>
    var wpTheme = {
        api_url: '<?php echo get_site_url(); ?>/wp-json/wp/v2/',
        template_directory: '<?php echo get_template_directory_uri(); ?>/',
        nonce: '<?php echo wp_create_nonce( 'wp_rest' ); ?>',
        is_admin: '<?php echo (current_user_can('administrator')) ? true : false; ?>'
    };
</script>

<?php require get_template_directory() . "/app/index.html"; ?>
