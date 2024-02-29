let pic = document.getElementsByClassName('pic');
let modal_background = document.getElementById('modal')

document.addEventListener("DOMContentLoaded", autoSlide);

var i = Math.floor(Math.random()*(8));

function autoSlide(){
  modal_background.style.backgroundImage = `url(${pic[i].src})`;
  restartAnimation();
  setInterval(autoChange, 8000)
}

  //auto slide
  function autoChange() {
    if (i >= pic.length - 1) {
      i = 0;
      modal_background.style.backgroundImage = `url(${pic[i].src})`;
      restartAnimation();
    } 
    else {
      i++;
      modal_background.style.backgroundImage = `url(${pic[i].src})`;
      restartAnimation();
    }
  }

    //fade-in animation
    function startAnimation(){
      var k = 0;
      modal_img.style.opacity = k;

      setInterval(fadeIn, 50);

      function fadeIn() {
        if (k >= 50) {
          clearInterval(fadeIn);
        } else {
          k++;
          modal_img.style.opacity = 0.02 * k;
        }
      }
    }

    //reset the keyframe animation
    function restartAnimation(){
      modal_background.classList.remove("active");
      void modal_background.offsetWidth;
      modal_background.classList.add("active");
    }