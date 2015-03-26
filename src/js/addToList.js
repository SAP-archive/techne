$(document).ready(function(){
    $(document).on('click', '.y_addTolistHandle', function(e){

        e.preventDefault();
        $(e.currentTarget).parents('.y_addToListContainer').find('.y_content').toggleClass('active');

        $(e.currentTarget).toggleClass('active')

    });
});
