let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

/*
Задача 1
Даны переменные from и to, значения переменных вводит пользователь через prompt.

Пользователь должен вводить числа.

Но если пользователь вводит не числа, его нужно попросить повторить ввод, пользователь может ввести exit для выхода.

На основе объекта goods создать новый объект с товарами,
цены которых лежат в диапазоне от значения from до значения to*/

// let from = prompt(`Введите число ОТ, для выхода наберите "exit"`);
// let to = prompt(`Введите число ДО`);

// while ((isNaN(Number(from)) && from !== 'exit')){
//         console.log(`${from} не является числом!`)
//         from = prompt(`${from} не является числом! Введите число ОТ, для выхода наберите "exit"`);
// }
// while ((isNaN(Number(to)) && to !== 'exit')){
//     console.log(`${to} не является числом!`)
//     to = prompt(`${to} не является числом! Введите число ДО, для выхода наберите "exit"`);
// }

// let sortGoods = {};

// for (let elem in goods){
//     if (goods[elem].price>=from && goods[elem].price<=to){
//         sortGoods[elem]=goods[elem];
//     }
// }
// console.log(sortGoods);




/*
Задача 2
Даны 2 переменные title и countToCart (значения переменных вводит пользователь через prompt).
Необходимо найти товар с указанным названием (title):

если количество позволяет, то уменьшить количество товара в объекте goods на countToCart,
если не позволяет, то вывести информацию об этом в консоль
 */

// let searchTitle = prompt("Введите название товара, который хотите найти");
// searchTitle = searchTitle.trim();
// let countToCart = prompt("Сколько товара вы хотите заказать? Введите значения в числовом виде!");

// for (const elem in goods) {
//     if (searchTitle === goods[elem].title) {
//     if (goods[elem].count >= countToCart) {
//          goods[elem].count -= countToCart } else {
//              console.log("На складе нет столько товара");
//             };
//     };
// }

// console.log(goods);



/*
Задача 3
Дана переменная author (значение переменной вводит пользователь через prompt).
На основе массива books создать новый массив, в который войдут все книги указанного автора,
если такого автора нет, вывести информацию в консоль
*/
/*
let i=0; и let j=false; - лишние переменные,
добавлять в массив можно используя метод push(),
а проверять, были ли найдены книги по размеру массива 
if(searhBook.length > 0){console.log(searhBook);}
*/


let books = [
    { author: 'Пушкин', title: 'Пир во время чумы'},
    { author: 'Толстой', title: 'Война и мир'},
    { author: 'Лермонтов', title: 'Тамань'},
    { author: 'Гончаров', title: 'Обломов'},
    { author: 'Лермонтов', title: 'Герой Нашего Времени'},
    { author: 'Пушкин', title: 'Руслан и Людмила'},
    { author: 'Лермонтов', title: 'И скучно, и грустно'},
];

let author = prompt('Фамилия автора');
author=author.toUpperCase();
author= author.trim();
let searhBook = [];

for(let el of books){
    if(el.author.toUpperCase() === author){
        searhBook.push(el.title);
    }
}
if(searhBook.length > 0){console.log(searhBook);}
else console.log('Книг данного автора нет..');