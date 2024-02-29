let navbar = document.getElementById('navbar')
let menu = document.getElementById('menu')
let link = document.getElementsByClassName('link')

// variables for height of elements
let homeHeight = document.getElementById('home').offsetHeight;
let aboutHeight = document.getElementById('about').offsetHeight;
let windowHeight = window.innerHeight
let navbarHeight = navbar.offsetHeight

// --- Switch Scroll Event ---
window.addEventListener('scroll', onScroll)

function removeClass() {
  for (n = 0; n < link.length; n++) {
    link[n].classList.remove('current')
  }
}

function onScroll() {
  if (window.pageYOffset < windowHeight - navbarHeight) {
    removeClass()
  }

  if (window.pageYOffset >= windowHeight - navbarHeight) {
    removeClass()
    link[0].classList.add('current')
  }

  if (window.pageYOffset >= windowHeight - navbarHeight + homeHeight) {
    removeClass()
    link[1].classList.add('current')
  }

  if (window.pageYOffset >= windowHeight - navbarHeight + homeHeight + aboutHeight) {
    removeClass()
    link[2].classList.add('current')
  }
}

// --- Lightbox ---

// modal
var modal = document.getElementById('modal')
var modal_content = document.getElementById('modal-content')
var modal_img = document.getElementById('modal-img')
var modal_text = document.getElementById('modal-text')
var modal_title = document.getElementById('modal-title')

var modal_wrap = document.getElementById('modal-wrap')

// Close Buttons
var close_btn = document.getElementById('close-btn')
var close_window = document.getElementById('close-window')

// Slide Buttons
var next = document.getElementById('next')
var prev = document.getElementById('prev')


// Show Modal On Click
let portfolio_pic = document.getElementsByClassName('cross-icon')

var picArray = Array.from(portfolio_pic);

for (n = 0; n < portfolio_pic.length; n++) {
  portfolio_pic[n].addEventListener('click', showModal)
}

function showModal(e) {
  // get the index of each clicked element
  var index = picArray.indexOf(e.target);

  // set the content for the image, title and text
  function setContent() {
    modal_img.src = portfolio_pic[index].nextElementSibling.src
    modal_title.innerText = portfolio_pic[index].nextElementSibling.alt;
    modal_text.innerHTML = portfolio_pic[index].nextElementSibling.nextElementSibling.innerHTML
  }

  setContent()

  // show the modal   
  modal.style.display = 'grid'

  // hide the scrollbar  
  document.body.style.overflow = "hidden";

  // animation
  modal_content.style.animation = "fade-in 500ms";

  // slide right
  function slideRight() {
    //increase index by 1
    index++;
    //set index to 0 if k > number of pictures
    if (index >= portfolio_pic.length) {
      index = 0;
    }
    setContent();
  }

  // slide left
  function slideLeft() {
    // decrease index by 1
    index--;
    // set index to 0 if k > number of pictures
    if (index < 0) {
      index = portfolio_pic.length - 1;
    }
    setContent();
  }

  // Event Listener
  next.addEventListener('click', slideRight)
  prev.addEventListener('click', slideLeft)
}


// Close Modal
function closeModal() {
  // animation
  modal_content.style.animation = "fade-out 850ms";

  setTimeout(
    function () {
      modal.style.display = 'none'
      document.body.style.overflow = "visible";
    },
    800)
}

// close modal when clicking the close buttons or outside of the image
modal.addEventListener("click", function (e) {
  if (
    e.target === modal ||
    e.target === close_btn ||
    e.target === close_window
  ) {
    closeModal();
  }
});

// close modal when pressing "ESC"
document.body.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});



