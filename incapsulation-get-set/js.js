/*
class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getAge(){
        return console.log(this.age);
    }
    setAge(age){
        if (typeof this.age === 'number' && this.age > 0 && this.age < 110){
            this.age = age;
        } else{
            console.log('Incorrect value of age');
        }
    }
}

const user = new User("Ivan", 25);
user.getAge();
console.log("------------------------");

user.setAge(34);
user.getAge();*/

//ES 5

function User(name , age) {
    this.name = name;
    let userAge = age;

    this.getAge = function () {
        return userAge;
    };
    this.setAge = function (age) {
        if (typeof age === 'number' && age > 0 && age < 110){
            userAge = age;
        } else {
            console.log("недопустимое значение")
        }
    };
}
let user = new User("Ivan", 23);
console.log(user.getAge());
user.setAge(50);
console.log(user.getAge());
