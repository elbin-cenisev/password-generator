// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // List of all possible characters, grouped by type
  var lowerCaseLetters = "abcdefghiklmnopqrstuvwxyz";
  var upperCaseLetters = lowerCaseLetters.toUpperCase();
  var numericCharacters = "0123456789";
  var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~\'"

  var pwLength = getLength(); // holds password length
  
}

// Prompt user for password length between 8 - 128 characters
function getLength() {
  var length = 0;

  while(length < 8 || length > 128) {
    length = 
      prompt("Please enter the desired password's length (8 - 128)", "8");

    if(length < 8 || length > 128) {
      alert("Please enter a number between 8 and 128");
    }
  }

  return length;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
