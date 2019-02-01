let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');
/*

btn[0].onclick = function () {
    alert('You pushed new button')
}*/

//addEventListener не перезатриает событие
btn[2].addEventListener('click', function () {
    alert('done');
});
btn[2].addEventListener('click', function () {
    alert('again');
});

btn[1].addEventListener('mouseenter', function () {
    console.log("You on the second button");
});

btn[0].addEventListener('click', function (e) {
    // let target = e.target;
    // target.style.display = 'none';
    console.log("Event " + e.type + " на 1-м элементе " + e.target);
});
wrap.addEventListener('click', function (e) {
    console.log("Event " + e.type + " на 1-м элементе " + e.target);
});
link.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("Event " + e.type + " на 1-м элементе " + e.target);
});
btn.forEach(function (item) {
    item.addEventListener('mouseleave', function () {
        console.log("you are outside")
    })
});