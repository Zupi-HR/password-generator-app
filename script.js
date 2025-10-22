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
  const passwordChars = [];
  const passwordLength = passwordLengthInput.valueAsNumber;
  const checkedCheckboxes = document.querySelectorAll(
    ".checkbox-input:checked"
  );

  if (checkedCheckboxes.length === 0 || passwordLength === 0) {
    return "";
  }

  checkedCheckboxes.forEach((checkbox) => {
    const charSet = CHAR_SETS[checkbox.name];
    allowedChars += charSet;
    const randomIndex = Math.floor(Math.random() * charSet.length);
    passwordChars.push(charSet[randomIndex]);
  });

  if (passwordChars.length > passwordLength) {
    return shuffleString(passwordChars.join("")).slice(0, passwordLength);
  }

  const remainingLength = passwordLength - passwordChars.length;
  for (let index = 0; index < remainingLength; index++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    passwordChars.push(allowedChars[randomIndex]);
  }

  return shuffleString(passwordChars.join(""));
}

copyButton.addEventListener("click", async () => {
  const password = passwordOutput.textContent;
  if (!password || password === "P4$5W0rD!") {
    return;
  }
  await navigator.clipboard.writeText(password);
  copyMessage.classList.add("show");
  setTimeout(() => copyMessage.classList.remove("show"), 2000);
});

passwordLengthInput.addEventListener("input", () => {
  const currentValue = passwordLengthInput.value;
  lengthDisplay.textContent = currentValue;
});

generatorForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const generatedPassword = generatePassword();
  passwordOutput.textContent = generatedPassword;
  if (generatedPassword) {
    passwordOutput.classList.add("password-active");
  } else {
    passwordOutput.classList.remove("password-active");
  }
});
