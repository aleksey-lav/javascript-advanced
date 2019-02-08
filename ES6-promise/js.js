

/*
let func1 = function (param,func2) {
    func2(function (param,func3) {
        func3(function (param,func4) {
            func4(function (param, func5) {

            })
        })
    })
};*/

/*let drink =1;

function shoot(arrow,headshot,fail) {
    console.log('You shot');
    setTimeout(function (){
        Math.random() > .5 ? headshot({}) : fail("You loose");
    }, 3000)
};

function win(){
    console.log('You are winner');
    (drink == 1) ? byBeer() : giveMoney();
}

function byBeer() {
    console.log('You presented beer')
}
function giveMoney() {
    console.log('You have got momey')
}

function loose(){
    console.log('You are looser')
}


shoot({}, function (mark) {
    console.log('You win');
    win(mark, byBeer, giveMoney);
},
    function (miss) {
        console.error(miss);
        loose();
    });*/

//Promise

let drink =1;

function shoot(arrow) {
    console.log('You shot');
    let promise = new Promise(function (resolve,reject) {
        setTimeout(function (){
            Math.random() > .5 ? resolve({}) : reject("You loose");
        }, 3000)
    });
    return promise;

};

function win(){
    console.log('You are winner');
    (drink == 1) ? byBeer() : giveMoney();
}

function byBeer() {
    console.log('You presented beer')
}
function giveMoney() {
    console.log('You have got momey')
}

function loose(){
    console.log('You are looser')
}


shoot({})
        .then(mark => console.log('You did it'))
        .then(win)
        .catch(loose);