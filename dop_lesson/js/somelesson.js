// Создайте функцию rgb(),
// которая будет принимать три числовых аргумента
// и возвращать строку вида rgb(34,222,115).
// Если аргументы не заданы, считать их равными нулю.
// Не проверять переменные на тип данных

function rgb(a = 0, b = 0, c = 0) {
    return `rgb(${a},${b},${c})`;
    // 'rgb(' + a + ',' + b + ',' + c + ')';
}

console.log(rgb(23, 56, 89)); // rgb(23,56,89)
console.log(rgb(90, 220, 111));
// аргументы не заданы
console.log(rgb());
console.log(rgb(122)); // rgb(122,0,0)
console.log(rgb(122, 255));

// Создайте функцию avg(), которая принимает на вход
// переменное количество аргументов
// находит и возвращает среднее
// значение по данным аргументам
// Если занчения не переданы, считать их равными 10
// [24, 22, 12, 10] | [24] | [24, 44]
function avg(...nums) {
    // for of / for (i) / for in
    let sum = 0; // 68
    for (let elem of nums) {
        sum = sum + elem;
    }
    return sum / nums.length;
}

console.log(avg(24, 22, 12, 10));
console.log(avg(24));
console.log(avg(24, 44));


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


// написать функцию,
// которая принимает на вход массив объектов
// 1. выводит первый элемент массива в консоль
// 2. выводит последний элемент массива в консоль
// 3. возвращает массив с именами всех животных
// 4. возвращает суммарный возраст всех животных
function getNames(arr) { // [0, 1, 2, 3, 4, 5, 6]
    // выводит первый элемент массива в консоль
    console.log('первый элемент массива: ', arr[0]);
    console.log('последний элемент массива: ', arr[arr.length - 1]);
    // возвращает массив с именами всех животных
    // let names = [];
    // for (let elem of arr){
    //     names.push(elem.name);
    // }
    // return names;
    // let ageSum = 0;
    for (let elem of arr) { // fori
        // ageSum = ageSum + elem.age; // 1
        // выводим каждую привычку каждого животного
        for (let el of elem.habits) {
            console.log(el);
        }
    }

    // return ageSum;
    // -----------------------------------
    let age = 0;
    for (let elem of arr) {
        age = age + elem.age;
    }
    return age;
    // -----------------------------------
    let agesum = 0;
    for (let i = 0; i < arr.length; i++) {
        agesum = agesum + arr[i].age;
        for (let j = 0; j < arr[i].habits.length; j++) {
            console.log(arr[i].habits[j]);
        }
        return agesum;
        // ----------------------------------
        let sum = 0;
        for (let elem of arr) {
            sum = sum + elem.age;
        }
        console.log(sum);
        return sum;
    }

}
    console.log(getNames(animals));

