/**
 * Author:   Laiy Joshi, Shao Chen
 * Created:   05.04.2022
 * License: public Domain
 **/
 // Using the core $.ajax() method
var endpoint = "https://yesno.wtf/#api";
function getAjax(){
$.ajax({
    url: endpoint,
    type: "GET",

  })
.done(function(data){
  $("#output").html(data);
})
   .fail(function(request, error){
     $("output").html("something");


 })
}
$("button").click(getAjax);
