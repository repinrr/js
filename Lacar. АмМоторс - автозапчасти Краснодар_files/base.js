$(document).ready(function () {

    // Меню сайта
    $('.menu > li > a').addClass('link');
    $('.menu > li:last-child').addClass('last');
    $('.menu > li.active ul').show();
    $('.menu a.link').each(function () {
        if ($(this).siblings('ul').length) {
            $(this).append('<i/>')
        }
    });
    $('.menu a.link').on('click', function () {
        var animateBlock = $(this).siblings('ul');
        if (animateBlock.length) {
            var siblingsBlock = $(this).parent().siblings('li.active');
            if (!animateBlock.is(':animated')) {
                siblingsBlock.find('ul').slideUp(500);
                siblingsBlock.removeClass('active');
                $(this).parent().toggleClass('active');
                animateBlock.slideToggle(500);
            }
            return false;
        }
    });

    // Таблица зеброй
    $('table tbody td:nth-child(even)').addClass('even');
    $('table').each(function () {
        if ($('thead', this).length) {
            $('tbody tr:first-child', this).addClass('first');
        }
    });

    // Слайдер партнеров
    if ($(".slider").length) {
        $(".slider").jCarouselLite({
            btnNext: ".next",
            btnPrev: ".prev",
            visible: 6
        });
    }

    // Разная ширина селектов на странице аккаунта
    $('.selection dl:odd').addClass('even');

});

function b_alert(text, title, callback) {
    if (title == undefined)
        title = "Ошибка";
    new Messi(text, { title: title, buttons: [{id: 0, label: 'ОК', val: 'X'}], callback: callback });
}