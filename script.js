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
    checkedCheckboxes.forEach(
      (checkbox) => (allowedChars += CHAR_SETS[checkbox.name])
    );
    const passwordLength = passwordLengthInput.valueAsNumber;
    for (let index = 0; index < passwordLength; index++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      generatedPassword += allowedChars[randomIndex];
    }
  }
  return generatedPassword;
}

generatorForm.addEventListener("submit", (e) => {
  e.preventDefault();
  generatePassword();
});
