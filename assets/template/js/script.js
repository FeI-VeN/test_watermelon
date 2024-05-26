$(document).ready(function(){
    $('body').on('click', '.btn-test', function () {
        var btn = $(this),
            info = btn.attr('data-info');

        var params = new FormData();
        params.append('action', 'test');
        params.append('info', info);

        btn.addClass('disabled').html('Выполняю...');
        $.ajax({
            url: 'https://fei-ven.github.io/test_watermelon/core/snippets/ajax.php',
            type: 'POST',
            data: params,
            cache: false,
            dataType: 'json',
            processData: false,
            contentType: false,
        }).done(function (a) {
            if(a.status === 'success'){
                btn.removeClass('disabled').html('Выпонить');
                btn.closest('body').find('h1').text(a.info_text);
            } else {
                alert(a.text);
            }
        });
        return false;
    });
});