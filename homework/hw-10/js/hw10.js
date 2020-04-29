class Army {
    _health = Math.floor(Math.random() * 100);
    _attack = Math.floor(Math.random() * 25);

    constructor(name) {
        this._name = name;
    }

    // setter

    set attack(attackValue) {
        if ( attackValue < 0) {
        throw new Error ('Атака не может быть меньше 3');
    }
        this._attack = attackValue;
    }
    
    // getter
    
    get attack(){
        return this._attack;
    }

    isAlive(){
        return this._health > 0;
    }

    attackOther(otherUnit) {
        if(!(otherUnit instanceof Unit)) {
            throw new Error("Юнит не может атакавать " + "данного персонажа");
        } 
    
        if (!this.isAlive()){
            console.log(`Юнит ${this._name} мертв. Атаковать не может`);
            return; 
        }
    
        if (!otherUnit.isAlive()){
            console.log(`Юнит ${otherUnit._name} мертв. Атака бесполезна`);
            return; 
        }
    
        otherUnit._health -= this._attack;
        console.log(`${this._name} атаковал ${otherUnit._name}. Здоровье ${otherUnit._name} = ${otherUnit._health}`);
    }
    
}
