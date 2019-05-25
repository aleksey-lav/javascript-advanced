var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    console.log(`plusSlides - ${n}`)
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    console.log(`currentSlide - ${n}`)
  showSlides(slideIndex = n);
}

function showSlides(n) {
    console.log(`showSlides - ${n}`)
    console.log(`${slideIndex}`)
  var i;
  var slides = document.getElementsByClassName("mySlides");
  console.log(slides.length)
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}