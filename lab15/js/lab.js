/**
 * Author:   Laiy Joshi, Shao Chen
 * Created:   05.04.2022
 * License: public Domain
 **/
//The url for the request
var endpoint = "http://numbersapi.com/random/";
// call the function
function getAjax(){
//data to send, will be converted to Query string
$.ajax({
  url : endpoint,
  type: "GET"
})
.done(function(data){
  $("#output").html(data);
})
.fail(function(request, error){
  $("output").html("something");
})
}
