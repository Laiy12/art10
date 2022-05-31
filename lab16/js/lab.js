/**
 * Author:   Laiy Joshi, Shao Chen
 * Created:   05.04.2022
 * License: public Domain
 **/
 // call the function
 function getAjax(){
 $.ajax({
   dataType: 'json',
   url: "https://xkcd.com/info.0.json",
   data: {
"month": "5",
"num": 2626,
"link": "",
"year": "2022",
"news": "",
"safe_title": "d65536",
"transcript": "",
"alt": "They're robust against quantum attacks because it's hard to make a quantum system that large.",
"img": "https://imgs.xkcd.com/comics/d65536.png",
"title": "d65536",
"day": "30"
},
   success: function(data) {
     // do stuff
     console.log(data);
   }
 });
}
$("button").click(getAjax);
