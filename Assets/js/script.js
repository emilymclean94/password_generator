// Assignment Code
var generateBtn = document.querySelector("#generate");
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
const symbol = ["!", "@", "$" ,"%", "^", "&", "*", "(", "(", "?", "+", "=", "-", ",", "~", ";", ":",]

console.log(uppercase)
console.log(lowercase)
console.log(numbers)
console.log(symbol)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
