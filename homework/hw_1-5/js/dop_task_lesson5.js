
//TODO каждый элемент вложенного массива больше 0

arr = [[1,3,4],
    [3,-7,9],
    [-90,12,-12]
];

let above_zero = (elem, index, array) => elem>0;
arr.forEach(function (elem,index,array) {
    array[index]=elem.filter(above_zero);
});
console.log(arr);

//TODO каждый элемент вложенного массива увеличить на 2

arr = [[1,3,4],
    [3,7,9],
    [-90,12,-12]
];

arr.forEach(function(elem,index,array) {
    elem.forEach(function(elem1,index1,array1) {
        array1[index1]+=2;
    });
});
console.log(arr);

// возраст всех пользователей больше или равен 18

arr = [
    {
        name: "qwe",
        age: 19
    },
    {
        name: "qwe",
        age: 45
    },
    {
        name: "qwe",
        age: 16
    }
];

let more_18 =  (elem,index,array)  => elem.age>=18;
if(arr.every(more_18)) console.log('Возраст всех пользователей больше 18');
else console.log('Не все пользователи совершеннолетние');