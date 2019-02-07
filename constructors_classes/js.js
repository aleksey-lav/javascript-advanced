'use strict';

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log('Hello!' + this.name)
    };
}
//add properties to prototype ES 5
User.prototype.exit = function (name) {
    console.log('User ' + this.name + ' went')
};

let ivan = new User("Ivan", 29),
     peter = new User("Peter", 14);
console.log(ivan);
console.log(peter);

ivan.exit();
