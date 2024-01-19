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
