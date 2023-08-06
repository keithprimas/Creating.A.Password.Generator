// Assignment code here

function generatePassword(length) {
  let password = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

function getPasswordCriteria() {
  const length = parseInt(prompt("Enter password length"));
  const includeLowercase = confirm("Include lowercase letters?");
  const includeUppercase = confirm("Include uppercase letters?");
  const includeNumbers = confirm("Include numbers?");
  const includeSpecialChars = confirm("Include special characters?");
  return {
    length,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSpecialChars,
  };
}


const generateButton = document.getElementById('generate-button');
generateButton.addEventListener('click', () => {
  const passwordLength = getPasswordCriteria().length;
  const generatedPassword = generatePassword(passwordLength);
  const passwordDisplay = document.getElementById('password-display');
  passwordDisplay.textContent = generatedPassword;
});

const displayButton = document.getElementById('generate-button');
displayButton.addEventListener('click', () => {
  const myParagraph = document.getElementById('password-display');
  const myTextarea = document.getElementById('password');
  myTextarea.value = passwordDisplay.textContent;
});

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
