let count = 0;

let value = document.querySelector(".value");
let btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let classVals = e.target.classList;

    if (classVals.contains("increase")) {
      count++;
    } else if (classVals.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "#111";
    }
    value.textContent = count;
  });
});
