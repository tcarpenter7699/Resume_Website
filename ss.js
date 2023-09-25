

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
   menu.classList.toggle('is-active');
   menuLinks.classList.toggle('active');
});



let slideIndex = 0;
showSlides();  
  function showSlides() {
    let i;
    let slides= document.getElementsByClassName("mySlides1");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex= 1}

  slides[slideIndex-1].style.display = "block";
  setTimeout (showSlides, 3000);
  }
  
let picIndex = 0;
showPic();  
  function showPic() {
    let i;
    let pic= document.getElementsByClassName("mySlides2");
    for (i = 0; i < pic.length; i++) {
        pic[i].style.display = "none";
    }
    picIndex++;
    if (picIndex > pic.length) {picIndex= 1}

  pic[picIndex-1].style.display = "block";
  setTimeout (showPic, 3000);
  }


  let photoIndex = 0;
  showPhoto();  
    function showPhoto() {
      let i;
      let photo= document.getElementsByClassName("mySlides3");
      for (i = 0; i < photo.length; i++) {
          photo[i].style.display = "none";
      }
      photoIndex++;
      if (photoIndex > photo.length) {photoIndex= 1}
  
    photo[photoIndex-1].style.display = "block";
    setTimeout (showPhoto, 3000);
    }
  
 