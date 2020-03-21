// массивы
let arr = [] // пустой массив
console.log(arr);

let colors = ['red', 'white', 'green'];
console.log(colors);
// доступ к элементам массива, осуществляеться по индексу
let item = colors[2];
console.log(item);
item = colors[58];
console.log(item); // undefined

colors[1] = "black";
console.log(colors);

colors[34] = "orange";
console.log(colors);

// длинна массива 

let colorsLen = colors.length;
console.log(colorsLen);

// перебрать массив

colors = ['red', 'white', 'green'];

for(let i = 0;i < colors.length; i++ ) {
    console.log(colors[i]);
    colors[i] += '-color';
};
console.log(colors);

let intArr =[23, 56, -12, 67, -222, 0, -98];

for (let i = 0; i < intArr.length; i++) {
    if(intArr[i]>0) {
        console.log (intArr[i]);
    }
}