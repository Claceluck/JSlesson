// Конструкции ветвления
// используються,когда есть необходимость выполнить код в зависимости от условий
let age=13;
if (age >= 18) {
    console.log("Добро пожаловать на сайат");
} else {
    console.log("Вы не можете посещать данный рессурс");
}
// if (условие) {
//     блок кода выполняеться если условие true
// }

const GREEN="green";
const BLUE="blue";
const ORANGE="orange";
const YELLOW="yellow";
const WHITE="white";

let season = 'spring';

if (season === 'spring') {
    document.body.style.background = YELLOW;
} else if (season === 'summer') {
    document.body.style.background = GREEN;
} else if (season === 'autumn') {
    document.body.style.background = ORANGE;
} else if (season === 'winter') {
    document.body.style.background = BLUE;
}else {
    document.body.style.background = WHITE;
}

let day = 'четверг';

if (day === 'суббота'|| day === 'воскресенье') {
    console.log("выходные дни");
} else if (day === 'понедельник'||day === 'вторник'|| day ==='среда'|| day === 'четверг'||day === 'пятница') {
    console.log("рабочая неделя");
} else {
    console.log("введите правильное значение");
}

// switch 
let num = 11;
switch (num) {
    case 11:
        console.log("Крупный приз")
        break; // Прерывание работы 
    case 22:
    case 33:
        console.log("Средний приз");
        break; // Прерывание работы 
    case 44:
    case 55:
    case 55:
        console.log("Небольшой приз");
        break; // Прерывание работы 
    default:
        console.log("Попробуйте ещё раз");
}
// выполняеться от первого найденного совпадения до break либо до конца кода.
