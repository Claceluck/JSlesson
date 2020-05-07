// Библиотека jQuery - набор методов для работы с DOM деревом.
// Для того, чтобы иметь возможность использовать
// набор методов библиотеки html элемент в первую очередь
// необходимо преобразовать в jQuery объект.
// htmlEelement -> jQuery(htmlEelement)
// document.body - не доступны методы jQuery
// jQuery(document.body) - доступны методы jQuery
jQuery(document).ready(function () {  /* код */ });

jQuery(function () {
    // для получения jQuery объекта в jQuery()
    // необходиом передать либо html элемент
    // либо css селектор
    jQuery('*'); // все элементы
    jQuery('p'); // все теги p
    jQuery('.some-class'); // все элементы с классом .some-class
    jQuery('#some_id'); // элемент с id=some_id
    jQuery('ul > li'); // все li в ul (дочерний селектор)
    jQuery('.border', '#btn', 'h2'); // все элементы в классом
    // border + элемент с id=btn + все теги h2

    let elem = document.getElementById('animation');
    jQuery(elem); // преобразование html элемента в jQuery объект

    // jQuery(elem) аналогично $(elem)

    // методы jQuery делятся на те,
    // что возвращают преобразованный jQuery объект и
    // те, что возвращают какую-то информацию / ничего не возвращают

    /*jQuery(селектор)
        .someMethod1()
        .someMethod2()
        .someMethod3()
        .someMethod4();

    let text = jQuery(селектор).text();*/

    // нечетные tr, кроме первого
    jQuery("#table tr:even")
        .not("#table tr:first-child") // исключение по селектору 
        .css('background', 'orange'); // добавление стилей 
    jQuery("#table tr:odd")
        .css('background', 'yellow');
    jQuery("table tr:first-child")
        .css('background', 'red');


    // атрибуты

    let table = jQuery('#table'); // если идёт обращение к одному и тому же элементу необходимо добавить его в переменную, что бы каждый раз не вызывать поиск

    // атрибуту c id #table  добавить атрибут id = 1
    table.attr('some-attr', 1); 

    console.log(table);
    // удаляет атрибут
    table.removeAttr('some-attr');
    table.attr('border', 1);


    let cardsDiv = jQuery('#cards div'); // все div из элемента id=cards
    // метод last возвращает последний элемент из набора  
    cardsDiv.last()
        .css('border-bottom', '1px solid black')
        .end() // вернёт нас к cardsDiv 
        .first() // вернёт первый элемент из набора 
        .css('border-top', '1px solid black')

        // // обработчик событий 
        cardsDiv.on('click', function(){
            // this -> div #cards - элемент html!!!
            console.log(this); // jQuery объект 
            // установить текст элементу
            jQuery(this).text(this.dataset.present.toUpperCase());
            //возвращает текст
            console.log(jQuery(this).text());

            if(jQuery(this).data('present')=== 'pig'){
                jQuery(this).css('background', 'pink');
            } else {
                jQuery(this).css('background', 'yellowgreen')
            }

            // удалили обработчики с каждого дива в коллекции
            cardsDiv.off();

        });

        jQuery('#cards_info').one('click', function (){
           console.log('one click on #cards_info'); 
           cardsDiv.each((index, elem)=>{
                if(jQuery(elem).text() !== 'Подарок'){
                    jQuery('#cards_info h5')
                        .after(`<p> Ваш подарок ${jQuery(elem).data('present').toUpperCase()}</p>`);
                }  else {
                    jQuery(this).append(`<p> Вы могли бы получить ${jQuery(elem).data('present').toUpperCase()}</p>`);
                }
           })
        });

        let info = jQuery('#info');
        // все p внутри элемента с id = info
        let infoP =info.find('p');
        infoP.css({
            color: '#082567',
            fontStyle: 'italic' // fontStyle в место font-style
        });
        info.find('h2').css('color', function(ind, oldVal){
            if (oldVal === 'rgb(0, 0, 0)') return '#ed9121';
        });
        // высота и ширина
        let colorDiv = jQuery('#color_div');
        colorDiv.css('background', 'yellow')
            .width('100%') // установили ширину
            .height('12.5em'); // установили высоту
            console.log(colorDiv.height());
            console.log(colorDiv.width());

        jQuery('#info h2').click(function(){
            jQuery(this).siblings().toggle('slow', ()=> {
                console.log('toggle finished');
                if(this.display){
                        colorDiv.html(`<h2>Вы открыли ${$(this).text()}</h2>`) 
                    } else {
                        colorDiv.html(`<h2>Вы закрыли ${$(this).text()}</h2>`) 
                    }
                    this.display = !this.display;
            })
        // jQuery(this).siblings().hide();// скрытие 
        // jQuery(this).siblings().show(); // открытие
        });
        // li в nav, внутри которых есть элементы с классом .submenu
        let liWithSubmenu = jQuery('nav li').has('.submenu');
        liWithSubmenu.find('ul').hide();
        liWithSubmenu.on('click', function(){
            jQuery(this).children().toggle();
        });

        let animationP = jQuery('#animation p');
        let change = jQuery('#change');

    animationP.first().click(function(){
        change.animate({
            fontSize: '+=16px'
        }, 1000, function (){});
    animationP.last().click(function(){
        change.animate({
            fontSize: '-=16px'
        }, 1000, function (){});
    })
})
});