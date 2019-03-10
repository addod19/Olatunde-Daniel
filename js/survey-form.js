$(function() {
    $('input[type="checkbox"]').on('click', function() {
        var values = [];
        $('input:checked').each(function() {
            values.push($(this).parent().text());
        });
        $('[name="'+$(this).attr("data-input")+'"]').attr({value: values.join(', ')});
    });
});
