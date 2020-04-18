// DOM - Document Object Model - объектная модель документа.
// Согласно этой модели каждый html элемент является объектом.
// Элементы, которые расположены радом - соседние элементы.
// Вложенные элементы являются детьми родительских элементов.

console.log(document); // весь HTML документ
console.log(document.body); // body

let list = document.getElementById("list"); //  получение объектов по id
console.log(document.getElementById("list")); // вывели в консоль элемент по id 

// перемещение по DOM дереву
console.log(list.childNodes); // все узлы
console.log(list.children); // все узлы теги
// элементы расположены по индексам

// перебор DOM коллекций
for (let elem of list.children) {
    console.log(elem);
}
// для преребора лучше использовать цикл for of

console.log(list.firstChild); // первый дочерний узел
console.log(list.lastChild);// последний дочерний узел

console.log(list.firstElementChild);// первый дочерний узел тег
console.log(list.lastElementChild);// последний дочерний узел тег

console.log(list.previousSibling); // предыдущий соседний узел
console.log(list.nextSibling);// следующий соседний узел

console.log(list.previousElementSibling);// предыдущий соседний узел-тег
console.log(list.nextElementSibling);// следующий соседний узел-тег

console.log(list.parentNode); // родительский узел
console.log(list.parentElement); // родительский узел-тег

// поиск элементов в DOM дереве
// 1. по id
list = document.getElementById("list");
console.log(document.getElementById("list"));
// если несколько элементов с одинаковым id то метод вернет первый попавшийся

// 2. по значению атрибута name
let elemsByName = document.getElementsByName("data"); // этот методо всегда возвращает список 
console.log(elemsByName);

// 3. по имени тега
let elemsByTag = document.getElementsByTagName("li");
console.log(elemsByTag);
// 4. по имени css класса
let elemsByClassName = document.getElementsByClassName("orange-border");
console.log(elemsByClassName);
// 5. по css селектору
// указываем так как указано в css
let elemByCSS = document.querySelector("ul>li"); // возвращает один самый первый найденный элемент
console.log(elemByCSS); 
let elemsByCSS = document.querySelectorAll("input[type=text]"); // возвращает несколько элементов
console.log(elemsByCSS);

// создание элементов
let div = document.createElement("div"); // элемент создан, но в html его пока нет

// работа с атрибутами
div.setAttribute("id", "container"); // установили атрибут id со значением container для созданного элемента
// <div id="container"></div>
console.log(div.hasAttribute("id")); // проверяет наличие атрибута
console.log(div.getAttribute("id")); // вызвращает значение атрибута по id
div.removeAttribute("id"); // удаление атрибута
console.log(div.hasAttribute("id")); // проверяет наличие атрибута

// // атрибут style // cssText  позволяет написать несколько свойств в аотрибут style
div.style.cssText = ` 
    width: 500px;
    height: 1000px;
`;

div.style.background = "yellow";
console.log(div.style.background);

// // получить все стили элемента
let listStyles = getComputedStyle(list);
// console.log(listStyles);
console.log(listStyles.background);
console.log(listStyles.marginTop);

// работа с классами что бы работат ь классами они должны быть созданы в css, JS не имеет доступа к css файлами
div.classList.add("orange-border");
// <div id="container" class="class-name"></div>
div.classList.remove("orange-border");
// <div id="container"></div>
div.classList.toggle("orange-border"); // добавить / удалить / хороший метод 
div.classList.contains("orange-border"); // прверка наличия

// добавление элементов (в HTML)
// elem.append(...other_elem) создают вложенные элементы
// elem.prepend(...other_elem) создают вложенные элементы
// elem.before(...other_elem) создают соседние элементы
// elem.after(...other_elem) создают соседние элементы

// elem.replaceWith(...other_elem) замена
// elem.remove() удаление
// elem.clone() копирование

for (let i = 0; i < 5; i++) {
    let p = document.createElement("p"); // создали элемент p
    // p.textContent доступ к тексту за вычетом всех тегов
    console.log(p.textContent);
    // p.textContent = `Текстовый абзац ${i}`; // добавили текст
    p.innerText = `Текстовый абзац ${i}`;
    // <p>`Текстовый абзац ${i}` </p>
    p.classList.add("border"); // добавили класс
    div.append(p); // элемент p добавили в элемент div, который был создан ранее
}

// document.body.prepend(div); // элемент div , который был создан ранее добавили первым в body

// // работа с таблицами
// let tableArea = document.getElementById("users-block");
// let table = document.createElement("table");
// table.setAttribute("border", 1);

// // заголовок
// let caption = table.createCaption();
// caption.innerText = "Заголовок таблицы";

// // ряд
// let row = table.insertRow(0);

// // ячейки
// let cell1 = row.insertCell(0);
// let cell2 = row.insertCell(1);

// cell1.innerText = "Cell 1";
// cell2.innerText = "Cell 2";

// tableArea.append(table);