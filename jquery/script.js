//window.onload == $( document ).ready(function()=>{}) == $(function()=>{})
//$('.gt').function()
$( document ).ready(function() {
    console.log( "document loaded" );
});

$( window ).on( "load", function() {
    console.log( "window loaded" );
});

//javascript
var div = document.querySelector(".gt");
var info = document.querySelector(".gt").getAttribute("info");
console.log(info);
document.querySelector(".gt").setAttribute("info", "two div");
console.log(document.querySelector(".gt").getAttribute("info"));
//jquery
$('.gt').attr("info", "three div");
$( ".gt" ).attr({
    title: "all titles are the same too!",
    href: "somethingNew.html"
});
var a= $(".gt").attr("info");
console.log(a);
//$( "ul li" ).eq( 5 ) == $( "ul li:nth-child(6)" )
$('.gt').text("<p>hello world</p>")
// $('.gt').addClass("className");
// $('.gt').addClass("className");
// $('.gt').removeClass("className");
$('.gt').width();
$('.gt').width("100%");
$("input").val("value");
//$( "<p>This is a new paragraph</p>" ); =>  var x= document.createElement("p"); x.innerhtml = "<p>This is a new paragraph</p>";

$( document ).ready(function(){
    $( "input" ).on( "keydown focus", function(e) {
        console.log( e );
    });
});