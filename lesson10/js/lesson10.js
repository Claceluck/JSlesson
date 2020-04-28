// в JS класс это функция!!!
// в JS класс это функция-конструктор + дополльнительные возможности
// имя класса нужно писать с заглавной буквы!

class  Unit { // имя класса существительно в единственном числе
    _attack = 3; // свойство _attack по умолчанию 3
    _health = 10; // свойство _attack по умолчанию 10
// consructor будет вызван при создание объектов
constructor(name){
    // значение свойства _name будет устанавливаться в момент создания объекта
    this._name = name;
}
// сеттеры

set attack(attackValue) {
    if ( attackValue < 5) {
    throw new Error ('Атака не может быть меньше 5')
}
    this._attack = attackValue;
}

// геттеры

get attack(){
    return this._attack;
}

// метод (функция внутри) объекта function не пишем, называется сразу с названия метода

isAlive(){
    return this._health > 0;
}

// метод (функция внутри) обьекта
// instanceof проверяет принадлежность объекта  otherUnit к классу Unit, возвращает true и false
attackOther(otherUnit) {
    if(!(otherUnit instanceof Unit)) {
        throw new Error("юнит не может атакавать " + "данного персонажа");
    }
    // аналогично для атакующего 

    if (!this.isAlive()){
        console.log(`юнит ${this._name} мертв. Атаковать не может`);
        return; // завершаем работу нашего метода 
    }

    if (!otherUnit.isAlive()){
        console.log(`юнит ${otherUnit._name} мертв. Атака бесполезна`);
        return; // завершаем работу нашего метода 
    }

    otherUnit._health -= this._attack;
    console.log(`${this._name} атаковал ${otherUnit._name}. Здоровье ${otherUnit._name} = ${otherUnit._health}`);
}

}


// let unit1 = {
//     name: 'Alex',
//     attack: 23,
//     health: 12
// };
// let unit2 = {
//     name: 'Tom',
//     attack: 44,
//     health: 2
// }

// создание объектов
let unit1 = new Unit("Иван");
let unit2 = new Unit("Алёша");

console.log(unit1);
console.log(unit2);

// let u1 = {name: "Иван", attack: 3, health: 10};
// let u2 = {name: "Алёша", attack: 3, health: 10};


// доступ к свойствам 
console.log(unit1._name);
console.log(unit2._attack);

// установили значение свойства _attack объекта unit1
unit1._attack = 23;
// установили значение свойства _attack объекта unit2
unit2._attack = 18;
// установили значение свойства _health для unit1 и unit2
unit1._health = 50;
unit2._health = 40;

// вызов сеттера attack, установка значения свойства _attack

unit1.attack = 22;

// вызов геттера attack, установка значения свойства _attack

console.log(unit1.attack);

// вызов метода осуществляеться через точку

unit1.attackOther(unit2);
// юнит 1 атакует юнит 2 
unit1.attackOther(unit2);
// юнит 1 атакует юнит 2 
unit1.attackOther(unit2);
// юнит 1 атакует юнит 2 

// наследование 
// Unit класс + доп. свойства и методы
// Класс Knight наследует ( расширяет!!!) от класса Unit
// При этом лбъекты типа Knight получат все методы и свойства, 
// описанные в клаасе Unit + те, которые описаны в классе Knight
class Knight extends Unit {
    //свойства
    _armor = 1;
    constructor(name){
        super(name); // вызов конструктора родителя 
        console.log("Создан объект типа Knight");
        this._health = 12;
        this._attack = 7; 
    }

    set armor(armorValue){
        if (armorValue < 1) {
            throw new Error("армор не может быть меньше 1");
        }
        // return с ретурном бы значение тоже не установилось но программа продолжила бы работать
        this._armor = armorValue;
    }

    get armor() {
        return this._armor;
    }

    // переопределение метовдов родителя
    attackOther(otherUnit) {
        // расширения метода родителя ( добавление своего функционала) 
        otherUnit._health += otherUnit._armor;
        // вызов метода родителя в том виде, в каком он описан
        // в классе unit 
        super.attackOther(otherUnit);
        
    }
}

let Knight1 = new Knight("Митя");
let Knight2 = new Knight("Кеша");
Knight1.attackOther(Knight2);

class Doctor extends Unit {
    constructor(name){ 
        super(name) ;// вызов конструктора родителя Unit
        this._health = 20;
    }
    attackOther(otherUnit){
        // не используем реализацию родителя, пишем собственную
        if (!(otherUnit instanceof Unit)) {
            throw new Error ("Доктор не может вылечить данного персонажа")
        }
        if (!this.isAlive() || !otherUnit.isAlive()) {
            console.log("Лечение невозможно. Все мертвы");
            return
        }
        otherUnit._health += this._attack;
        console.log(`${this._name} вылечил ${otherUnit}. Здоровье ${otherUnit._name} = ${otherUnit._health}`);
    }
}
let doctor1 = new Doctor("Евгений");
doctor1.attackOther(unit1);