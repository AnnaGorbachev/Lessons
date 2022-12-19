// Стилизация чекбоксов и радиокнопок на CSS HTML jQuery

$(document).ready(function () {
    // CHECKBOX--если выделен то доб-ть .active
    $.each($('.checkbox'), function (index, val) {
        if ($(this).find('input').prop('checked') == true) {
            $(this).addClass('active');
        }
    });
    // событие click  на checkbox
    // если у наж-го div.checkbox есть .active то убираем активность c input и наоборот
    $(document).on('click', '.checkbox', function (event) {
        if ($(this).hasClass('active')) {
            $(this).find('input').prop('checked', false);
        } else {
            $(this).find('input').prop('checked', true);
        }
        // доб-ем или убираем .active для самого нажатого div.checkbox
        $(this).toggleClass('active');

        return false;
    })


    // RADIO BUTTONS
    // при наж на р-ку ищем родителя .radiobuttons,
    // потом ищем все р-ки в нем,уб у них .active
    // а также уб у всех input выделенное зн-е т е checked
    // и доб-ем active только нажатому эл-ту
    // и в нем ищем input и доб-ем ему checked
    $.each($('.radiobuttons__item'), function (index, val) {
        if ($(this).find('input').prop('checked') == true) {
            $(this).addClass('active');
        }
    });

    $(document).on('click', '.radiobuttons__item', function (event) {
        $(this).parents('.radiobuttons').find('.radiobuttons__item').removeClass('active');
        $(this).parents('.radiobuttons').find('.radiobuttons__item input').prop('checked', false);
        $(this).toggleClass('active');
        $(this).find('input').prop('checked', true);
        return false;
    })





});



// Генератор случайного кода цвета.???????????/
// https://prog-time.ru/generator-sluchajnogo-koda-tsveta-javascript-generator-randomnogo-tsveta/




function randColor(elem) {
    /*СОЗДАЕМ ПЕРЕМЕННЫЕ
    elem - элемент которому будем менять задний фон
    code_color - получаем элемент в который будет выводить код цвета
    r,g,b - отвечают за кодировку и вместе выводят цвет
    color - в нее записываем полную строку значения цвета
    */
    var element = document.querySelector(elem),
        code_color = document.querySelector('.code_color'),
        r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256)),
        color = '#' + r.toString(16) + g.toString(16) + b.toString(16);

    element.style.background = color;
    code_color.innerText = color;
}

