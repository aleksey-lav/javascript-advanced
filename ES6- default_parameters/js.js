let fun = () => {
  console.log(this);
};
// fun();

let obj = {
    number: 5,
    sayNymber: function () {
        let say = () => {
            console.log(this);
        };
        say();
    }
};
obj.sayNymber();

let btn = document.querySelector('button');
btn.addEventListener('click', function () {
    let show = () => {
        console.log(this);
    };
    show();
});


//ES 5
/*function calcOrDouble(number, basis) {
    basis = basis || 2;
    console.log(number*basis);
}
calcOrDouble(3,5);
calcOrDouble(6);*/

//ES 6
function calcOrDouble(number, basis = 2) {
    // basis = basis || 2;
    console.log(number*basis);
}
calcOrDouble(3,5);
calcOrDouble(6);
