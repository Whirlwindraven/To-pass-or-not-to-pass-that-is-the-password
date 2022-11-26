// Assignment code here

var generateBtn = document.querySelector("#generate");

function generatePassword (){
  console.log('Hey! you clicked a button');

// prompt user for password criteria 

// Validate the input 

// Generate passwrod based on criteria 

// display password on the page 
return "Generated password will go here!";
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
