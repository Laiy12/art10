/**
 * Author:   Laiy Joshi, Shao Chen
 * Created:   04.27.2022
 * License: public Domain
 **/
 function SortchosenWord() {
  var  Sortwords = window.prompt ("Hi please tell me a word");
  console.log("cosenWord = ", chosenWord);
  var nameArray = chosenWord.split('');
  console.log("nameArray =", nameArray);
  var nameArraySort = nameArray.sort();
  console.log("nameArray =", wordsorted);
  return wordsorted;
  }

//output//
document.writeln ("look! your word is now sorted:",
SortchosenWord(), "</br>");

}
