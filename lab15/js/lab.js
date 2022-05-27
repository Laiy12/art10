/**
 * Author:   Laiy Joshi, Shao Chen
 * Created:   05.04.2022
 * License: public Domain
 **/
var endpoint = "http://numbersapi.com/random/";
function getAjax(){
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
$("button").click(getAjax);
