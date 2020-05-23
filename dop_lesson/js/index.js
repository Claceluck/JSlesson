
// Задача 1
// Создайте функцию rgb(),
// которая будет принимать три числовых аргумента
// и возвращать строку вида rgb(34,222,115).
// Если аргументы не заданы, считать их равными нулю.
// Не проверять переменные на тип данных

function rgb (a=0, b=0, c=0) {
   return `rgb(${a},${b},${c})`; // не забывай про return если нужно что бы функция что то отдавала 
    
}

console.log(rgb(23, 56, 89));
console.log(rgb(90, 220, 111));

// аргументы не заданы

console.log(rgb());
console.log(rgb(23));
console.log(rgb(23, 56));

// Задача 2
// Создайте функцию avg(), которая принимает на вход
// переменное количество аргументов
// находит и возвращает среднее
// значение по данным аргументам
// Если занчения не переданы, считать их равными 10
// [24, 22, 12, 10] | [24] | [24, 44]

function avg(a=10, b=10, c=10, d=10) {
    return a+b+c+d /4;
}
console.log(avg(2,2,2,2));


function avg1(...nums) {
    let sum = 0;
    for(let elem of nums) {
        sum = sum + elem;
    }
    return sum / nums.length;
}
console.log(avg1(2,2,2,2));

// Задача 3

let animals = [
    {
        name: "Васька",
        age: 1,
        passport: true,
        habits: ["любит детей", "знает команды"]
    },
    {
        name: "Слава",
        age: 2,
        passport: false,
        habits: ["любит собак", "знает команды"]
    },
    {
        name: "Мурка",
        age: 1,
        passport: false,
        habits: ["дружелюбный"]
    }
];

function getNames (arr) {
    console.log('первый элемент массива', arr[0]);
    console.log('последний элемент массива', arr[arr.length - 1]);
    let names = [];
    for(let elem of arr) {
        names.push(elem.name);
    }
    return names;
}

console.log(getNames(animals));

function getAge (arr) {
    let ageSum = 0;
    for(let elem of arr) {
        ageSum = ageSum + elem.age;
    }
    return ageSum;
    
}

console.log(getAge(animals));

function getHabits(arr) {
for (let elem of arr){
    // выводим каждую привычку каждого животного 
    for( let el of elem.habits){
        console.log(el);
    }
}
return
}