
// var name = "Jack"
// var user = {
//     name: "Mike",
//     sayHello: function(){
//         console.log(name)
//         console.log("---------")
//         console.log(this.name)

//     }
// }
// setTimeout(user.sayHello.bind(user), 1000)

console.log("----------------------------------")
//bind

function f(a,b){
    console.log(this)
    console.log(a+b)
}
var g = f.bind('Context');
g(1,2)

console.log("----------------------------------")

// var wrapper = func.bind(context, arg1, arg2)
// func.bind(context) == bind(func, context);

console.log("----------------------------------")

var user = {
    data: [
        {name: 'John'},
        {name: 'Nick'}

    ],
    showFirst: function (e){
        console.log(this.data[0].name);
    }
}
document.getElementById('btn').addEventListener('click', user.showFirst.bind(user));