var generateBtn = document.querySelector("#generate");            // Located HTML from DOM  to able to manipulated webpage

function generatePassword(){
var finalArray=[]
var finalPassword = "";                      //Created function and Assigned Varaiables

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numeric = ["1","2","3","4","5","6","7","8","9","0"]                         //created Variable with strings for password generate selection
var specialCase = ["!","%","*","@","#","$","^","&","(",")","-","_","+","=","[","]",";","?","<",">","/",":"]

var passwordLength = prompt("Please establish length of password")
var lowercaseLength = confirm("Please choose lowercase")
var specialcaseLength = confirm("Please choose specialcase")
var uppercaseLength = confirm("Please choose uppercase")
var numericLength = confirm("Please choose numeric")
console.log(lowercaseLength, specialcaseLength, uppercaseLength, numericLength,)

if (lowercaseLength === true) {
  finalArray=finalArray.concat(lowerCase)
}                                                                               //combinded arrays using concat
if (specialcaseLength === true) {
  finalArray=finalArray.concat(specialCase)
}
if (uppercaseLength=== true) {
  finalArray=finalArray.concat(upperCase)
}

if (numericLength=== true) {
  finalArray=finalArray.concat(numeric)
}




for(var i = 0; i<passwordLength;i++){
  var randomnumber = Math.floor(Math.random()*finalArray.length)       //created for-loop 
  finalPassword += finalArray[randomnumber]
}

  return finalPassword                                      // stopped for-lop

} 
















function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);         // Added event listner











