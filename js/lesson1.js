// Многострочные коментарии */ 

// Обьявление переменных
// let book_title
// let bookTitle
let title = "Книга";
// Перераспределение переменных
title = "Журнал";
var count = 147; // устаревший способ обьявления переменных
// var  Глобальяяная область видимости
// Может быть ограничена функцией
// let область видимости ограничена блоком {}

// Отладка вывод консоль
console.log(title);
console.log(title, count);

// Значение констант нельзя изменить значение констант необходимо присваивать в момент обьявления
const VERSION_CODE = 564;
console.log(VERSION_CODE);

let message; // обьявление переменной 
// Присвоили значение переменной 
message = "Авторизация прошлауспешно";
// Переопределили значение переменной 
message = 23;

// JavaScript интопритируемый язык со слабой динамической типизацией 

// Примитивные типы данных 
// Number
let age = 57; //Целые числа 
age = 57.5 //числа с плавающей запятой 
// специальные числовые значения
// Infinity
// - Infinity
// NaN ошибка вычисления
console.log (age / 0); // infinity
console.log (-age /0); // - infinity
console.log ("Возвраст" / age); // NaN

// string(Строки) пишуться в двойный кавычках или одинарных
let auth_info = "Успешная авторизация";
let reg_info = 'Успешная регистрация';
console.log (auth_info);
console.log (reg_info);

let welcome = "Добро пожаловать в 'МАГАЗИН' ";
console.log(welcome);
welcome = "Добро пожаловать в \"МАГАЗИН\" ";
console.log(welcome);

// Логический тип данных (Boolean)
// Может принимать только два значения  true(любые числа ) and false(0 undefined пустая строка)
let stopped = true;
let isActive = false;
console.log(stopped, isActive);

// undefined значение переменной неприсвоенно (значение не дошло до переменной)
let undefinedValue;
console.log(undefinedValue);
// null - значение неизвестно 
let nullValue = null; 
console.log( nullValue);

// определение типа данных typeof
console.log(typeof age);
console.log(typeof reg_info);
console.log(typeof isActive);

// операторы 
// арифметические операторы
// + | - | * | / | %( взятие остатка от деления )
// ** возведение в степень 
// + используется для преобразования строки с числом в тип number 
let a = '5';
console.log(a, typeof a);
a = +a;
console.log(a, typeof a);

console.log(+"4 не число"); // NaN

// + используется для контактного склеивания 
auth_info = "Успешная авторизация";
reg_info = 'Успешная регистрация';
let info = auth_info + reg_info;
console.log(info);

console.log(3 + 8); // 11
console.log(3 + 8);
console.log(3 + 8);
console.log(3 + 8);
console.log(3 + 8);

// остальные арифметические операторы преобразуют операнды к числам, если преобразование невозможно то NaN
console.log('30' /'2'); // 15
console.log('30px' * 2 )//nan
console.log(30 - '2'); // 28

console.log("Проверка на Nan"); // isNaN()
console.log(isNaN("String")); // true
console.log(isNaN('123px')); // true
console.log(isNaN('123')); // false
console.log(isNaN(123)); //false
console.log(isNaN(true)); //false
console.log(isNaN(false)); // false

console.log(9 % 2);
console.log(8 % 2);
console.log(810 % 2);
console.log(546 % 10);
console.log(7 % 6);

// операторы присваивания 
// = | += | -= | *= | /= | %= | 
let num = 10;
num = num+10; // num += 10;

// Операторы сравнения 
// Результат работы операторов сравнения либо true или false
// > | < | >= | <= |
// == равенство (С приведением типов)
// === строгое равенство ( без приведения типов)
// != неравенство (С приведением типов)
// !== строгое неравенство ( без приведения типов)

// В JavaScript пользуемся строгим равенсвом и строгим неравенством 

let height = 120;
let wight = "120";
console.log(height == wight); // true
console.log(height === wight); // false

console.log(true == 1); //true
console.log(true === 1); // false

// инкримент ++ и декримент -- (применяеться только к переменным)

// инкримент - увеличивает значение на 1
// декримент - ументшает значение на 1


// префиксная форма ++i
num = 2;
console.log(++num); // 3
console.log(num); // 3
// постфиксная форма i++
num = 2;
console.log(num++); //2
console.log(num); // 3

// префиксная форма --i
num = 2;
console.log(--num); // 1
console.log(num); // 1
// постфиксная форма i--
num = 2;
console.log(num--); //2
console.log(num); // 1

num = 7;
let result = num++ - num++ + num++ - --num;
// 7-8+9-9
console.log(result); // -1

// логические операторы 
// Результат работы логических операторов либо true или false
// ||или | & и | ! не 
height = 120;
wight = 120;
console.log(height < wight); // false
console.log(height <= wight); // true
console.log(height > 100 ); // true

console.log(height < wight && height > 100); // false
console.log(height < wight || height > 100); // true

// тернарный оператор ?
// res = (условие) ?значение 1: значение 2;
height = 56;
wight = 124;
result = height>wight?"Высота больше(true)":"Ширина больше(false)";
console.log(result);

// дано целое число. Если число чётное, делим егона 2, если нет вычетаем 2.
num=334;
result = !(num%2)?num/2:num-2;
console.log(result);

//задать высоту,длинну и ширину прямогугольного параллепипеда. Найтиего площадь, вывести результат в консоль.

a=6; // ширина
b=5; //длинна
c=3; // высота


result = 2*((a*b)+(b*c)+(a*c));
console.log(result);