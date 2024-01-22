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

const splitSlides = () => {
  const groupSize = 3;
  const chunkCount = Math.ceil(sliderInfo.length / groupSize);

  const result = Array.from({ length: chunkCount }, (_, index) => {
    const start = index * groupSize;
    const end = start + groupSize;
    return sliderInfo.slice(start, end);
  });

  return result;
};

const slides = splitSlides();

function createDots() {
  const groupCount = Math.ceil(slides.length);
  for (let i = 0; i < groupCount; i++) {
    const dot = document.createElement("div");
    dot.className = "dot";
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }
}

function updateDots(index) {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

function updateSlider(index) {
  const imgsContainer = document.querySelector(".partnerImagesContainer");
  sliderContainer.innerHTML = "";

  for (let i = 0; i < slides.length; i++) {
    if (i === index) {
      for (let j = 0; j < slides[i].length; j++) {
        const img = document.createElement("img");
        img.src = slides[i][j].imgUrl;
        img.alt = `Partner ${slides[i][j].id}`;
        sliderContainer.appendChild(img);
      }
    }
  }

  updateDots(index);

  index === slides.length - 1
    ? (imgsContainer.style.justifyContent = "center")
    : (imgsContainer.style.justifyContent = "space-between");
}

function goToSlide(index) {
  currentSlide = index;
  updateSlider(currentSlide);
}

function nextSlide() {
  currentSlide === slides.length - 1
    ? (currentSlide = 0)
    : (currentSlide = currentSlide + 1);

  updateSlider(currentSlide);
}

function previousSlide() {
  currentSlide === 0
    ? (currentSlide = slides.length - 1)
    : (currentSlide = currentSlide - 1);
  updateSlider(currentSlide);
}

nextBtn.addEventListener("click", nextSlide);
previousBtn.addEventListener("click", previousSlide);

createDots();
updateSlider(currentSlide);

setInterval(nextSlide, 3000);
