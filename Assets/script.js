// Assignment Code
var generateBtn = document.querySelector("#generate");
var lengthOfPasswordNum;
var specialCharac;
var numericCharc;
var lowerCharc;
var upperCharac;

function generatePassword() {
    var result  = "";
    var characters = "";
    
    if (upperCharac) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (numericCharc) {
      characters += "0123456789";
    }

    if (specialCharac) {
      characters += "~`!@#$%^&*()_+-={}[]:\";\'<>?,./|\\";
    }

    if (lowerCharc) {
      characters += "abcdefghijklmnopqrstuvwxyz";
    }

    var charactersLength = characters.length;
      
    for ( var i = 0; i < lengthOfPasswordNum; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
      charactersLength));
    }
   return result;


}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

function getPasswordCriteria() {
  var lengthOfPassword = window.prompt("How many character do you want your password to be?");
  

  if (isNaN(lengthOfPassword)) {
    alert("You did not enter a number. Please enter a number between 8 and 128.");
    return;
  } else {
    lengthOfPasswordNum = parseInt(lengthOfPassword);

    if (lengthOfPasswordNum < 8 || lengthOfPasswordNum > 128) {
      alert("You did not enter a number between 8 and 128.");
      return;
    }
  } 

  specialCharac = confirm("Click OK to confirm adding special characters.");
  numericCharc = confirm("Click OK to confirm adding numeric characters.");
  lowerCharc = confirm("Click OK to confirm adding lowercase characters.");
  upperCharac = confirm("Click OK to confirm adding uppercase characters.");

  writePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

