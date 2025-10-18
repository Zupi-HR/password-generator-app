const passwordOutput = document.getElementById("password-output");
const copyButton = document.getElementById("copy-button");
const copyMessage = document.getElementById("copy-message");
const lengthDisplay = document.getElementById("length-display");
const passwordLengthInput = document.getElementById("passLength");
const generatorForm = document.getElementById("password-generator-form");
const strengthText = document.getElementById("strength-text");
const strengthBars = document.querySelector(".strength-bars");

const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");

const checkboxes = document.querySelectorAll(".checkbox-input");

const generateButton = document.getElementById("generate-button");

const CHAR_SETS = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
};

function generatePassword() {
  let allowedChars = "";
  let generatedPassword = "";
  const checkedCheckboxes = document.querySelectorAll(
    ".checkbox-input:checked"
  );
  if (checkedCheckboxes.length > 0) {
    checkedCheckboxes.forEach((checkbox) => {
      allowedChars += CHAR_SETS[checkbox.name];
      const randomIndex = Math.floor(
        Math.random() * CHAR_SETS[checkbox.name].length
      );
      generatedPassword += CHAR_SETS[checkbox.name].at(randomIndex);
    });
    const passwordLength = passwordLengthInput.valueAsNumber;
    const remainingLength = passwordLength - generatedPassword.length;

    for (let index = 0; index < remainingLength; index++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      generatedPassword += allowedChars[randomIndex];
    }
  }
  console.log("old", generatedPassword);
  let charArray = generatedPassword.split("");
  const randomizedPassword = [];
  while (charArray.length > 0) {
    const randomIndex = Math.floor(Math.random() * charArray.length);
    const randomChar = charArray.splice(randomIndex, 1)[0];
    randomizedPassword.push(randomChar);
  }
  console.log(randomizedPassword.join(""));
  return randomizedPassword.join("");
}

generatorForm.addEventListener("submit", (e) => {
  e.preventDefault();
  generatePassword();
});
