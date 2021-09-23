
// Array holding characters
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specail = ["!", "#", "$", "%", "&", "*", "+", "/", "<", "=", ">", "?", "@", "|"]

//question prompts
var numLong = prompt("How long do you want your passowrd to be?")
var upperChoice = confirm("Do you want uppercase letters?")
var lowerChoice = confirm("Do you want lowercase letters?")
var specialChoice = confirm("Do you want specail characters?")
var numChoice = confirm("Do you want Numbers?")

//Random number slectors for character choices
if(numLong > 8 || numLong < 126){
 var passLength = numLong;
}else{
  alert("You must select a length between 8 and 126")
}

for (let i = 0; i < passLength; i++) {
  const element = array[i];
  
}
if (upperChoice == true) {
  var selectUpper = Math.floor(Math.random() * 26);
} else {

}

if (lowerChoice = true) {
  var selectLower = Math.floor(Math.random() * 26);
} else {

}

if (specialChoice = true) {
 var selectSpecial = Math.floor(Math.random()*14);
} else {

}

if (numChoice = true) {
 var selectNum = Math.floor(Math.random()*10);
} else {

}
//creating funtion to generate password
function generatePassword() {

}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



