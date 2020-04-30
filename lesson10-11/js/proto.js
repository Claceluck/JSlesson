function Unit(name) {
    // свойства (условно приватные)
    this._healt = 10;
    this._attack = 3;
    this._name = name;
    // // приватные свойства 
    // let privateProp = "Приватное свойство";
}

// описание методов
Unit.prototype.isAlive = function(){
    return this._healt > 0;
};

let unit1 = new Unit("Алёша");
unit1._healt = 90;
unit1.isAlive();
let unit2 = new Unit("Кеша");
unit2._healt = 90;
unit2.isAlive();