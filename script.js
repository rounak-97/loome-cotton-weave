const heroImg = document.querySelector(".hero-img");
const thumbCards = document.querySelectorAll(".thumb-card");

function clearActiveThumb() {
  for (let i = 0; i < thumbCards.length; i++) {
    thumbCards[i].classList.remove("active");
  }
}

// Swap hero image and move active border on thumbnail click
for (let i = 0; i < thumbCards.length; i++) {
  const card = thumbCards[i];

  card.addEventListener("click", function () {
    const clickedImg = card.querySelector("img");
    heroImg.src = clickedImg.src;

    clearActiveThumb();
    card.classList.add("active");
  });
}
