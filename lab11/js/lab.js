/**
 * Author:   Laiy Joshi, Shao Chen
 * Created:   05.04.2022
 * License: public Domain
 **/
//borrowing the nameSort() from Lab 7
function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// sortUserName - a function that takes user input and sorts the letters
// of their name
function reorderUserName(word) {
    var wordArray = word.toLowerCase().split('');
    var newArray = shuffleArray(wordArray);
    return newArray.join('');
}

// given a string, return string in Title Case
// thanks to https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

// find the button element
buttonEl = document.getElementById("my-button");
console.log("button element:", buttonEl);
// find the form element
inputEl = document.getElementById("user-name");
console.log("input element:", inputEl);
// find output element
outputEl = document.getElementById("output");
console.log("output element:", outputEl);

// add an event listener to button
buttonEl.addEventListener("click", function(){
  // get value from name element
  var userName = inputEl.value;
  // modify value - either sort or shuffle
  var newName = toTitleCase(reorderUserName(userName));
  // put value in output element
  outputEl.innerHTML = "<p id=name-results>" + newName + "</p>";
});

// glitch effect
// thanks to https://stackoverflow.com/questions/64816798/glitch-effect-with-javascript
const text = 'This is task X %'

// slect the letters that will move
const alphaCaps = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', "'"];
const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', "'"];
var output = "";
var progress = 0;
const len = text.length;


function glitch() {
  if (progress >= len) {
    return;
  }
  var randomNums = Math.floor(Math.random() * alpha.length)
  if (alpha[randomNums] == text[progress] || alphaCaps[randomNums] == text[progress]) {
    output += text[progress];
    document.getElementById("text").innerHTML = `${output}`
    progress++;
  } else {
    document.getElementById("text").innerHTML = `${output}${alpha[randomNums]}`
  }
  requestAnimationFrame(glitch);
}

// button function
window.addEventListener("load",function() {
  document.getElementById("but").addEventListener("click",function() {
    this.hidden=true;
    glitch();
  });
})
