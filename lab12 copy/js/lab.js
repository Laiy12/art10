/**
 * Author:   Laiy Joshi,Shao Chen
 * Created:   05.04.2022
 * License: public Domain
 **/
 function FizzBuzz(){
  // Loop through numbers 1 to 200, listing them as you go
     var oneLongString = "";
     for (var i=1; i<200; i++) {
    // If the number is a multiple of 7, it should print "Boom!"

    // If the number is a multiple of 3 and 5, if should print "FizzBuzz!"
      if (i % 15 == 0) {
        console.log("FizzBuzz!");
      oneLongString += i + "FizzBuzz!<br>";

      }

    // If the number is a multiple of 7 and 5, it should print ""
      if (i % 35 == 0) {
        console.log("BoomBuzz!");
        oneLongString += i + "BoomBuzz!<br>";
      }

        // If the number is a multiple of 7 and 3, it should print "BoomFizz!"
      if (i % 21 == 0) {
        console.log("BoomFizz!");
        oneLongString += i + "BoomFizz!<br>";
      }

      else if (i % 7 == 0) {
        console.log("Boom!");
         oneLongString += i + "Boom!<br>";
      }
      // If the number is a multiple of 5, it should print "Buzz!"
      else if (i % 5 == 0) {
        console.log("Buzz!");
       oneLongString += i + "Buzz!<br>";
      }
      // If the number is a multiple of 3, if should print "Fizz!"
      else if (i % 3 == 0) {
        console.log("Fizz!");
       oneLongString += i + "Fizz!<br>";
      }
      else {
        console.log(i);
      }
    }
    $("#output").html(oneLongString);
  }
