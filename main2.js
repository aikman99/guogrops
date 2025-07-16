$("#submit").click( function() {
 
   $.post( $("#form").attr("action"),
           $("#form :input").serializeArray(),
       function(info) {
        $("#response").
            html("Error! Invalid Password, Re-enter password.");
            $("#opo").val("");
    
       });
 
  $("#form").submit( function() {
     return false;
  });
});