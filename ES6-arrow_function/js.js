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