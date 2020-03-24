// строки (string)
// строки в javascript неизменны
// строки в '' "" 
let greeting = 'Добро поаловать';
greeting = 'Добро поаловать';
greeting = "Добро поаловать \"на сайт\"";
greeting = 'Добро поаловать \n "на сайт"';
console.log(greeting);

// строкии в обратных кавычках позволяют передавать выражения через ${}

let login ='qwe';
let age = 18;
let info = `Пользователь ${login}, возраст ${age} лет`;
console.log(info);

//длинна строки
let tstStr = 'Автобус';
console.log(tstStr.length);

// доступ к символам строки 
console.log(tstStr[3]); // o 
for (let elem of tstStr) {
    console.log(elem);
}

// методы
tstStr = 'Автобус';

let newStr = tstStr.toLocaleUpperCase(); //верхний регистр
console.log(newStr);

// нижний регистр 
let newStrl = tstStr.toLocaleLowerCase();
console.log(newStrl);

//убрать пробелы с начала и конца строки
tstStr = '      Автобус         ';
console.log(tstStr.length);
tstStr = tstStr.trim();
console.log(tstStr.length);

tstStr = 'Автобус';
console.log(tstStr.startsWith('Ав'));
console.log(tstStr.endsWith('с'));
console.log(tstStr.includes('то'));

// сравнение строк 
let compare1 = 'поезд';
let compare2 = 'Поезд';
console.log(compare1 > compare2);
console.log(compare1 < compare2);
console.log(compare1 === compare2);

let compareRes = compare1.localeCompare(compare2);
console.log(compareRes); // 1
//0 строки равны
// положительное число -compare1 стоит позже чем compare2
// отрицательное число -compare1 стоит раньше чем compare2

// indexOf / lastindexOf 
// slice  / substring

// определяем являеться ли слово палиндромом

let strPol = 'abcba';
strPolMas = strPol.split('').reverse().join("");
console.log(strPolMas);
let pol = (strPolMas === strPol) ? 'палиндром': 'не палиндром';
console.log(pol);
// let strPol1 = strPolMas.localeCompare(strPol);
// console.log(strPol1);
// strPolMas.reverse();
// console.log(strPolMas);
// strPolMas.join("")
// console.log(strPolMas);



intArr = [3, 4, 12, -34, 0];
// найти сумму элементов массива
let sumArr = 0;
for (let i = 0; i < intArr.length; i++) {
    sumArr += intArr[i];
}
console.log(sumArr);