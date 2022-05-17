/**
 * Author:   Laiy Joshi, Shao Chen
 * Created:   05.04.2022
 * License: public Domain
 **/
//that takes a string as an argument: function sortingHat(str)
 function sortingHat(str) {
//Count letters in str and assigns it to a variable length
   len = str.length;
//modulus (% operator) to get the remainder with 4: mod = length % 4;
   mod = len % 4;
//create a conditional that will return Gryffindor
 if (mod == 0) {
     return("Gryffindor");
 }
//create a conditional that will return Ravenclaw
 else if (mod == 1) {
   return("Ravenclaw");
 }
 //create a conditional that will return Slytherin
 else if (mod == 2) {
   return("Slytherin");
 }
 //create a conditional that will return Hufflepuff
 else {
     return("Hufflepuff");
   }
 }
//reate an click listener attached to #button
 var myButton = document.getElementById("button");
 myButton.addEventListener("click", function() {
   var name = document.getElementById("input").value;
   var house = sortingHat(name);
   newText = ("You have been sorted to " + house);
   document.getElementById("output").innerHTML = newText;
 })
