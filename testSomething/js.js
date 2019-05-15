/* function getYear(){
    let getTime = new Date().getFullYear();
    return getTime;
}
console.log(getYear()); */

/* console.log("hello")

let f = (a, b) =>  a + b 

console.log(f(3,4))

let a = 4;
console.log(a.toPrecision()) */


/* const getPosts = () => {
    return fetch(`http://jsonplaceholder.typicode.com/posts`)
    .then(res => res.json())
    .then(posts => console.log(posts))
} */
//ajax
// const i = '7f00bc57f618ffc3cddc20dc92645de6';
/* const resultsContainer = document.getElementById('results-container');
const movieSearchBox = document.getElementById('movieSearchBox'); */
/* let resultsIndex = 0, sortIndex = 0;
let searchResults, queryValue, castContainer, cast; */

//Request and display list of movie results based on the search box
/* function searchForMovies() {
  //Prepare for AJAX request
  queryValue = movieSearchBox.value;
  let encodedQueryValue = encodeURI(queryValue);
  let url = `https://api.themoviedb.org/3/trending/all/day?api_key=$ i}`;

  //AJAX request to search for movies by title
  let request = new XMLHttpRequest();
  request.open('GET', url);  

  request.onreadystatechange = function() {
    if (request.readyState === 4) {
      preFormatResults('resultsList');                                  //Format page
      searchResults = JSON.parse(request.responseText).results;         //Collect search results
      resultsContainer.innerHTML = `<h3>${searchResults.length} Results for "${queryValue}"</h3>`;
      resultsContainer.innerHTML += `<button class='fr' onclick='sortResultsByDate()'>Sort by Release Date</button><br><br>`;
      searchResults.forEach(showQueryResult);                           //Show search results

      console.log('/search/movie parsed response: ', JSON.parse(request.responseText));
    }
  };  

  request.send();
} */
/* let resultsIndex = 0;
const i = '7f00bc57f618ffc3cddc20dc92645de6';
const url = `https://api.themoviedb.org/3/trending/all/day?api_key=$ i}`
const resultsContainer = document.getElementById('filmRef');

let request = new XMLHttpRequest();
var data = '';
let searchResults;
request.open('GET',url, false);
request.onreadystatechange = function() {
    console.log(request.readyState);
        if ((request.readyState == 4) && (request.status == 200)) {
                console.log('connection is ok');
                searchResults = JSON.parse(request.responseText).results;         //Collect search results
                resultsContainer.innerHTML = `<h3>${searchResults.length} Results </h3>`;
                searchResults.forEach(showRequestListFilms); 
        }
}
request.send();
data = JSON.parse(request.response);
function showRequestListFilms(result) {
  let title = result.title;
  let id = result.id;
  let releaseDate = `<span class='year'>(${result.release_date.slice(0,4)})</span>` || `<span class='year'>(release date unavailable)</span>`;

  let resultDiv = document.createElement('div');
  resultDiv.innerHTML = `<div class='results-box' onclick='requestMovieData(${id})'>${title} ${releaseDate}</div>`;
  resultsContainer.appendChild(resultDiv);

  resultsIndex++;
}



console.log(data) */






/* data = JSON.parse(request.response)
console.log(typeof data)
const filmRef = document.getElementById("filmRef")
const myDogFragment = document.createDocumentFragment();
const item = document.createElement('a')
for(let i of data){
    myDogFragment.appendChild(data.title)
    filmRef.appendChild(myDogFragment)

}  */
// data = JSON.parse(request.response);
/* const data = [[59, 12],[55,-1],[12, -2],[12, 12]]
// const newAr = []
function openOrSenior(data){
    const newAr = []
    for (let i = 0; i < data.length; i++){
        for(let j = 0; j < data[i].length; j++){
            if( data[i][j] >= 55 && data[i][j+1] > 7){
               newAr[i]="Senior"
            }
            else
            newAr[i] = "Open"
            break;  
            
        }
    }
    console.log(newAr)
  }
  openOrSenior(data); */



/*   class Animal  {
    constructor(name, type){
      this.name = name;
      this.type = type;
      this.age = 45
    }

    getName(){
      return this.name
    }

  }

  const a = new Animal("Mike", "tiger");
  console.log(a)

  class Tiger extends Animal{
    constructor(props){
      super(props)
      this.name = "Vasja"
    }
  }
  const tig = new Tiger("Grisha", "cat", 89)
  console.log(tig)
  console.log(a) */


/*   var value = 0;
  function f () {
    if(1){
      console.log('1')
      value = true
    }else{
      console.log('10')
      var value = false
      console.log(value)
    }
    console.log(value)
  }
  f()

  console.log("--------------------------"+ '\n')


var arr = [1,2,3,4,5]

var i = 0
var res = 0
while (i++ < arr.length-1){
  res += arr[i]
  
 
  // console.log(arr.length-1 )
  // console.log(i)
  console.log(res)
}
console.log(res)

console.log("--------------------------"+ '\n') */

/* const obj0 = {name : "Jack", age: 115}
const obj1 = {prop1: obj0}
console.log(obj0)
console.log(obj1)
console.log(obj0 == obj1)
const obj2 = Object.assign({}, obj1)
console.log(obj2)
console.log(obj2 == obj1)
obj2.prop1 = "Terry"
console.log('--------------')
console.log(obj1.prop1)
console.log(obj2.prop1)
console.log(obj1.prop1 == obj2.prop1) */


/* var firstVar = 'foo';
var seconfVar;
switch (firstVar){
  case 'foo':
  seconfVar = 'bar';
  console.log(seconfVar)
  case 'bar':
  seconfVar = 'foo'
  console.log(seconfVar)
  case 'foobar':
  seconfVar = 'barfoo';
  console.log(seconfVar)
  break;
  default:
  seconfVar = 'foobar'
  console.log(seconfVar)
} */
/* 
function myF (a) {
  console.log(a)
  var b = 6
  return function(b){
    console.log(b,a)
  }
}
var testF = myF(2)
testF(4) */
/* 
function f(c){
  console.log(c)
  return function(b){
    console.log(b, c)
    return c+b
  }
}
console.log(f(2)(3)) */

let a = {
  name: 'JAck',
  age: 45,
  gender: 'male'
}
console.log(a)

let b = Object.assign({}, a)
console.log(b) 
let c = a
console.log(a===c)

c.age = 30

console.log(a,c)
console.log(b)

var cat = {
  name: 'Belka',
  age: 12,
  gender: 'female'
}
var catNew = {}
for (var i in cat){
  console.log(cat[i])
  catNew[i] = cat[i]
}
catNew.name = "Strelka"
console.log(cat)
console.log(catNew)



let str = "Hello"
console.log(typeof str)
let str2 = str.split('')
console.log(typeof str2)
str2.push('W')
let str3 = str2.join('')
console.log(str, str2, str3)

let strReverse = str.split('').reverse().join('')
console.log(strReverse)