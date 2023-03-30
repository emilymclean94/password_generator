let characterLength = 8;
let choiceArray = [];


const upArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
const lowArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const symArray = ["!", "@", "$", "%", "^", "&", "*", "(", "(", "?", "+", "=", "-", ",", "~", ";", ":",]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  const correctPrompts = getPrompts();

  if (correctPrompts) {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");

    passwordText.value = password;

  }


}

function generatePassword() {
  let password = "";
  for (var i = 0; i < characterLength.length, i++){
    var randomIndex = Math.floor(Math.random() * characterLength);
    password = choiceArray + randomIndex;
  }
  return password;
}

function getPrompts() {
  choiceArray = [];

  characterLength = parseInt(window.prompt("Please choose a password between 8 and 128 characters"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    window.prompt("Character length invalid. Please choose a password between 8 and 128 characters.");
    return false;
  }

  if (window.confirm("Would you like your password to contain uppercase letters?")) {
    choiceArray = choiceArray.concat(upArray);
  }
  if (window.confirm("Would you like your password to contain lowercase letters?")) {
    choiceArray = choiceArray.concat(lowArray);
  }
  if (window.confirm("Would you like your password to contain numbers?")) {
    choiceArray = choiceArray.concat(numArray);
  }
  if (window.confirm("Would you like your password to contain special characters?")) {
    choiceArray = choiceArray.concat(symArray);
  }
  return true;
}

