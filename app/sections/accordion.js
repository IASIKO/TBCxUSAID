const acc = document.querySelectorAll(".questionBox");
const arrow = document.querySelectorAll(".arrow");
const answerTexts = document.querySelectorAll(".answerText");

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
    answerText.style.height === "0px" || answerText.style.height === ""
      ? (answerText.style.height = answerText.scrollHeight + "px")
      : (answerText.style.height = "0");
  });
}
