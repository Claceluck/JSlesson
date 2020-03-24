// Задача 1 if else

let sum = 3378;

if ( sum > 0 && sum < 1000) {
    console.log ("Скидка не предусмотрена");
} else if (sum >= 1000 && sum < 2000) {
    console.log( sum= sum - sum*0.05, "Скидка 5%");
} else if (sum >= 2000 && sum < 3000) {
    console.log( sum= sum - sum*0.10, "Скидка 10%");
} else if (sum >= 3000 ) {
    console.log( sum= sum - sum*0.10, "Скидка 10% + подарок");
};

// Задача switch 2 

let mount = "август";

switch (mount) {
    case "декабрь":
    case "январь":
    case "февраль":
    console.log ("Зима");
    break;
    case "март":
    case "апрель":
    case "май":
    console.log ("весна");
    break;
    case "июнь":
    case "июль":
    case "август":
    console.log ("лето");
    break;
    case "сентябрь":
    case "октябрь":
    case "ноябрь":
    console.log ("осень");
    break;
    default: console.log ("Введите месяц")
};

// Задача 3 на циклы  (я бы ещё поразмышлял тут...)


let max = 7;
let min = 1;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let num = getRandomIntInclusive(min, max);
console.log(num);

let key = null;

while (key !== num ) { 

    key = prompt("Угадайте число от 1 до 7");

    if ( key == 0) {
        console.log ("Выход");
        break;
    }
   if ( key  < num) {
       console.log ("Загаданное число больше");
       continue;
   }
    if (key  > num ) {
        console.log ("Загаданное число меньше");
        continue;
    }
    if ( key == num ) {
        console.log ("Вы угадали");
        break;
    }
    
}


// Задача 4  ( я бы ещё поразмышлял тут...)

let numbers = [1, 5, 3, 4, 3, 8, 2, 4, 0];

console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) { // let j = i + 1;
        if (numbers[i] + numbers[j] === 7 ) {
            console.log(" Пара чисел сумма которых равна 7: " + numbers[i] + "(индекс)" + [i] + " и " + numbers[j] + "(индекс)" + [j] );
        break;
        }
    }
}