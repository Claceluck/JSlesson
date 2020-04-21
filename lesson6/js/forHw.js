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

//  генерация таблицы со статьями

function generateTable (articlesData, articlesElem) {
    for ( let item in articlesData) {

        let table = document.createElement("div"); // создаю div
        table.classList.add("table"); // добавили класс table

        let id = document.createElement("h2"); 
        id.innerText = articlesData[item].id;

        let title = document.createElement("h3");
        title.innerText = articlesData[item].title;

        let text = document.createElement("p");
        text.innerText = articlesData[item].text;

        let author = document.createElement("h4");
        author.innerText = articlesData[item].author;

        table.append(id, title, text, author);

        articlesElem.append(table);
    }
}

let section = document.querySelector(".articles");
generateTable(articles, section);





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

// генерация таблицы с товарами

function generateGoods (goodsData, goodsElem) {
    for ( let item in goodsData) {

        let table = document.createElement("div"); // создаю div
        table.classList.add("table"); // добавили класс table

        let title = document.createElement("h2");
        title.innerText = goodsData[item].title;

        let price = document.createElement("p");
        price.innerText = `Цена: ${goodsData[item].price}`;

        let count = document.createElement("h4");
        count.innerText = goodsData[item].count;

        table.append(title, price, count);

        goodsElem.append(table);
    }
}

let span = document.querySelector(".goodsTable");
generateGoods(goods, span);

//  Не особо похоже на таблицы... но я исправлю) 
// пока просто по примеру делал.
