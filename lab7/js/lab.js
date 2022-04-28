/**
 * Author:   Laiy Joshi, Shao Chen
 * Created:   04.27.2022
 * License: public Domain
 **/
 function SortchosenWord() {
   var chosenWord = window.prompt("Hey hey! write down any word you're thinking of in the prompt below for a surprise.");
  console.log("chosenWord =", chosenWord);
  var wordArray = chosenWord.split('');
  console.log("wordArray =", wordArray);
  var wordArraySort = wordArray.sort();
  console.log("wordArraySort =", wordArraySort);
  var wordSorted = wordArraySort.join('');
  console.log("wordSorted =", wordSorted);
  return wordSorted;
}

//output//
document.writeln ("look! your word is now sorted:",
SortchosenWord(), "</br>");

}
