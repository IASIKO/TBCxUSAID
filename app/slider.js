const sliderInfo = [
  { id: 1, imgUrl: "./assets/images/partners/usaid.png" },
  { id: 2, imgUrl: "./assets/images/partners/space.png" },
  { id: 3, imgUrl: "./assets/images/partners/tnet.png" },
  { id: 4, imgUrl: "./assets/images/partners/tegeta.png" },
  { id: 5, imgUrl: "./assets/images/partners/spectre.png" },
  { id: 6, imgUrl: "./assets/images/partners/tbc-leazing.png" },
  { id: 7, imgUrl: "./assets/images/partners/ufc.png" },
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
