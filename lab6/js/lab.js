/**
 * Author:  Laiy joshi
 * Created:   25.04.2002
 * License: Public Domain
 * .
 **/

 // Define Variables//
 myTransport
['walking', 'bus', 'car'];

myMainRide = {
  make:'Toyota',
  model: 'Prius',
  color: 'Purple',
  year: '1995',
  age: function(){
    return 2022 - age;
  }
}

// output//
document.writeln("kinds of transport I use: ", myTransport, "</br>"");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
