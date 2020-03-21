// циклы позволяют однотипное дейсвие несколько раз

// while
// do while
// for

// while(условие) {
//     тело цикла
// }

// let key = null;
// while (key !== 'admin') {
//     key = prompt("Введите пароль");
//     console.log("key", key);
// }

// do {
//     тело цикла
// } while (условие);

let a = 5;
do {
    console.log ("a= "+ a);
    a--;
} while (a);


let i = 0;
while (i < 50 ){
    i++;
    console.log(i);
    if (i%3 === 0) {
    console.log(  "fhree");
    }
    if (i%5 === 0) {
        console.log( "Five");
    }
}

// for (начало/инициализация счётчиков; условие; обновление счётчиков) {
//     тело цикла
// } for (;;){} Бесконечный цикл for

let attemptCount = 5;
let answer= 456;
for ( let i = 1;  i <= attemptCount; i++ ) {
    let user_data =prompt("Введите число");
    if (parseInt(user_data) === answer) {
        alert("Вы угадали");
        break; //прерывание цикла
        // continue; переход на следующию интерацию цикла
    }
    alert("Осталось попыток " + (attemptCount - i));
}