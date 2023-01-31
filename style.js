let openMenu = document.querySelector('.icon-bar');
let closeMenu = document.querySelector('.close-nav');
let navMenu = document.querySelector('.navbar');

openMenu.addEventListener('click',function(){
    navMenu.classList.add('nav-scale');
    document.querySelector('body').classList.add('overflow-none');
});

closeMenu.addEventListener('click',function(){
    navMenu.classList.remove('nav-scale');
    document.querySelector('body').classList.remove('overflow-none');
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}