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
    countForm.setAttribute('type', 'text');
    countForm.setAttribute('placeholder', 'Введите колличество');
    countForm.setAttribute( 'value','0');
    

    let minus = document.createElement('input');
    minus.setAttribute('type', 'button');
    minus.setAttribute('value', '-');

    let plus = document.createElement('input');
    plus.setAttribute('type', 'button');
    plus.setAttribute('value', '+');
    plus.addEventListener('click', countPlus);


    function countPlus(book, event) { // пока не получилось сделать увеличение на 1...
        console.log('ааа на меня нажали')
        console.log(countForm.value);
      if(countForm.value >= 0){
        countForm.value.innerText = +countForm.value.innerText + 1
      }

    }

    if(elem.count === 0) {
        minus.setAttribute('disabled','')
    }

    if(countForm.value > elem.count) {
        countForm.setAttribute('value', 'disabled' )
    }

    let maxCount = document.createElement('p');
    maxCount.setAttribute("id", "maxCount");
    maxCount.innerText= `Всего на складе ${elem.count}`;

    form.append(minus,countForm, plus);
    booksTable.append(title, author, form, maxCount);

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

console.log(objFromJson);

function infoCats(objFromJson){
    let infoCats = document.getElementById("infoCats");
    infoCats.classList.add("grid");
    for(let elem of objFromJson){
        console.log(elem);

        let divCat = document.createElement("div");
        divCat.classList.add("grid");
        divCat.style.cssText = 
        `
        border: 1px solid orange;
        border-radius: 8px;
        `;
        let name = document.createElement("h3");
        name.innerText = `Имя ${elem.name} | Возраст ${elem.age}`
        let color = document.createElement("h4");
        color.innerText = `Цвет: ${elem.color}`;

        let documents = document.createElement('p');
        let vaccination = document.createElement('p');
        vaccination.innerText = elem.additional_info.vaccinations?' Прививки: Да' : ' Прививки: Нет';
        documents.innerText = elem.additional_info.passport? ' Паспорт: Да' : ' Паспорт: Нет';
        
        let imgDiv = document.createElement("div");
        imgDiv.classList.add("grid");
        let img = document.createElement("img");
        img.setAttribute('src', 'https://picsum.photos/180');
        img.classList.add("img");
        
        imgDiv.append(img);

    
        divCat.append(name, color, documents, vaccination);
        infoCats.append(divCat, imgDiv);
    }
}
infoCats(objFromJson);