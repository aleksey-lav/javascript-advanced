'use strict';

class User {
    constructor(name, id){
        this.name = name;
        this.id = id;
        this.human = true;

    };
    hello (){
        console.log(`Hello! ${this.name}`)
    }
    exit(){
        console.log(`User ${this.name} is left` )
    }
    yearBorn(){
        console.log(2019 - this.id);
    }
}
let ivan = new User("Ivan", 43),
    john = new User("John", 20);
console.log(ivan);
console.log(john);
ivan.hello();
john.hello();
