function generatePassword() {
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

var passArray = [];
//Random number slectors for character choices
if(numLong > 8 || numLong < 126){
 var passLength = numLong;
}else{
  alert("You must select a length between 8 and 126");
}





/*




*/
// does this go in its own function or should it just be part of the generatePassword function

for (var i = 0; i < passLength; i++) {
if (upperChoice) {
  var selectUpper = Math.floor(Math.random() * 26);
  passArray.push(upper[selectUpper])  
}

if (lowerChoice) {
  var selectLower = Math.floor(Math.random() * 26);
  passArray.push(lower[selectLower])
}

if (specialChoice) {
 var selectSpecial = Math.floor(Math.random()*14);
 passArray.push(specail[selectSpecial])
} 
if (numChoice) {
 var selectNum = Math.floor(Math.random()*10);
 passArray.push(num[selectNum])
}
console.log(passArray);


    
    /*Here is where I'm trying to figure out how to add all the above selections. 
    somthing along the lines of 
    options.join(passArray)
    
    
    */
  
  }
}


/* found this code for randomizing array orders was wondring if it would be of any use
for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * i)
  let k = points[i]
  points[i] = points[j]
  points[j] = k
}
*/



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



