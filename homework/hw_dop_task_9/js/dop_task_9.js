// задача на вывод книг
let books = [
    {author: 'Пушкин', title: 'Пир во время чумы', count: 2},
    {author: 'Толстой', title: 'Война и мир', count: 0},
    {author: 'Лермонтов', title: 'Тамань', count: 3},
    {author: 'Гончаров', title: 'Обломов', count: 10}
];


for (const elem of books) {
    let booksTable = document.getElementById('booksTable');
    let title = createElemetn('h2');
    title.innerText = `${elem.title} | ${elem.author} `;

    booksTable.append(title);
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
