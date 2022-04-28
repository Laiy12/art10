/**
 * Author:   Laiy Joshi, Shao Chen
 * Created:   04.27.2022
 * License: public Domain
 **/
var SortchosenWord = function (){
   var chosenWord = window.prompt("Hey hey! Jot down any word you're thinking of in the prompt below for a surprise.");
    console.log("chosenWord =", chosenWord);
    // sort the string of letters into an array
    var wordArray = chosenWord.split('');
    console.log("wordArray =", wordArray);
    // randomize array into different letters
    var wordArraySort = wordArray.sort();
    console.log("wordArraySort =", wordArraySort);
    // sort the array back into a string of letters
    var wordSorted = wordArraySort.join('');
    console.log("wordSorted =", wordSorted);
    return wordSorted;
}

//output//
document.writeln("And your sorted word is....",
SortchosenWord(), "</br>");
