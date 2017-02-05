$('#menu2').slicknav({
    label: '',
    duration: 1000,
    easingOpen: "easeOutBounce", //available with jQuery UI
    prependTo:'#demo2'
});



/* Masonry    */
$(document).ready(function(){
    $('#masonry').masonry({
// указываем элемент-контейнер в котором расположены блоки для динамической верстки
        itemSelector: '.blog-item',
// указываем класс элемента являющегося блоком в нашей сетке
        singleMode: true,
// true - если у вас все блоки одинаковой ширины
        isResizable: true,
// перестраивает блоки при изменении размеров окна
        isAnimated: true,
// анимируем перестроение блоков
        animationOptions: {
            queue: false,
            duration: 500
        }
// опции анимации - очередь и продолжительность анимации
    });
});