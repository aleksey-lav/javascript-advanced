/*
localStorage.setItem("number", 1);
console.log(localStorage.getItem("number"));
localStorage.removeItem("number");
localStorage.clear();*/

window.addEventListener("DOMContentLoaded", function () {
    let checkbox = document.getElementById('rememberMe'),
        change = document.getElementById('change'),
        form = document.getElementsByTagName("form")[0];
    
    if (localStorage.getItem("bg") === "changed"){
        form.style.backgroundColor = "tomato";
    }

    if (localStorage.getItem("isChecked") === "true"){
        checkbox.checked = true;
    }

    checkbox.addEventListener('click', function () {
        localStorage.setItem("isChecked", true)
    });
    
    change.addEventListener('click', function () {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = "tomato";
    });

    let person = {
        name: "Alex",
        age: 25,
        tech: ["mobile", 'notebook']
    };
    let serializePerson = JSON.stringify(person);
    localStorage.setItem("Alex", serializePerson);

    let convertFromJson = JSON.parse(localStorage.getItem("Alex"));
    console.log(convertFromJson);

});