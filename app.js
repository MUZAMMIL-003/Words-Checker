
var vowels = [];
var consonants = [];
function toAdd() {
  var userInput = document.getElementById("userInput").value;
  var userInputLower = userInput.toLowerCase();
  if (userInput.length === 0){
    return;
  }
  var check;
  for (let i = 0; i < userInput.length; i++) {
    if (
      userInputLower.slice(i, i + 1) == "a" ||
      userInputLower.slice(i, i + 1) == "e" ||
      userInputLower.slice(i, i + 1) == "i" ||
      userInputLower.slice(i, i + 1) == "o" ||
      userInputLower.slice(i, i + 1) == "u"
    ) {
      check = true;
      break;
    }
  }

  if (check == true) {
    vowels.push(userInput);
        document.getElementById("wordV").innerHTML = vowels.join('<br>');
    
  } else {
    consonants.push(userInput);
        document.getElementById("wordC").innerHTML =consonants.join('<br>');
    
  }
  document.getElementById("userInput").value = "";
  check = false;
}
