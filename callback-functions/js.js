function f() {
    setTimeout(function () {
        console.log(1);
    }, 600);
}

function sec() {
    console.log(2)
}
f();
sec();

console.log("-------------------------------------");

function learnJS(lang, callback){
    console.log("I'm learning " + lang);
    callback();
}
learnJS("Java", function () {
    console.log("And what about you?")
});

console.log("-------------------------------------");

