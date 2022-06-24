// Assignment code here

// lets start w/ a simple alert.
// alert('Hi! If you are grading this, be like Adele and "take it easy on me"');

//generatePass function
function generatePassword() {

//lets assign local variables for characters - so it resets everytime the button is pressed
var lowercase = "abcdefghijklmnopqrstuvwxyz" ;
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nums = "0123456789";
var symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~" ;

//lets add some empty variables for the password and characters
var newPass = ""
var characters = ""

//start gathering info w/ a prompt
  var userlength = prompt('Ok so you want a new password! \nLets start with how many characters in length? \nIt has to be longer than 8, but less than 128!');
  // converting input into number. 
  var length = parseInt(userlength);

  // is(if) the num between 8-128:
  if ( length >= 8 && length <= 128 ){
    //lets alert the user of their input. 
    alert('You have chosen ' + length + ', now lets move on to the next step. \n Click "Ok" for your next options.')

        //now lets confirm do we want this option?
        var incLower = confirm('Do you want to include lower case letters?');
        // if we do want this option we will apply it to characters. 
        if (incLower == true) {
          characters += lowercase
          alert('Your new list of variables is\n' + characters);
        }

        var incUpper = confirm('Do you want to include Upper case letters?');
        if (incUpper == true) {
          characters += uppercase
          alert('Your new list of variables is\n' + characters);
        }

        var incNums = confirm('Do you want to include numbers?');
        if (incNums == true) {
          characters += nums
          alert('Your new list of variables is\n' + characters);          
        }

        var incSymbols = confirm('Do you want to include symbols?');
        if (incSymbols == true) {
          characters += symbols
          alert('Your new list of variables is\n' + characters);
        }

    for (var i = 0; i < length; i++) {
      var result = characters.charAt(Math.floor(Math.random() * characters.length));
        newPass += result
   }
  // console.log(newPass);
  // console.log(characters);
  // console.log(' Doing good so far');

return newPass;
}// if it isnt between 8-128, is it a number outside the range?
else if ( length >= 8 || length <= 128) {
  alert(' You have not chosen a number within the parameters.🥺 \n Please start over by clicking Generate Password!')

// determined it isn't a num start over.
} else {alert(' You have not chosen a number.🥺 \n Please start over by clicking Generate Password!')}
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
