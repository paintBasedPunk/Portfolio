let container = document.getElementById("container");

function setAngle() {
  let height = window.innerHeight;
  let width = window.innerWidth;

  let angle = (Math.atan(height / width) * 180) / Math.PI;

  container.style.backgroundImage =
    `linear-gradient(${angle}deg,` + "#fff 0%" + ", " + "#000 50%" + ")";
}

window.addEventListener("load", setAngle);
window.addEventListener("resize", setAngle);
