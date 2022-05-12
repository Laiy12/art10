/**
 * Author:   Laiy Joshi, Shao Chen
 * Created:   05.04.2022
 * License: public Domain
 **/
// assign a separate button for each section
// button for the about me section
$("#About").append("<button id='c-button'>Button</button>");
// button for the challegnes section
$("#challenges").append("<button id='p-button'>Button</button>");
// button for the results section
$("#results").append("<button id='r-button'>Button</button>");

// An event for each button
$("#c-button").click(function(){

  $(this).parent().toggleClass("special");
})

$("#p-button").click(function(){

  $(this).parent().toggleClass("special");
})

$("#r-button").click(function(){

  $(this).parent().toggleClass("special");

});

// create a new button
// change color of all button using the new button
$(document).on('ready',function(){
$('button').click(function() {
   $('button').not($(this)).css('background', 'grey');
   $(this).css('background','none');
 });
});
