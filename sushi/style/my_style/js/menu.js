function myFunctionaaa() {
    var x = document.getElementById("salam-menu-hover");
    var y = document.getElementById("open-menu");
    var z = document.getElementById("close-menu");
    
    if (x.style.display === "block" ) {
        x.style.display = "none";
        z.style.display = "none";
        y.style.display = "block";
    } else {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "block";
    }
}
function searchq() {
    var searchh =document.getElementById("sea");
    if (searchh.style.display === "none" ) {
        searchh.style.display = "block";
        
    } else {
        searchh.style.display = "none";
        
    }
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000);
}

function sweetAlert() {
  swal(
      'Uğurla göndərildi!',
      'Click et!',
      'success'
  )
}

$('.active-list-grid-white').click(function(){
  $(this).css("background-color", "rgb(097,206,014)");
  $('.active-list-grid').css("background-color", "white");
});

$('.active-list-grid').click(function(){
  $(this).css("background-color", "white");
  $('.active-list-grid-white').css("background-color", "rgb(097,206,014)");
});

