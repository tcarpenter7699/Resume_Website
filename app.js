/*NAVBAR JS*/
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
   menu.classList.toggle('is-active');
   menuLinks.classList.toggle('active');
});

/*SLIDESHOW JS*/
let slideIndex = [1,1,1];
let slideId = ["mySlides1", "mySlides2", "mySlides3"]
showSlides(1,0);
showSlides(1,1);
showSlides(1,2);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x= document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no]= 1}
  if (n < 2) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
x[slideIndex[no]-1].style.display = "block";
}