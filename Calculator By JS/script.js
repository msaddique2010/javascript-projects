let input = document.querySelector(".display");
let buttons = document.querySelectorAll(".btn");
let c = document.querySelector(".clear");
let sum = document.querySelector("#sum");
let sub = document.querySelector("#sub");
let mul = document.querySelector("#mul");
let div = document.querySelector("#div");
let equal = document.querySelector(".equal");

// Add digits
buttons.forEach(btn => {
  btn.addEventListener("click", function () {
    input.value += btn.innerText;
  });
});

// Operators
sum.addEventListener("click", function () {
  input.value += "+";
});
sub.addEventListener("click", function () {
  input.value += "-";
});
mul.addEventListener("click", function () {
  input.value += "*";
});
div.addEventListener("click", function () {
  input.value += "/";
});

// Clear
c.addEventListener("click", function () {
  input.value = "";
});

// Equal
equal.addEventListener("click", function () {
  try {
    input.value = eval(input.value);
  } catch {
    input.value = "Error";
  }
});
