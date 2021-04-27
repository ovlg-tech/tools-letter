
$(function () {
    var letterLayout = $('[data-layout]');
    var file = 'layout/' + letterLayout.data('layout') + '.html';
    letterLayout.load(file);

    console.log(letterLayout.data('content-file'));

    setTimeout(function () {
        var includes = $('[data-include]')
        $.each(includes, function () {
            var file = 'layout/' + $(this).data('include') + '.html';
            $(this).load(file);
        })

        var letterContentFile = 'data/letters/' + letterLayout.data('content-file') + '.html';
        $('[letter-include-file]').load(letterContentFile);

        $('[letter-title]').html(letterLayout.data('title'));

        setTimeout(function () {
            $('[letter-breadcrumb]').html(letterLayout.data('breadcrumb'));
        }, 300);

    }, 300);

})

/*
$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
        var file = 'layout/' + $(this).data('include') + '.html'
        $(this).load(file, { name: 'bill' },)
    })
})*/