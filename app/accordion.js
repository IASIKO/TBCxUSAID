let acc = document.querySelectorAll(".questionBox");
let arrow = document.querySelectorAll(".arrow");
let answerTexts = document.querySelectorAll(".answerText");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    for (let j = 0; j < answerTexts.length; j++) {
      if (i !== j) {
        answerTexts[j].style.height = "0";
        arrow[j].classList.remove("active");
      }
    }

    arrow[i].classList.toggle("active");

    let answerText = this.nextElementSibling;
    if (answerText.style.height === "0px" || answerText.style.height === "") {
      answerText.style.height = answerText.scrollHeight + "px";
    } else {
      answerText.style.height = "0";
    }
  });
}
