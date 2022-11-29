// Variables for password use

const passwordString = {
  lowerCase: "abcedfghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  symbols: "!@#$%^&*()+=-§±~",
  numbers: "0123456789",
};


// Assignment code here
let generateBtn = document.querySelector("#generate");

function generatePassword (){
  console.log('Hey! you clicked a button'); // To test output function
let passwordSelection = "";
// prompt user for password criteria 
let length = window.prompt("What are the length requirments of your password ? Choose characters between 10 and 120 characters long.");
// Validate the input 
if (length < 10 || length > 120)
window.confirm("Be advised to select a number between 10 and 120");
return;
} else

console.log(length);
// Generate passwrod based on criteria 
let uppercase = window.confirm("Do you request uppercase characters?");
// display password on the page 
return "Generated password will go here!";
}
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
