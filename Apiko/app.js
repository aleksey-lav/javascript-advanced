
const key = '7f00bc57f618ffc3cddc20dc92645de6';
const resultsContainer = document.getElementById('results-container');
const movieSearchBox = document.getElementById('movieSearchBox');
let resultsIndex = 0
let searchResults, queryValue;

showTrending()
function showTrending() {
  let url = `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`;
  let request = new XMLHttpRequest();
  request.open('GET', url);  
  request.onreadystatechange = function() {
    if ((request.readyState === 4) && (request.status == 200)) {
      preResults('results');
      searchResults = JSON.parse(request.responseText).results;         
      resultsContainer.innerHTML = `<h3>${searchResults.length} Results for</h3>`;
      searchResults.forEach(function(item){
        console.log(item);
        showRequestListFilms(item);
      });      
      console.log('------: ', JSON.parse(request.responseText));
    }
  };  
  request.send();
}
//search movies by titles
function searchMovies(){
  queryValue = movieSearchBox.value;
  console.log(queryValue)
  let encodedQueryValue = encodeURI(queryValue);
  console.log(encodedQueryValue)
  let url = `http://api.themoviedb.org/3/search/movie?api_key=${key}&query=${queryValue}`;
  let request = new XMLHttpRequest();
  request.open('GET', url);  
  request.onreadystatechange = function() {
    if ((request.readyState === 4) && (request.status == 200)) {
      preResults('results');                                
      searchResults = JSON.parse(request.responseText).results;         
      resultsContainer.innerHTML = `<h3>${searchResults.length} Results for "${queryValue}"</h3>`;
     
      searchResults.forEach(showRequestListFilms);                           
      console.log('/search/movie parsed response: ', JSON.parse(request.responseText));
    }
  };  
  request.send();
  console.log(request.response)
}
//enter on keybord work well
movieSearchBox.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') searchMovies();
});

//how to display after search
function preResults(option) {
  if (option === 'results') {
    resultsContainer.style.display = 'block';
    resultsContainer.style.backgroundColor = '#272424';
    resultsIndex = 0;
    searchResults = undefined;
  }
  else if (option === 'movieData') {
    resultsContainer.innerHTML = "";
    resultsContainer.style.backgroundColor = '#e9e9e9';
  }
}
//Display film data 
function showRequestListFilms(result) {
  let title = result.title ? result.title : result.name
  let id = result.id;
  let releaseDate = `<span class='year'>(${result.release_date || result.first_air_date})</span>` || `<span class='year'>(release date unavailable)</span>`;
  let resultDiv = document.createElement('div');
  let colorClass = (resultsIndex % 2 === 0 ) ? 'bc-light-strip-even' : 'bc-light-strip-odd';
  resultDiv.innerHTML = `<div class='results-list-film ${colorClass}' onclick='requestDetailMovie(${id})'>${title} ${releaseDate}</div>`;
  resultsContainer.appendChild(resultDiv);
  resultsIndex++;
}

function requestDetailMovie(id) {
  let movieData;
  let url = `http://api.themoviedb.org/3/movie/${id}?api_key=${key}&append_to_response=credits`;
  let request = new XMLHttpRequest();  
  request.open('GET', url);  
  request.onreadystatechange = function() {
    if ((request.readyState == 4) && (request.status == 200)) {
      preResults('movieData');
      displayDetailMovie(request);
    }
  };
  request.send();
}
function displayDetailMovie(request){
  movieData = JSON.parse(request.responseText);
  console.log('----- ', movieData); 
  resultsContainer.style.borderColor = 'white'
  resultsContainer.style.backgroundColor = 'white'

  let title = movieData.title || 'No title available';
  let overview = movieData.overview || 'No overview available.';
  let posterPath = `http://image.tmdb.org/t/p/w500${movieData.poster_path}`;
  let releaseYear = movieData.release_date ? `(${movieData.release_date.slice(0,4)})` : 'No release date available';
  let rating = movieData.vote_average ? `${movieData.vote_average} / 10` : 'No rate still';
  let runtime = movieData.runtime ? `${movieData.runtime} min` : 'No runtime available.';
  let homepageURL = movieData.homepage || '';
  let genres = movieData.genres
  cast = movieData.credits.cast;

  resultsContainer.innerHTML =  movieData.poster_path ? `<img src='${posterPath}'>` : '';
  resultsContainer.innerHTML += `<h1>${title}</h1>`
                              + `<span class='color-dark-gray'>${releaseYear}</span>`
                              + `<div id='rating'>${rating}</div><br><br>`
                              + `<span>${overview}</span><br><br><br>`
                              + `<span class='fw-bold'>Runtime:</span> ${runtime}<br>`
                              + `<span class='fw-bold'>Homepage:</span> `;
  resultsContainer.innerHTML += (homepageURL !== '') ? `<a href='${homepageURL}'>${homepageURL}</a><br>` : 'No homepage available.<br>';
}
function hideResults() {
  resultsContainer.style.display = 'none';
  movieSearchBox.value = '';
}
