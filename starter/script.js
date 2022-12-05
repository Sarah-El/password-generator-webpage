// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = prompt("How many charcters would you like your password to be? Please enter a value between 10 - 64");
  passwordLength = parseInt(passwordLength);
  var includeLowercase = confirm("Would you like your password to include lowercase characters? click 'ok' for yes.");
  var includeUppercase = confirm("Would you like your password to include uppercase characters? click 'ok' for yes.");
  var includeNumber = confirm("Would you like your password to include numbers? click 'ok' for yes.");
  var specialCharacters = confirm("Would you like your password to include special characters? click 'ok' for yes.");
  console.log("password length =", passwordLength);
  console.log("type of password length =", typeof(passwordLength));
  if (passwordLength.length < 10|| passwordLength.length > 64) {
    alert("Sorry, your character length must be between 10 and 64 characters. Please start over.")
    getPasswordOptions ();
  }
  var passwordOptions = {
    passwordLength : passwordLength,
    includeLowercase : includeLowercase,
    includeUppercase : includeUppercase,
    includeNumber : includeNumber,
    specialCharacters : specialCharacters
  }

  return passwordOptions;
}



// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var random = arr[randomIndex];
  return random;  
}


// Function to generate password with user input
function generatePassword() {
  var userInput = getPasswordOptions();

  var validCharacters = [];

  if (userInput.includeLowercase === true){
    validCharacters = validCharacters.concat(lowerCasedCharacters);
    console.log("valid characters = ", validCharacters);
  }
  if (userInput.includeUppercase === true){
    validCharacters = validCharacters.concat(upperCasedCharacters);
    console.log("valid characters = ", validCharacters);
  }
  if (userInput.includeNumber === true){
    validCharacters = validCharacters.concat(numericCharacters);
    console.log("valid characters = ", validCharacters);
  }
  if (userInput.specialCharacters === true){
    validCharacters = validCharacters.concat(specialCharacters);
    console.log("valid characters = ", validCharacters);
  }
  if (validCharacters.length === 0){
    alert("At least one character type should be selected. please start over");
    generatePassword();
  }

  var randomPassword = "";
  for (var i = 0; i < userInput.passwordLength; i++) {
    randomPassword += getRandom(validCharacters);
    console.log("random password = ", randomPassword);
  }
  return randomPassword;
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);