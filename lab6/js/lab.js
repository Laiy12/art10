/**
 * Author:  Laiy joshi and Shao Chen
 * Created:   04.25.2002
 * License: Public Domain
 **/

 // Define Variables//
 var myTransport = ['walking', 'bus', 'car']

var myMainRide = {
  make:'Toyota',
  model: 'Prius',
  color: 'Purple',
  year: '1995',

};


// output//
document.writeln("kinds of transport I use: ", myTransport + "</br>"");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
