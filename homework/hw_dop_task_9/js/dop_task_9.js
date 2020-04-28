// задача на вывод книг
let books = [
    {author: 'Пушкин', title: 'Пир во время чумы', count: 2},
    {author: 'Толстой', title: 'Война и мир', count: 0},
    {author: 'Лермонтов', title: 'Тамань', count: 3},
    {author: 'Гончаров', title: 'Обломов', count: 10}
];

    
for(let elem of books) {

    let booksTable = document.getElementById('booksTable');

    let title = document.createElement('h3');
    title.innerText = `Название произведения: ${elem.title}`;

    let author = document.createElement('p');
    author.innerText = `Автор: ${elem.author}`;

    let form = document.createElement('form'); 
    form.setAttribute('action', '#');
    form.setAttribute('method', 'post');
    form.setAttribute('name','count');

    let countForm = document.createElement('input');
    countForm.setAttribute('type', 'number');
    countForm.setAttribute('placeholder', 'Введите колличество');
    countForm.setAttribute( 'value','0');
    

    let minus = document.createElement('input');
    minus.setAttribute('type', 'button');
    minus.setAttribute('value', '-');

    let plus = document.createElement('input');
    plus.setAttribute('type', 'button');
    plus.setAttribute('value', '+');
    plus.addEventListener('click', countPlus);

    let countInd = 0;
    function countPlus(countInd, event) {
       console.log('ааа на меня нажали!');
       countInd = countForm.value;
       console.log(countInd);
       if (countForm.value > 0) {
        countInd++;
       }
       
    }
    
    let maxCount = document.createElement('p');
    maxCount.innerText= `Всего на складе ${elem.count}`;

    form.append(minus,countForm, plus);
    booksTable.append(title, author, form, maxCount);

    if(elem.count === 0) {
        minus.setAttribute('disabled','')
    }

    if(countForm.value > elem.count) {
        countForm.setAttribute('value', 'disabled' )
    }
}


// вывести информацию о товаре
// Название
// Автор
// - 10 +
// если количество 0 -> [- 0 +] нельзя нажать на + и -
// при нажатии на + количество увеличивается (но не больше количества),
// при нажатии на - уменьшается (но не меньше 0)
// Дополнительно: можно ввести количество с клавиатуры

 

// задание на вывод данных
let jsonFromServer = `[{"name":"Люся","age":"1 год","color":"трехцветная","additional_info":{"vaccinations":true,"passport":true}},{"name":"Том","age":"3 месяца","color":"белый","additional_info":{"vaccinations":false,"passport":false}},{"name":"Макс","age":2,"color":"серый","additional_info":{"vaccinations":false,"passport":true}},{"name":"Василий","age":3,"color":"черный","additional_info":{"vaccinations":true,"passport":true}}]`;
let objFromJson = JSON.parse(jsonFromServer); // вывод информации по массиву объектов
// вывести информацию по каждой кошке
// Имя кошки | возраст
// картинка       Дополнительная информация:
//                Цвет:  цвет кошки
//                Документы: да / нет
//                Прививик: да / нет
