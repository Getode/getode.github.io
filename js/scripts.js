jQuery(function($){
    $('.quest').click(function(){
        $('.quest').not(this).removeClass('active');
        $('.quest').not(this).parents('.question').find('.answer').removeClass('show');
        $(this).toggleClass('active');
        $(this).parents('.question').find('.answer').toggleClass('show');
    });
});