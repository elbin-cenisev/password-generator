// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  alert("Password successfully generated");
}

// Generates the password
function generatePassword() {
  var pwLength = getLength();                                       // holds password length
  var characterPool = getCharacterPool();                           // holds all allowed characters
  var generatedPassword = pickCharacters(pwLength, characterPool);  // holds random collection of allowed characters

  return generatedPassword;

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

// Returns pool of all potential characters
function getCharacterPool() {

  // List of all possible characters, grouped by type
  var lowerCaseLetters = "abcdefghiklmnopqrstuvwxyz";
  var upperCaseLetters = lowerCaseLetters.toUpperCase();
  var numericCharacters = "0123456789";
  var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  var potentialChars = "";  // Holds all allowed characters

  var allowLower = confirm("Should lower-case characters be included?\r\n(Select OK for Yes, Cancel for No)")
  if(allowLower) {
    potentialChars += lowerCaseLetters;
  }

  var allowUpper = confirm("Should upper-case characters be included?\r\n(Select OK for Yes, Cancel for No)")
  if(allowUpper) {
    potentialChars += upperCaseLetters;
  }

  var allowNumeric = confirm("Should numeric characters be included?\r\n(Select OK for Yes, Cancel for No)")
  if(allowNumeric) {
    potentialChars += numericCharacters;
  }

  var allowSpecial = confirm("Should special characters be included?\r\n(Select OK for Yes, Cancel for No)")
  if(allowSpecial) {
    potentialChars += specialCharacters;
  }

  return potentialChars;
}

// Picks characters from pool of allowed characters
function pickCharacters(length, pool) {
  var randomSelection = "";

  // Below code that picks random chars from list is from: https://www.mediacollege.com/internet/javascript/number/random.html
  for(var i = 0; i < length; i++) {
    var randChar = Math.floor(Math.random() * pool.length);
    randomSelection += pool.substring(randChar, randChar+1);
    console.log(randomSelection);
  }

  return randomSelection;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
