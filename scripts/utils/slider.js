const main = document.getElementById("main"); //on sélectionne depuis l'id "main"
const sliderNode = document.getElementById("slider"); //on sélectionne depuis l'id "slider"
const slidesNode = document.querySelector(".slider-media"); //renvoi le 1er élément de la classe "slider-media"
const closeBtn = document.querySelector(".slider_btn-close");
const leftBtn = document.querySelector(".slider_btn-left");
const rightBtn = document.querySelector(".slider_btn-right");

// Open slider on position
const openSlider = () => {
  main.classList.toggle("hidden");
  main.setAttribute("aria-hidden", "true");
  sliderNode.classList.toggle("hidden");
  sliderNode.setAttribute("aria-hidden", "false");
  document.querySelector(".widget").classList.toggle("hidden");
};

// Close slider
const closeSlider = () => {
  main.classList.remove("hidden");
  main.setAttribute("aria-hidden", "false");
  sliderNode.classList.toggle("hidden");
  sliderNode.setAttribute("aria-hidden", "true");
  slidesNode.querySelector(".visible").classList.replace("visible", "hidden");
  document.querySelector(".widget").classList.toggle("hidden");
};

// Select position before opening Slider
const selectStartPosition = (node) => {
  const attribut = node.getAttribute("src");
  const imageSlider = document
    .querySelector(".slider-media")
    .querySelector(`[src="${attribut}"]`);
  imageSlider.parentElement.classList.replace("hidden", "visible");
  openSlider();
};

// Navigate on Slider
const nextSlide = () => {
  const slide = document.querySelector(".visible");
  slide.classList.replace("visible", "hidden");
  slide.nextElementSibling
    ? slide.nextElementSibling.classList.replace("hidden", "visible") //"?" --> alors
    : slidesNode.firstChild.classList.replace("hidden", "visible"); //":" --> autre
};

const previousSlide = () => {
  const slide = document.querySelector(".visible");
  slide.classList.replace("visible", "hidden");
  slide.previousElementSibling
    ? slide.previousElementSibling.classList.replace("hidden", "visible")
    : slidesNode.lastChild.classList.replace("hidden", "visible");
};

// Event - Opening Slider
const displaySlider = () => {
  const sliderMediaNodes = document.querySelectorAll(".medium-container");

  sliderMediaNodes.forEach((node) => {
    //l'évenement est déclenché au click
    node.addEventListener("click", (event) => {
      selectStartPosition(event.target);
    });

    node.addEventListener("keydown", (event) => {
      //l'évenement est déclenché clavier "ENTER"
      if (event.target === document.activeElement && event.key === "Enter") {
        selectStartPosition(event.target);
      }
    });
  });
};

// Event - Close Slider
closeBtn.addEventListener("click", closeSlider); //fermer slider au click de la croix

closeBtn.addEventListener("keydown", (event) => {
  if (event.target === document.activeElement && event.key === "Enter") {
    //fermer slider clavier "ENTER"
    closeSlider();
  }

  if (event.target === document.activeElement && event.key === "Tab") {
    //fermer slider clavier "TAB"
    event.preventDefault();
    leftBtn.focus(); //focus sur la flèche de droite
  }
});

document.addEventListener("keydown", (e) => {
  if (sliderNode.ariaHidden === "false" && e.key === "Escape") {
    //fermer slider clavier "ESCAPE"
    closeSlider();
  }
});

// Event - Navigation Slider
leftBtn.addEventListener("click", previousSlide);
leftBtn.addEventListener("keydown", (e) => {
  if (e.target === document.activeElement && e.key === "Enter") {
    //changer image focus flèche droite au clavier "ENTER"
    previousSlide();
  }
});

rightBtn.addEventListener("click", nextSlide);
rightBtn.addEventListener("keydown", (e) => {
  if (e.target === document.activeElement && e.key === "Enter") {
    //changer image focus flèche gauche au clavier "ENTER"
    previousSlide();
  }
});

document.addEventListener("keydown", (e) => {
  if (sliderNode.ariaHidden === "false" && e.key === "ArrowLeft") {
    //changer image focus flèche droite au clavier "ARROWLEFT"
    previousSlide();
  }
});

document.addEventListener("keydown", (e) => {
  if (sliderNode.ariaHidden === "false" && e.key === "ArrowRight") {
    //changer image focus flèche droite au clavier "ARROWRIGHT"
    nextSlide();
  }
});
