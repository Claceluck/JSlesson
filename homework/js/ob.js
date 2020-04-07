// создим пустой объект

let userData = {};
console.log(userData); // вывод пустого массива в консоль

userData.name = "Anna"; // в обьект добавили свойство со значением анна
console.log(userData);

userData.age = 28; //
console.log(userData);

userData.favouriteColors = ["red", "orange" , "yellow"];
console.log(userData);

console.log(userData.age);

userData.age = 63;

console.log(userData.avatar);

// проверка на наличие свойства в объекте
// 1 вариант проверка на undefined

if (userData.avatar === undefined) userData.avatar = "default.png";

userData.login = null; // не undefined
console.log(userData);

// 2 вариант проверка оператором in
if (!("githubLink" in userData)) userData.githubLink = null;
console.log(userData);

let jsBook = {};
;

jsBook.titile = 100;
jsBook.avtor = "Philip";
jsBook.pageCount = 2;

let phpBook = {
titile: 234,
avtor: 'Gusev',
pageCount: 2
}
console.log(jsBook);
console.log(phpBook);

userData.books = [jsBook, phpBook];
console.log(userData);

// перебор свойств объекта for in

for (let propName in jsBook) {
    // на каждой итерации цикла имя свойства будет копироваться  в переменную propName
    console.log (`имя свойства ${propName}, значение свойства ${jsBook[propName]}`);
}

let messages = [
    {
        text: 'short message',
        priority: 'high',
        code: 12
    },
    {
        text: 'long message',
        priority: 'low',
        code: 424
    },
    {
        text: 'message',
        priority: 'high',
        code: 143
    }
];

let codeP = prompt('введите код сообщения');

for (let i = 0; i < messages.length; i++) {
    if (codeP < messages[i].code) {
        console.log (messages[i].text);
    }
}

