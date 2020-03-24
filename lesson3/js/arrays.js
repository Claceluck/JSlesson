

let intArr = [3, 5, -2, 7];
console.log(intArr);
// умножение элементов массивов на 2

for (let i =0; i < intArr.length; i++){
    intArr[i] *= 2;
}
console.log (intArr);


intArr = [3, 5, -2, 7];
// Перебор массива через for of; изменить элементы мы не можем.
for (let elem of intArr) {
    elem *=2 ;
    console.log(elem);
}
console.log (intArr);

// for in не используеться для перебора массивов

let someArr = [
    [34, 67, 12, -44],
    [12, -8, 0, -23],
];

console.log(someArr[1][2]); // что бы доастать 0
// увеличить значение каждого элемента на 3

for (let i = 0; i < someArr.length; i++){
    // someArr[i] вложенный массив
    for (let j = 0; j < someArr[i].length; j++){
        someArr[i][j] += 3;
};
}
console.log (someArr);

// методы 

let colors = ['red', 'white', 'green'];

//добавление\ извлечение первого\ последнего элемента массива 

// добавляет 1 или несколько элементов в конец массива
colors.push('black', 'orange'); 
console.log(colors);
// удаляет и возвращает последний элемент массива 
let lastElem = colors.pop();
console.log(colors, lastElem); 

// добавляет 1 или несколько элементов в начало массива

colors.unshift('orange','yellow');
console.log(colors);

// удаляет и возвращает первый элемент массива
let firstElem = colors.shift();
console.log(colors, firstElem);

let searchRes = colors.includes('orange');
console.log(searchRes);

// reverse
// TODO: / split / join !!! 
// concat
// splice / slice Разобратьс  дома! !!!
// indexOf / lastindexOf поиск по индексу

// TODO:
// создать двумерный  массив из 3 строк
// по 5 столбцов вкаждом 
//заполнить случайными рандом числами изотрезка -99 , 99 
// вывести массив в консоль 
// найти значение максимального элемент, вывести его индекс и значение 

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