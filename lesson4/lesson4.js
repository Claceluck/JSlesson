// Функции
// Небольшие программы в которых мы описываем  необходимые нам действия, которые будут выполняться каждый  раз при выхове функции
// функция это всегда объект
// функции мы используем для того что бы избежать дублирования
// функции могут быть наименованне и анонимные ( стрелочные функции) 

let a = 34;
let b = 12;
console.log(a + b);

let n = 56;
let m = 90;
console.log(n + m);

// именнованные функции 

// обяьвление функции 

function getSum(num1, num2){ // аргументы функции 
    // тело фуннкции 
    console.log( num1 + num2);
} 
// точку с запятой ставить не надо после фигурной скобки
//  если функция именованная

// вызов функции:  имя_функции (аргументы)

getSum(a, b); // значение перменной а копируеться в num1, значение переменной b скопируеться в переменную num2

getSum(n, m);// значение перменной n копируеться в num1, значение переменной m скопируеться в переменную num2

let j = 20;
let k= 0;

function getDel(num1, num2){ 
    if (num2 === 0) {
        console.log("На ноль делить нельзя!")
        return;
    } 
    console.log( num1 / num2);  
    
} 

getDel (j, k);

function sub(num1, num2,){
    console.log(num1 -num2);
    return num1 -  num2; // возврат значения из функции
}
// return прерывает работу фунции и неважно что написано после return
// return  возвращает значение из функции
// по умолчанию  (return; и без return ) функции возвращают undefined
// если из фунции необходимо вернуть несколько значений, нужно использовать массив или обьект 

let result = sub(j, k);
console.log(result);

// написать фунцкцию, которая принимает на вход имя и выводит в консоль "Добро пожаловать, имя"

let name = "Лиза"
function get_hello_name(name1 = 'Гость') { // значение аргументов по умолчанию, если при вызове нет аргумента
    // аргументы без значение по умолчанию обязательные 
    // аргументы со значением по умолчанию необязательные
    // name = name || 'Гость'; старый синтаксис 
    console.log(`Добро пожаловать, ${name1}`);
}

get_hello_name(name);
get_hello_name(); // если нет аргументов то функция вернёт  undefined

let y = 31;
let x = 4;

function getNumber (y, x){
    if (!y || !x) {
        console.log("Не введено число")
        return 
    }
    if ( typeof y !== "number" || typeof x !== "number" ) {
        console.log("Введено не число")
        return; 
    }
    if (x < y ) {
        console.log (x);
    } else if ( x > y) {
        console.log (y);
    }
}
getNumber(x, y);

// функция принимает на вход массив целых чисел, возвразает сумму

function arrSum (arr){ 
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]; 
    } return sum; 
}

let arr = [3, 7, 9, 0];
arrSum(arr);

function changeStr(str) {
    str += "продолжение строки";
}
function changeArr(arr) {
    for (let i = 0; i < arr.length; i++){
        arr[i] += 3;
    }
}

let str = "Строка";
arr = [3, 7, 9, 0];

changeStr(str);
changeArr(arr);

console.log(str);
console.log(arr);

let u = 4;
let h = u;

u = 89;

console.log(u);
console.log(h);

let someArr = [45, 78, 90];
let otherArr = someArr;

someArr[1] = 20000;

console.log(someArr);
console.log(otherArr);

// переменное количество аргументов
// оператор ... spread собирает элементы в массив

function sumNums(...nums) {
 console.log("nums", nums);
 let sum = 0;
 for (let num of nums) {
     sum += num;
 }
 console.log ("sum: ", sum);
 return;
}

sumNums (34, 78);
sumNums(34, 56, 56, 76, 74, 43, 3);

function threeSum(x1, x2, x3) {
    return  x1 + x2 + x3;
}
arr = [4, 78, 0, -10];
let resArr = threeSum(...arr);
console.log("resArr " + resArr);

function printArgs() {
    //все аргументы собираються в псевдомассив arguments
    for( let arg of arguments ) {
        console.log(arg);
    }
}

printArgs(3, null, [2, 5], 'String');

function printNums (num) {
    let i = num;
    while ( i >= 0){
        console.log(i);
        i--;
    }
}
printNums(3);

function printNums2(num){
    if (num >=0) {
        console.log(num);
        printNums2(num -1); // рекурсивный вызов функции- вызов функции внутри функции но с другоми аргументами 
    }
}
printNums2(3);

// замыкание 
function multi (n) {
    let x = n;
    return function (m) {
        return x * m;
    }
}

let multiSix = multi(6); // значение multiSix тоже функция
result = multiSix(5);
console.log(result);

result = multiSix(10);
console.log(result);


// самовызывающая функция 
(function () {
    console.log("Самовызывающая функция");
    // тело функции
}());
