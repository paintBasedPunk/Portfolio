// --- Template Setting ---
let navbar = document.querySelector("nav");
let navbarHeight = navbar.offsetHeight;

let footer = document.querySelector("footer");
let footerHeight = footer.offsetHeight;

// calculate the height of the container
let containerHeight = window.innerHeight - navbarHeight;

// set the value of the "--height" variable from the css file
document.documentElement.style.setProperty(
  "--container-height",
  containerHeight + "px"
);

// Set the Navbar Height
document.documentElement.style.setProperty(
  "--navbar-height",
  navbarHeight + "px"
);

// Set the Navbar Height
document.documentElement.style.setProperty(
  "--footer-height",
  footerHeight + "px"
);

// --- Change Navbar Background-Color on Scroll ---
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 1) {
    navbar.style.backgroundColor = "rgba(30, 30, 30, 1)";
  }
  if (window.pageYOffset < 1) {
    navbar.style.backgroundColor = "rgba(30, 30, 30, 0)";
  }
});
