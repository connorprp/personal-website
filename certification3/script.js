const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");

const regex1 = /^(1\s?)?[0-9]{3}[\s-]?[0-9]{3}[\s-]?[0-9]{4}$/
const regex2 = /^(1\s?)?[\s]?[\(][0-9]{3}[\s-]?[\)][\s]?[0-9]{3}[\s-]?[0-9]{4}$/

checkBtn.addEventListener("click", () => {
  if (!userInput.value) {
    alert("Please provide a phone number");
  } else {
    checkValid(userInput.value);
  }
});
clearBtn.addEventListener("click", () => { 
    resultsDiv.textContent = "";
    userInput.value = "";
});

function checkValid() {
  const input = userInput.value;
  console.log(input);
  let isValid = "Invalid";
  if (regex1.test(input) || regex2.test(input)) {
    isValid = "Valid";
  };
  resultsDiv.textContent = `${isValid} US number: ${userInput.value}`;
}