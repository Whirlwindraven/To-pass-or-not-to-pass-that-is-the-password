// Variables for password use

const passwordString = {
  lowerCase: "abcedfghijklmnopqrstuvwxyz"
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  symbols: "!@#$%^&*()+=-§±~"
  numbers: "0123456789"
}


// Assignment code here
let generateBtn = document.querySelector("#generate");

function generatePassword (){
  console.log('Hey! you clicked a button');

// prompt user for password criteria 

// Validate the input 

// Generate passwrod based on criteria 

// display password on the page 
return "Generated password will go here!";
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
