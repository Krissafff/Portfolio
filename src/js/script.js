

const bx = document.querySelector('.bx');
const menu_mobile = document.querySelector('.menu-mobile');
const link_mobile = document.querySelectorAll('.link-menu-mobile');

console.log(link_mobile);

link_mobile.forEach((item) => {
    item.addEventListener('click', () => {
        menu_mobile.classList.add('showmenu');
        console.log(menu_mobile);
        
    })
})

//menu_mobile.classList.add('hidemenu');

bx.addEventListener('click', () =>{
    bx.classList.toggle('activebx');

    menu_mobile.classList.toggle('showmenu');
    console.log(menu_mobile);
})


var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if(slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

