let lengthInp = +document.getElementById("length").value;
let uppercaseInp = document.getElementById("uppercase").checked;
let lowercaseInp = document.getElementById("lowercase").checked;
let numbersInp = document.getElementById("numbers").checked;
let symbolsInp = document.getElementById("symbols").checked;

const button = document.querySelector("button");
const passwordContainer = document.getElementById("password");

button.addEventListener("click", () => {
  lengthInp = +document.getElementById("length").value;
  uppercaseInp = document.getElementById("uppercase").checked;
  lowercaseInp = document.getElementById("lowercase").checked;
  numbersInp = document.getElementById("numbers").checked;
  symbolsInp = document.getElementById("symbols").checked;

  const password =
    getRandomLower() + getRandomNumber() + getRandomSymbol() + getRandomUpper();

  passwordContainer.innerHTML = password;
  console.log(lengthInp, uppercaseInp, lowercaseInp);
});

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "~!@#$%^&*()-_=+/*,.<>?/;:[{}]|";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
