$ (document).ready(function(){
  var votingprompt = parseInt(prompt ("Please enter your age. You must be 18 or older to vote.)"));
  if(votingprompt >= 18){
    $("#old-farts").show();
  } else {
    $("#minors").show();
  }
});
