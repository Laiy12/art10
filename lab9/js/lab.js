/**
 * Author:   Laiy Joshi, Shao Chen
 * Created:   05.04.2022
 * License: public Domain
 **/



 window.onload = function () {

   // Use getElementById() to find your output <div> and assign it to a variable outputEl
   var outputEl = document.getElementById("output");
   console.log("outputEl: ", outputEl);

   // Create a new element with document.createElement("p") and assign it to a variable new1El
   var new1El = document.createElement("p");

   // Change the html attribute of new1El to say "something new.""
   new1El.innerHTML = "something new";


   // Create a new element with document.createElement("p") and assign it to a variable new1El
   var new2El = document.createElement("p");


   // Change the html attribute of new1El to say "something else.
   new2El.innerHTML = "something else"

   // Append both new elements one at a time using appendChild()
   outputEl.appendChild(new1El);
   outputEl.appendChild(new2El);

// create new element for first position
  var new3El = document.createElement("p");
  new3El.innerHTML = "Task X";


// add a new element to the top of an element
outputEl.insertBefore(new3El, new1El);

   new1El.style.color = "#ADD8E6";
   new2El.style.color = "#4682B4";
   outputEl.style.border = "solid 1px lavender";
   outputEl.className = "changed";
   new1El.style.margin = "10px";
   new2El.style.margin = "10px";
   new3El.style.margin = "10px";
  new3El.style.color = "#95AABA";


}
