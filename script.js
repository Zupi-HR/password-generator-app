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

function shuffleString(string) {
  let charArray = string.split("");
  for (let i = charArray.length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    [charArray[randomIndex], charArray[i - 1]] = [
      charArray[i - 1],
      charArray[randomIndex],
    ];
  }
  return charArray.join("");
}

function generatePassword() {
  let allowedChars = "";
  let generatedPassword = "";
  const passwordLength = passwordLengthInput.valueAsNumber;
  const checkedCheckboxes = document.querySelectorAll(
    ".checkbox-input:checked"
  );

  if (checkedCheckboxes.length > 0) {
    checkedCheckboxes.forEach((checkbox) => {
      allowedChars += CHAR_SETS[checkbox.name];
    });
  } else {
    return "";
  }

  if (passwordLength >= checkedCheckboxes.length) {
    checkedCheckboxes.forEach((checkbox) => {
      const randomIndex = Math.floor(
        Math.random() * CHAR_SETS[checkbox.name].length
      );
      generatedPassword += CHAR_SETS[checkbox.name].at(randomIndex);
    });
  }

  const remainingLength = passwordLength - generatedPassword.length;

  for (let index = 0; index < remainingLength; index++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    generatedPassword += allowedChars[randomIndex];
  }
  const shuffledPassword = shuffleString(generatedPassword);
  return shuffledPassword;
}

generatorForm.addEventListener("submit", (e) => {
  e.preventDefault();
  generatePassword();
});
