//создание слайд-галереи
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
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

//создание генератора идей
function generate(){
    var quotes = {
        "Идея 1" : "Нарисуйте папоротник",
        "Идея 2" : "Нарисуйте вымершее животное",
        "Идея 3" : "Нарисуйте водоем",
        "Идея 4" : "Нарисуйте что-то пушистое",
        "Идея 5" : "Нарисуйте вашего знакомого",
        "Идея 6" : "Нарисуйте мифологического персонажа",
        "Идея 7" : "Нарисуйте приведение",
        "Идея 8" : "Нарисуйте человека из истории",
        "Идея 9" : "Нарисуйте ведьму",
        "Идея 10" : "Нарисуйте десерт",
        "Идея 11" : "Нарисуйте волшебный посох",
        "Идея 12" : "Нарисуйте часы",
        "Идея 13" : "Нарисуйте эльфа",
        "Идея 14" : "Нарисуйте свой знак зодиака",
        "Идея 15" : "Нарисуйте сон",
        "Идея 16" : "Нарисуйте безликого скрипача",
    }

    var ideas = Object.keys(quotes);
    var idea = ideas[Math.floor(Math.random()*ideas.length)];
    var quote = quotes[idea];

    document.getElementById("quote").innerHTML = quote;
}