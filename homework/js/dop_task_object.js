/*
Задача 1
Даны переменные from и to, значения переменных вводит пользователь через prompt.
Пользователь должен вводить числа.
Но если пользователь вводит не числа, его нужно попросить повторить ввод, пользователь может ввести exit для выхода.
На основе объекта goods создать новый объект с товарами,
цены которых лежат в диапазоне от значения from до значения to*/

/*
Задача 2
Даны 2 переменные title и countToCart (значения переменных вводит пользователь через prompt).
Необходимо найти товар с указанным названием (title):
если количество позволяет, то уменьшить количество товара в объекте goods на countToCart,
если не позволяет, то вывести информацию об этом в консоль
 */

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
Задача 3
Дана переменная author (значение переменной вводит пользователь через prompt).
На основе массива books создать новый массив, в который войдут все книги указанного автора,
если такого автора нет, вывести информацию в консоль
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
author=author.trim();
let searhBook = [];
i=0;
let j=false;
for(let el of books){
    if(el.author === author){
        searhBook[i]=el;
        i++;
        j=true;
    }
}
if(j){console.log(searhBook);}
else console.log('Книг данного автора нет..');