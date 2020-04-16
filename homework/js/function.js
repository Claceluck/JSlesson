// Домашнее задание к занятиям 4 / 5

// Дано натуральное число N. Вычислите сумму его цифр, используя рекурсию (строки, массивы и циклы использовать запрещено).

let n = 223;
let sum;

function sum_n(num) {
    
    sum_n
}
sum_n(n);

// пока не понятно...


// Написать функцию проверки на спам. Функция принимает на вход текст и спам - слова. Определить по 5ти бальной шкале, насколько часто в тексте встречается спам. Результат вернуть из функции

let text = 'Ничего про спам не слышно, что такое вообще СпАм, и кому придёт в голову искать СПАМ.. спам, СПАМ, спам! Казино ВУЛКАН!';
let spam = 'спам';

function spamTest(text, spamWord) {
    let lowerText = text.toLowerCase();
    console.log(lowerText);
    if (lowerText.includes('спам') && lowerText.includes('Казино ВУЛКАН') ) {
        return console.log('Замечен спам 5 уровень!');
    }
    if ( lowerText.includes('Казино ВУЛКАН')  || lowerText.includes('спам') ) {
        return console.log('Замечен спам 1 уровень!')
    }
}

spamTest(text, spam);

// до конца не разобрался, скорее всего тут что то с количеством вхождений в строку

// Напишите функцию, которая в зависимости от переданного в нее целочисленного аргумента count, будет выводить слово «товар» в нужно форме («12 товаров», но «22 товара» и тд).

let count = 23;

function endingWord(count) {
    if (count <= 1) {
        return  console.log (count + ' товар');
    };
    if (count > 1 && count <= 4) {
        return console.log (count + ' товара');
    };
    if (count > 4 && count <= 20) {
        return console.log (count + ' товаров');
    };
    if (count <= 21) {
        return  console.log (count + ' товар');
    };
    if (count > 21 && count <= 24) {
        return console.log (count + ' товара');
    };
    if (count > 24 && count <= 30) {
        return console.log (count + ' товаров');
    };
    
}
endingWord(count);

// Уверен что захалтурил я здесь... 

// Напишите функцию, которая принимает на вход 3 аргумета (usersArr, from и to), где usersArr - массив пользователей, from - минимальный возраст и to - максимальный возраст (если to не задан, максимальный возраст не ограничен). Функция возвращает логины пользователей из массива usersArr, возраст которых находится в диапазоне [from; to)





// Напишите функцию, которая принимает на вход 2 обязательных аргумета (usersArr, favouriteLang), где usersArr - массив пользователей, favouriteLang - предпочитаемый язык программирования (агрумент передается строкой). Функция возвращает логины пользователей из массива usersArr, у которых в списке предпочитаемых языков есть favouriteLang

// Напишите функцию, которая принимает на вход массив и сортирует его по названию городов пользователей (от А до Я).

//  Массив пользователей (для задач 5 и 6):
//  let users = [
//      {
//          login: "qwe",
//          age: 34,
//          city: "Москва",
//          favouriteLangs: ["php", "js"]
//      },
//      {
//          login: "asd",
//          age: 23,
//          city: "Москва",
//          favouriteLangs: ["python", "javascript"]
//      },
//      {
//          login: "rty56",
//          age: 58,
//          city: "Тверь",
//          favouriteLangs: ["java", "c"]
//      },
//      {
//          login: "rty56",
//          age: 58,
//          city: "Тверь",
//          favouriteLangs: ["java", "scala"]
//      },
//      {
//          login: "ght",
//          age: 45,
//          city: "Владивосток",
//          favouriteLangs: ["php", "ruby"]
//      },
//  ];