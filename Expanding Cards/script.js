let card = document.getElementsByClassName("card");

function expandCard(e) {
  // remove the expand class
  for (n = 0; n < cards.length; n++) {
    cards[n].classList.remove("expand");
  }
  // add the expand class on selected item
  e.target.classList.add("expand");
}


let cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    decrease();
    card.classList.add("expand");
  });
});

function decrease() {
  cards.forEach((card) => {
    card.classList.remove("expand");
  });
}