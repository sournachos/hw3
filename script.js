// Assignment Code

var low = ["abcdefghijklmnopqrstuvwxyz"];
var up = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var num = [1234567890];
var spec = ["!@#$%^&*()_+={[}]';:?><"];

function generatePassword() {

  var userPassChar = (prompt("Choose a password length between 8 and 128 characters"));

  if (userPassChar > 128 || userPassChar < 8) {
    alert("Please read the password character limitations!");
    return finalPass = "Try again!";
  }

  var charSum = "";

   c = 0;

  lo1 = confirm("Do you want to add lowercase letters?");
  if (lo1) {
    charSum = charSum.concat(low);
    c++;
  }

  up1 = confirm("Do you want to add uppercase letters?");
  if (up1) {
    charSum = charSum.concat(up);
    c++;
  }

  specspec = confirm("Do you want to add special characters?");
  if (specspec) {
    charSum = charSum.concat(spec);
    c++;
  }

  numnum = confirm("Do you want to add numbers?");
  if (numnum) {
    charSum = charSum.concat(num);
    c++;
  }else if(c < 1){
    return  finalPass = "Please choose at least ONE of the password content types.";
  }


  var finalPass = "";

  for (var i = 0; i < userPassChar; i++) {
    finalPass = finalPass + charSum[Math.floor(Math.random() * charSum.length)];
  }

   return finalPass;
}

// Existing Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


