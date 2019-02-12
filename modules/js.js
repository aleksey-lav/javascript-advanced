/*
let app = {
    data: 45
};
console.log(app);*/


/*
//анонимная функция
let number = 1;
(function() {
   let number = 2;
   console.log(number);

   return console.log(number + 3)
}());
console.log(number);*/


/*// также через стрелочную функцию
(() => {
    const a = 12;
    return console.log(a+2);
})();*/

//not secur to use
let user = (() =>{
    return {
         sayHello: () => {
             console.log('Hello');
         },
         privat: () => {
             console.log('Hello, i');
         }
    };
})();
console.log(user);
console.log(user.sayHello());
console.log(user.privat());

console.log('*********************************************');


/*//use module
let user = (() =>{
    let privat = () => {
        console.log("I'm privat");
    };
    let sayHello = () => {
        console.log('Hello!')
    };
    return {
       /!* sayHello: () => {
            console.log('Hello');
        }*!/
       sayHello: sayHello,
        privat: privat

    };
})();
console.log(user);
console.log(user.sayHello());
console.log(user.privat());*/
