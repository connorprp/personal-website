const input = document.getElementById("number");
const button = document.getElementById("convert-btn");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  if(!input.value) {
    output.innerText = "Please enter a valid number.";
  } else if(input.value < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (input.value > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
  } else {
    output.innerText = convertRomanNum(input.value);
  }
});

function convertRomanNum(input) {
  const result = [];
  const refRoman = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  const refInt = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  while(input > 0) {
    for (let i = 0; i < refRoman.length; i++) {
      if (input - refInt[i] >= 0) {
        result.push(refRoman[i]);
        input -= refInt[i];
        break;
      }
    }
  }
  return result.join("");
}