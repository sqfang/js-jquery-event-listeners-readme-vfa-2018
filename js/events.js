//define functions here
function getIt(){
  $('p').on('click', function(){
    alert("Hey!");
  });
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass("tasty");
  });
}

function pressIt(){
  $().on('keydown', function(){
    
  });
}

function submitIt(){
  
}

$(document).ready(function(){
  getIt();
  frameIt();
// call functions here


});
