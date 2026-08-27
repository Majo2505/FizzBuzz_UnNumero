//import sumar from "./sumador";
import fizzBuzz from "./fizzbuzz";

const first = document.querySelector("#primer-numero");
const div = document.querySelector("#resultado-div");
const formFB = document.querySelector("#FizzBuzz-form")

formFB.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);

  div.innerHTML = "<p>" + fizzBuzz(firstNumber) + "</p>";
});

