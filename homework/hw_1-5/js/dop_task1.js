// Дополнительные задачи №1

/* 1 В переменной n хранится натуральное трёхзначное число. Вывсети в консоль сумму цифр числа n. */

let n = 123;
let sum = 0;

while (n > 0) {
    sum += n % 10
    n = Math.floor(n/10) // к сожалению так и не понял почему делим на 10..
}
console.log(sum);


/* 2 Написать код, который будет проверять попало ли случайно сгенерированное целое число из отрезка [5;122] в интервал (25;100) и выводить результат в консоль. Например, число 113 не содержится в интервале (25,100) / число 72 содержится в интервале (25,100) */

let random_num = Math.floor(Math.random() * 118 + 5);

if (random_num >= 25 && random_num <= 100 ) {
    console.log(`Число ${random_num} содержится в интервале (25,100)`)
} 
else { console.log(`Число ${random_num} не содержится в интервале (25,100)`)
};


/* 3 Заполните массив на n элементов случайным числами и выведете максимальное, минимальное и среднее значение. Размер массива (n) вводит пользователь */

let arrSize = prompt('Введите желаемый размер массива');

let arr = [];
let max = 0;
let min = 0;
sum = 0;

for ( let i = 0; i < arrSize; i++ ){
    arr[i] = Math.floor(Math.random() * 201 - 100);
}
console.log(arr);
for (let el of arr) {
    if (el > max){
        max=el;
    } else 
    if (el < min){
        min=el;
    }
    sum+=el;
}
console.log(`Максимальное значение ${max}, Минимальное значение ${min}, Среднее значение ${sum/arrSize}`);



/* 4 Пользователь вводит с клавиатуры натуральное число большее 3, которое сохраняется в переменную n. Если пользователь ввёл не подходящее число, то программа должна просить пользователя повторить ввод. Создать массив из n случайных целых чисел из отрезка [0;n] и вывести его на экран. Создать второй массив только из чётных элементов первого массива, если они там есть, и вывести его в консоль */


let arr1 = [];
let arr2 = [];
n = prompt('Введите натуральное число больше 3');

while (n < 3){
    n = prompt('Введите число больше 3!');
}

for(let i=0; i < n; i++) {
    arr1[i]= Math.floor(Math.random()*(+n+1));// не доконца понял как работает (+n + 1) почему не работает(n + 1) ???
}
console.log(arr1);


for(let i=0; i < n; i++) {
    if(!(arr1[i]%2))
    arr2[i]=arr1[i] ;
}
console.log(arr2);