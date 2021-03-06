// Реализовать объектную модель: Яблоко, Дерево, Сад
// Программа должна уметь :
//     добавлять деревья в сад.
//     добавлять яблоки на деревья.
//     информацию о количестве деревьяв и яблок.

// Сад - это объект со списком объектов деревьев.
// Дерево - это объект со списком объектов яблок.

// Яблоки должны иметь определяться:
//     возрастом
//     флаг испорченности
//     флаг упавшего с дерева

// Яблоки имею методы:
//     упасть с дерева
//     испортиться

// У всего сада есть возраст (например количество суток).
// Каждые 30 суток на каждом дереве рождается новое яблок.
//     Все яблоки каждые сутки стареют на 1 день.
//     Яблоки падают с дерева при возрасте 30 дней.
//     Яблоки портятся, после падения через сутки

// просчитать 1 сутки: возраст яблок увеличивается,
// некоторые падают с дерева, некоторые портятся,
// на деревьях появляются новые

class Apple {
    constructor(){
        this._age = Math.floor(Math.random() * Math.floor(7));
        this._isSpoiled = false; // не испрочено
        this._isFallen = false;  // не упало 
    }
    spoiled(){ // может испротиться 
        this._isSpoiled = true;
    }
    fell(){ // может упасть 
        this._isFallen = true;
    }
    
}
class Tree {
    constructor(){
        this._apples = []; // массив для яблок 
    }
    addApple(apple){
        if(!(apple instanceof Apple)) {
            throw new Error("на деревья можно добавлять только " + "яблоки");
        }
        this._apples.push(apple);
    }
}
class Garden {
   constructor(...trees){
       this._trees = trees;
       this._age = 1;
   }
   passDay(){
       for(let tree of this._trees){
           for (let apple of tree._apples){
               //     Все яблоки каждые сутки стареют на 1 день.
               apple._age += 1;
               //     Яблоки падают с дерева при возрасте 30 дней.
               if (apple._age === 30) {
                   apple.fell();
               }
               //     Яблоки портятся, после падения через сутки
               if(apple._age === 31) {
                apple.spoiled();
            }
           }
           // на дереве появляются новое яблоко 
           tree.addApple(new Apple());
       }
   }
   getInfo(){
    for(let tree of this._trees){
        for (let apple of tree._apples){
            if(!apple._isSpoiled) console.log(apple);
        }
    }
   }
}
let t1 = new Tree(); // создался пустой массив []
t1.addApple(new Apple()); // [яблоко ]
t1.addApple(new Apple()); // [яблоко, яблоко ]
t1.addApple(new Apple()); // [яблоко, яблоко, яблоко ]

let t2 = new Tree(); // создался пустой массив []
t2.addApple(new Apple()); // [яблоко ]
t2.addApple(new Apple()); // [яблоко, яблоко ]
t2.addApple(new Apple()); // [яблоко, яблоко, яблоко ]
t2.addApple(new Apple()); // [яблоко, яблоко, яблоко, яблоко]

let garden = new Garden(t1, t2);
for(let i = 0; i < 33; i++){
    garden.passDay();
}
garden.getInfo();