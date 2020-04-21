/* 1 Задача на двумерные массивы
// Содать двумерный массив из 3 вложенных массивов, в каждом вложенном массиве по 6 целых чисел
Массив заполнить вручную: 
например,
let someArr = [
    [5, 6, 12, -90, 9, 0], // 6 элементов
    [34, 67, 45, -40, 10, 98], // 6 элементов
    [-77, 88, 99, -99, 1, 3], // 6 элементов
];
или случайными (random) числами из отрезка [-99; 99].
Вывести массив в консоль.
Найти элемент c максимальным значением (вывести его индекс и значение)  
*/

// Максимальное число из массива заполненного случайным образом 

let arand = [ [], [], [] ]; // создаём пустой массив


for(let i=0; i<3; i++) // задаём параметры массива
    for (let j=0; j<6; j++)
    {
        arand[i][j] = Math.floor(Math.random() * 199 - 99) ; // Рандомные значения от -99 до 99.
    }

console.log(arand);

let maxRand = arand[0][0];

for (let i = 0; i < arand.length; i++){
    for (let j = 0; j < arand[i].length; j++){
        
    if (arand[i][j] > maxRand ) {
        maxRand = arand[i][j];
        }
    }
}
console.log(maxRand);

// Максимальное число из массива заполненного вручную

let maxArr = [
    [-2, 54, 33, 12, 7, 6],
    [-5, 4, 66, 33, 98, 11],
    [-3, -6, -44, 1, 0, 32],
];

let maxElem = maxArr[0][0];

for (let i = 0; i < maxArr.length; i++){
    for (let j = 0; j < maxArr[i].length; j++){

    if (maxArr[i][j] > maxElem ) {
        maxElem = maxArr[i][j];
        }
    }
}
console.log(maxElem);

// 2 Задача на строки
// Найти все вхождения подстроки в строку. Строку и подстроку вводит пользователь (через prompt).
// Не забывайте про метод trim и тд


let text = prompt("Введитe строку");
let sub_text = prompt("Введите подстроку");
let i = 0;
let j;
let k=0;
console.log(text);
console.log(sub_text);

while (true) {
    j = text.indexOf(sub_text,i);
    if(j === -1) break;
    k++;
    i = j+1;
}
console.log('Найдено вхождений ',k)

// 3 Задача на строки
//  Преобразуйте первую букву строки в верхний регистр. Строку вводит пользователь 

let textUp = prompt('Введите текст с маленькой буквы');
console.log(textUp.charAt(0).toLocaleUpperCase()+ textUp.slice(1));


// Задачи на массивы
//  Дан массив ['dog', 'cat', 'rabbit', 'mouse']. 
//  Удалить из массива элемент со значением 'cat' 

let arr = ['dog', 'cat', 'rabbit', 'mouse'];
console.log(arr);
arr.splice(1, 1);
console.log(arr);

// наверное можно как то сделать поиск и удалить массив, если мы не знаем порядковый номер элемента, но я пока не разобрался с этим