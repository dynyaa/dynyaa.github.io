$("h1").click(function(){
    $("h1").css("color", "AntiqueWhite");
})


$(document).ready(function(){
    $("h1").mouseover(function(){
      $("h1").css("background-color", "yellow");
    });
    $("h1").mouseout(function(){
      $("h1").css("background-color", "lightgray");
    });
  });

  document.getElementById("liver").addEventListener("click",click)
function click() {
    var audio = new Audio('ynwa.mp3');
    audio.play(); 
}