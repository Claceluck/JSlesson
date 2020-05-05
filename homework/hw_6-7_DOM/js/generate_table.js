let articles = [
    {
        id: 1,
        title: "JS",
        text: "Статья про JS",
        author: "Александр"
    },
    {
        id: 2,
        title: "PHP",
        text: "Статья про PHP",
        author: "Виталий"
    },
    {
        id: 3,
        title: "Базы Данных",
        text: "Статья про Базы Данных",
        author: "Евгения"
    },
    {
        id: 4,
        title: "HTML",
        text: "Статья про HTML",
        author: "Виталий"
    }
];

let goods = [
    {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    {
        title: "Флейта",
        price: 900,
        count: 50
    },
    {
        title: "Арфа",
        price: 3400,
        count: 5
    }
];

function generateTable(arr) {
    let tableArea = document.getElementById('table'); // выделяем обаласть под создание таблици 
    let table = document.createElement('table'); // создаём таблицу
    table.classList.add('table'); // добавляем класс (который уже есть в css)
    let caption = table.createCaption(); // создаём заголовок
    caption.innerText =  'Товары'; // даём название заголовку
    let cell;
    let row = table.insertRow(0); // создаём строки таблицы
    for (let el in arr[0]) {
        cell = row.insertCell(0); // создаём ячейки таблицы 
        cell.innerText = el;
    }
    for (let el of arr){ 
        row = table.insertRow(-1); // создаём строки 
        for (let el1 in el) {
            cell = row.insertCell(0); // создаём ряды
            cell.innerText=el[el1]; // подписываем элементы
        }
    }
    tableArea.append(table); // добавляем всё в директорию table
}
generateTable(goods);
generateTable(articles);






// примеры вызова функции:
// generateTable(articles); // генерация таблицы со статьями
// generateTable(goods); // генерация таблицы с товарами