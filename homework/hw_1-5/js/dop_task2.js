// Дополнительные задачи №2 (строки и массивы)

// Даны 2 слова, состоящие из четного числа букв. Получить слово состоящее из первой половины первого слова и второй половины второго слова.

let word1 = 'анаххх'
let word2 = 'хххнас'
let word3 = word1.slice(0, word1.length/2) + word2.slice(word2.length/2);
console.log(word3);

// Найдите самое длинное слово в предложении, при условии, что в предложении все слова разной длины.

let str = 'Найдите самое длинное слово в предложении, при условии, что в предложении все слова разной длины.';
srt_t = str.trim(); // не понимаю в чём проблема
console.log(srt_t);

let arr = srt_t.split(' ');
srt_t = arr[0];
console.log(arr); 

for (let el of arr)
    if (el.length > srt_t.length) {
        srt_t=el;
    }
console.log(srt_t);

// Дана строка, которая содержит буквы и числа, например, "улица Ломоносова дом 9 корпус 1 офис 1120". Необходимо создать массив, элементы которго будут числа строки, например для данной строки массив будет вида [9, 1, 1120]

let sprin = 'улица Ломоносова дом 9 корпус 1 офис 1120';

let sprinSplit = sprin.split(' ')
let sprinArr = [];
console.log(sprinSplit);

j=0;

for(let i=0; i < sprinSplit.length;i++)
    if (Number.isInteger(+sprinSplit[i]))
    sprinArr[j++] = sprinSplit[i];
console.log(sprinArr);


// Задача на массив
// Содать двумерный массив из 3 вложенных массивов, в каждом вложенном массиве по 6 целых чисел
// Массив заполнить вручную: 
// например,
//     let someArr = [
//           [5, 6, 12, -90, 9, 0], // 6 элементов
//           [34, 67, 45, -40, 10, 98], // 6 элементов
//           [-77, 88, 99, -99, 1, 3], // 6 элементов
//       ];
// или случайными (random) числами из отрезка [-99; 99].
// Вывести массив в консоль.
// Определить и вывести на экран индекс строки с наибольшим по модулю произведением элементов.
// Если таких строк несколько, то вывести индекс первой встретившейся из них.

let arand = [ [], [], [] ]; 

for(let i=0; i<3; i++) 
    for (let j=0; j<6; j++)
    {
        arand[i][j] = Math.floor(Math.random() * 199 - 99) ; 
    }
console.log(arand);

let multi = 1;
let indexMax = 0;
let multiMax = 0;

for (let i=0; i < arand.length; i++) {
    for(let j=0; j < arand[i].length; j++) {
        multi = multi*Math.abs(arand[i][j]); // немного не понятно как это работает более подробно
    }
    if (Math.abs(multi)>Math.abs(multiMax)) {
        indexMax = i;
        multiMax = multi;
    }
    console.log(i,multi);
    multi = 1;
}
console.log("Индекс строки с наибольшим по модулю произведением элементов: " + indexMax);



// Задача на одномерный массив
// Создайте массив из 11 случайных целых чисел из отрезка [-1;1], выведите массив в консоль.
// Определите какой элемент встречается в массиве чаще всего и выведите об этом в консоль.
// Если несколько элементов встречаются одинаковое количество раз, то не выводите ничего.

let arr0110 = [];

for (let i=0; i<11; i++) {
    arr0110[i] = Math.floor(Math.random() * 3 - 1);
}
console.log(arr0110);

let number = arr0110[0];
let maxNum = 1;

for (i = 0; i < arr0110.length - 1; i++) {
    let num = 1;
    for (j = i + 1 ; j < arr0110.length; j++) {
        if (arr0110[i] === arr0110[j]) {
            num += 1;
        } 
        if (num > maxNum) {
            maxNum = num;
            number = arr0110[i];
            }
    }
}

console.log(`${maxNum} раз встречаеться число ${number}`);