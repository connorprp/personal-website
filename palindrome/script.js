const textBox = document.getElementById("text-input");
const msg = document.getElementById("result");
const btn = document.getElementById("check-btn");
let originalText = ""

btn.addEventListener("click", getText);

function cleanInputString(text) {
  const cleanString = text.replace(/[^A-Za-z0-9]+/g, "");
  checkPalindrome(cleanString.toLowerCase());
}



function getText() {
  originalText = textBox.value;
  let text = textBox.value;
  if (text === "") {
    alert("Please input a value.")
  } else {
    cleanInputString(text);
  }
}

function checkPalindrome(text) {
  text.toLowerCase();
  const revText = text.split("").reverse().join("");
  if (text === revText) {
    msg.innerText = `${originalText} is a palindrome.`
  } else {
    msg.innerText =  `${originalText} is not a palindrome.`
  }
}