$ (document).ready(function(){
  $("button#register").click(function(event) {

    if (parseInt(prompt("enter your age")) >= 18){
      $("#old-farts").show();
    } else {
      $("#minors").show();
    }
  });

});
