function range(start,end,step=1) {
    let arrRange =[]; // создавайте массивы которые нужны для функции внутри функции
    for(let i=start;i<=end;i+=step){ 
        arrRange.push(i); 
    }
    return arrRange;
}
let arr1=range(1,29,5);
console.log(arr1);

// TODO: именнованные  фунцкцию мы можем  вызывать в любом месте функции по их имени 

// АНАНИМНЫЕ ФУНКЦИИ

// анонисные функции присваеваются переменной
// могут быть вызваны только после объявления переменной

let a = 90;
let b= 12;

let subNums = function (num1, num2 ){
    return num1 - num2;

} ; // нужны кавычки

// вызов анонимной функции

let res = subNums(a, b);
console.log("res = " + res);

// стрелочные функции 
// не имеют arguments, не имеют своего this
// в () аргументы функции

// если аргумент 1, круглые скобки можно опустить 

let sqrt = x => x * x;

// если аргументы не передаются или их больше 1, круглые скобки обязательны

let giveFive = () => 5;
// после перечисленйи аргументов всегда идёт стрелка =>
// если инструкция одна то тело пишеться без фигурных скобок
// если инструкций боольше одной то с фигруными скобкаи {}

subNums = (num1, num2) => num1 - num2; // одна инструкция , тут уже есть return он здесь по умолчанию 

subNums = (num1, num2) => { // несколько инструкций 
    let res = 0;
    if(num1 < num2 ) res = num2 - num1;
    else res = num1 - num2;
    return res; // обязательно явно указывать return, если нужно вернуть результат её работы
}

// фунцкиия принимает на вход один аргумент, если он >= 0, увеличивает его на 10, в противном случае уменьшает на 10. 

// let strelka = x => (x>=0) ? x += 10 : x -= 10; более продвинутый вариант


subNums = (x) => {
    let res = 0;
    if ( x >= 0 ) res = x + 10;
    else if (x < 0 ) res = x - 10;
    return res;
};

console.log(subNums(-1));

// написать функцию, которая принимает на вход функцию или массив и обрабатывает каждый элемент массива переданой функцией 
// функция должна создовать новый массив на основе переданного

// CAllBACk функции!

function arrFunc(func, someArr) {
    let localArr = [];
    for (let i = 0; i < someArr.length; i++ )
    localArr[i] = func(someArr[i]); // вызов функции
    return localArr;
}
let arr = [2, 3, 0];
sqrt = num => num * num;

res = arrFunc(sqrt, arr);
console.log(res);

res = arrFunc(subNums, arr);
console.log(res); 

//  методы работы с массивами 


arr = [12, -34, 0, 44, 33, -10];
// forEach - позволяет изменять элементы массива

arr.forEach(function (elem, index, array) {
    // 1м аргументом передаёться значение элемента 
    // 2м аргументом передаёться индекс элемента 
    // 3м аргументом передаёться массив
    console.log(`Элемент № ${index} = ${elem}`);
    array[index] *= 2; // для изменения элементов массивов, обращаемся к элементу по индексу
});

for(let i = 0; i < arr.length; i++){
    console.log(`Элемент № ${i} = ${arr[i]}`); 
}

// метод filter() - возвращает новый массив, состоящий из элементов , прошедших проверку переданной функцией

arr = [12, -34, 0, 44, 33, -10];
let lessZero = (elem, index, array) => elem < 0; // функция проверяет элементы массива
let newArr = arr.filter(lessZero); // собирает новый массив с ппомощью проверки функции 
console.log(newArr);

arr = [12, -34, 0, 44, 33, -10];
lessZero = (elem, index, array) => elem < 0;

// аналогично методу filter()
let newArr1 = [];
for (let i = 0; i < arr.length; i++) {
    if (lessZero(arr[i],i,arr)){ 
        newArr1.push(arr[i]); 
    } 
};
console.log (newArr1);

// метод map() возвращает новый массив, состоящий из элементов , преобразованных переданной функцией 

arr = [12, -34, 0, 44, 33, -10];
sqrt = (elem, index, array) => elem * elem;
newArr = arr.map(sqrt);
console.log(newArr);
// аналогично записи
for (let i = 0; i < arr.length; i++) {
    newArr.push(sqrt(arr[i], i, arr)); 
}


// метод some() возращает true или false
// true , если хотя бы один элемент соответсвует условию 
arr = [12, -34, 0, 44, 33, -10];
lessZero = (elem, index, array) => elem < 0;
res = arr.some(lessZero);
console.log("some() res = " + res); ;// true

// метод every() возращает true или false
// true, если все элементы соответсвуют условию
arr = [12, -34, 0, 44, 33, -10];
lessZero = (elem, index, array) => elem < 0;
res = arr.every(lessZero);
console.log("every() res = " + res); // false 


//TODO: каждый элемент вложенного массива больше 0?
//TODO: каждый элемент вложенного массива увеличить на 2
arr = [
    [1, 3, 4],
    [3, 7, 9],
    [-90, 12, -12]
];

lessZero = (elem, index, array) => {
    console.log(elem);
    return elem < 0;
}
res = arr.every(lessZero);
console.log("every() res = " + res); // false 

// возраст всех пользователей больше или равен 18
arr = [
    {
        name: 'qwe',
        age: 19
    },
    {

    }
]
//TODO: Продолжение на githube



//

let mouse = {
    name: "Jerry",
    speed: 28,
    printInfo: function () {
        console.log(`Имя - ${this.name}`);
        console.log(`Скорость - ${this.speed}`);
    },
    changeName: function (newName) {
        this.name = newName; // переопределилил значение свойства name
    }
};
mouse.printInfo();

let cat = {         
    name: "Tom",
    cplor: "gray",
    speed: 23,
    mouse: [],
    cathcMouse: function (someMouse) { // метод объекта
        // this (Контекст вызова) если мы находимся в рамках текущего объекта мы можем обращаться к свойствам объекта через this
        if (this.speed < someMouse.speed) {
            console.log(`${someMouse.name} сбежала от ${this.name} `); 
            return;
        }
        this.mouse.push(someMouse);
        console.log(`${this.name} поймал ${someMouse}`)
    }
};
// вызов метода catchMouse объекта cat

cat.cathcMouse(mouse);
mouse.changeName("Вася");
console.log(mouse);

