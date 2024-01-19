// header

document.addEventListener("DOMContentLoaded", function () {
  let header = document.querySelector(".headerWrapper");
  let headerHeight = header.offsetHeight;

  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;

    if (scrollTop > headerHeight) {
      header.classList.add("headerTransparent");
    } else {
      header.classList.remove("headerTransparent");
    }
  });
});

// slider

const sliderInfo = [
  { id: 1, imgUrl: "./images/partners/usaid.png" },
  { id: 2, imgUrl: "./images/partners/space.png" },
  { id: 3, imgUrl: "./images/partners/tnet.png" },
  { id: 4, imgUrl: "./images/partners/tegeta.png" },
  { id: 5, imgUrl: "./images/partners/spectre.png" },
  { id: 6, imgUrl: "./images/partners/tbc-leazing.png" },
  { id: 7, imgUrl: "./images/partners/ufc.png" },
];

const sliderContainer = document.getElementById("slider");
const previousBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dotsContainer");
let currentSlide = 0;

function createDots() {
  const groupCount = Math.ceil(sliderInfo.length / 3);
  for (let i = 0; i < groupCount; i++) {
    const dot = document.createElement("div");
    dot.className = "dot";
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }
}

function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

function updateSlider() {
  sliderContainer.innerHTML = "";
  const groupSize = 3;
  const startIdx = Math.floor(currentSlide / groupSize) * groupSize;

  if (currentSlide === sliderInfo.length - 1) {
    const img = document.createElement("img");
    img.src = sliderInfo[6].imgUrl;
    img.alt = `Partner 7`;
    sliderContainer.appendChild(img);
  } else {
    for (let i = 0; i < groupSize; i++) {
      const index = (startIdx + i) % sliderInfo.length;
      const img = document.createElement("img");
      img.src = sliderInfo[index].imgUrl;
      img.alt = `Partner ${index + 1}`;
      sliderContainer.appendChild(img);
    }
  }

  updateDots();
}

function goToSlide(index) {
  currentSlide = index;
  updateSlider();
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % sliderInfo.length;
  updateSlider();
}

function previousSlide() {
  currentSlide = (currentSlide - 1 + sliderInfo.length) % sliderInfo.length;
  updateSlider();
}

previousBtn.addEventListener("click", previousSlide);
nextBtn.addEventListener("click", nextSlide);

createDots();
updateSlider();

setInterval(nextSlide, 3000);

// accordion

let acc = document.querySelectorAll(".questionBox");
let arrow = document.querySelectorAll(".arrow");
let answerTexts = document.querySelectorAll(".answerText");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    for (let j = 0; j < answerTexts.length; j++) {
      if (i !== j) {
        answerTexts[j].style.display = "none";
        arrow[j].classList.remove("active");
      }
    }

    arrow[i].classList.toggle("active");

    let answerText = this.nextElementSibling;
    if (answerText.style.display === "block") {
      answerText.style.display = "none";
    } else {
      answerText.style.display = "block";
    }
  });
}
