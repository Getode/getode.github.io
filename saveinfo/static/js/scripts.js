jQuery(function($){

    $('.search_block_link').click(function(){
        $('.search_block form').toggleClass('show');
        $('.has-sub_menu a').removeClass('show');
        $('.sub_menu.full_width').removeClass('show');
    });
    
   $('.has-sub_menu').mouseenter(function(){
        $('.sub_menu.full_width').toggleClass('show');
        $(this).toggleClass('show')
        $('.search_block_link').removeClass('show');
    });
    
    $('.burger').click(function(){
        $('.top_menu>ul').toggleClass('show');
    });
    
    $('.header_info_link').click(function(){
        $('.modal_form_overflow, .modal_form').addClass('show');
    });
    $('.modal_form_overflow,.modal_close').click(function(){
        $('.modal_form_overflow, .modal_form').removeClass('show');
        $('.sub_menu.full_width').removeClass('show');
    });
});
