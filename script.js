$(document).ready(function(){
    	$("#submit").click(function() {
        console.log("clicked...waiting...");
    	    setTimeout(
            function() {
        	$(".whatever-styling-you-want").html($("#textBox").val());
        	$("#opo").val("");
            },
            3000);
        });
    });