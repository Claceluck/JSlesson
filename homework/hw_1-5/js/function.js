// Домашнее задание к занятиям 4 / 5

// 1 Дано натуральное число N. Вычислите сумму его цифр, используя рекурсию (строки, массивы и циклы использовать запрещено).

let n = 233;
let sum;

function sumNum(x) {
    if(x<10) {
        return x;
    }
        return x%10+Math.floor(sumNum(x/10));}


console.log(sumNum(n));


// 2 Написать функцию проверки на спам. Функция принимает на вход текст и спам - слова. Определить по 5ти бальной шкале, насколько часто в тексте встречается спам. Результат вернуть из функции

let text = 'Ничего про спам не слышно, что такое вообще СпАм, и кому придёт в голову искать СПАМ.. спам, СПАМ, спам! Казино ВУЛКАН!';
let spam = 'спам';

function spamTest(text, ...spamWord) {
    let lowerText = text.toLowerCase();
    let textArr = lowerText.split(' ');
    let counter = 0;
    for (let i = 0; i < textArr.length; i++) {
        spamWord.forEach(function(element){
            if (element === textArr[i]) {
                 counter++; 
                } 
    });
    // if (lowerText.includes('спам') && lowerText.includes('Казино ВУЛКАН') ) {
    //     return console.log('Замечен спам 5 уровень!');
    // }
    // if ( lowerText.includes('Казино ВУЛКАН')  || lowerText.includes('спам') ) {
    //     return console.log('Замечен спам 1 уровень!')
    // }
}

spamTest(text, spam);

// до конца не разобрался, скорее всего тут что то с количеством вхождений в строку

// 3 Напишите функцию, которая в зависимости от переданного в нее целочисленного аргумента count, будет выводить слово «товар» в нужно форме («12 товаров», но «22 товара» и тд).

let count = 25;

function endingWord(count) {
    if((Math.floor(count%10) === 0 || Math.floor(count%10) >=5 && Math.floor(count%10) <=9 )){
        console.log(`${count} товаров`)};
    }
    if (count % 100 >= 10 && count % 100 <= 20) {
        console.log(`${count}` + " товаров")}
    else if (Math.floor(count%10) === 1) console.log(`${count} товар`);
    else console.log(`${count} товарa`);
}
endingWord(count);


// 4 Напишите функцию, которая принимает на вход 3 аргумета (usersArr, from и to), где usersArr - массив пользователей, from - минимальный возраст и to - максимальный возраст (если to не задан, максимальный возраст не ограничен). Функция возвращает логины пользователей из массива usersArr, возраст которых находится в диапазоне [from; to)

// Массив пользователей (для задач 5 и 6): использовал его и для 4 задачи

let users = [
         {
             login: "qwe",
             age: 34,
             city: "Москва",
             favouriteLangs: ["php", "js"]
         },
         {
             login: "asd",
             age: 23,
             city: "Москва",
             favouriteLangs: ["python", "javascript"]
         },
         {
             login: "rty56",
             age: 58,
             city: "Тверь",
             favouriteLangs: ["java", "c"]
         },
         {
             login: "rty56",
             age: 58,
             city: "Тверь",
             favouriteLangs: ["java", "scala"]
         },
         {
             login: "ght",
             age: 45,
             city: "Владивосток",
             favouriteLangs: ["php", "ruby"]
         },
];

function returnLogin (usersArr, from , to=1000) {
    let log = [];
    for(let elem of usersArr){
        if(elem.age >=from && elem.age<=to) {
        log.push(elem.login)
    };
}
    return log; 
}
console.log(returnLogin(users,25, 45));



// 5 Напишите функцию, которая принимает на вход 2 обязательных аргумета (usersArr, favouriteLang), где usersArr - массив пользователей, favouriteLang - предпочитаемый язык программирования (агрумент передается строкой). Функция возвращает логины пользователей из массива usersArr, у которых в списке предпочитаемых языков есть favouriteLang


function favorLang(usersArr, favouriteLang) {
    let massLog = [];
    for(let elem of usersArr){
        if(elem.favouriteLangs.includes(favouriteLang)) { 
            massLog.push(elem.login); 
        };
    }
    return massLog;
}
console.log(favorLang(users, "php"));

// 6 Напишите функцию, которая принимает на вход массив и сортирует его по названию городов пользователей (от А до Я).

// не совсем разобрался в этом задании.. хм

// function  sort_arr(arr) {
//     let sort_city = [];
//     let new_arr = [];
//     for(let elem of arr){
//         sort_city.push(elem.city);
//     }
//     sort_city.sort();
//     for(let i of sort_city){
//         for(let j of arr){
//             if(i === j.city) {
//                 new_arr.push(j);
//                 break;
//             }
//         }
//     }
//     return new_arr;

// }
// console.log(sort_arr(users));

function sortArr (first, second) {

    return first.city.localeCompare(second.city);
}
someArr.sort(sortArr);
console.log(someArr);

