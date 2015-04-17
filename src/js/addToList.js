$(document).ready(function(){
    $(document).on('click', '.y_addTolistHandle', function(e){

        e.preventDefault();
        $(e.currentTarget).parents('.y_addToListContainer').find('.panel-heading').toggleClass('active')

    });
});
