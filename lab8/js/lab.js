/**
 * Author:   Laiy Joshi, Shao Chen
 * Created:   04.27.2022
 * License: public Domain
 **/

function square (x){
    var results = x ** 2
    return results;
}

// Test function
console.log ("The number times itself is", square(1));
console.log ("The number times itself is", square(2));


array = [22, 43, 45, 55]
console.log ("My array", array);

var result = array.map(square);
//should return the output of the squared numbers in the array
setTimeout (function(){
console.log("The results:", results);
}, 5000);

var results = array.map(function(x){
  var results = x/2
  return results;
})
// should return [11, 21.5, 22.5, 27.5]
console.log ("squareroot of array:", results);
