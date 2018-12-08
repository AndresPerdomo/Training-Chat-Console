
// SEND MESSAGES WITH BUTTON
$("#send").click(function(){
  if($("#operatorText").val() != ''){
  	let message = $("textarea").val();
  	console.log(message);
  	$("#chatLog").append(
	  	"<div class='operator'>" +
		    "<div class='operatorMsg'>" + message + "</div>" +
		"</div>"
  		);
  	$("#operatorText").val('');
}
}); 

 // SEND MESSAGES WITH ENTER
$("html").keyup(function(event){
  if(event.which === 13 & $("#operatorText").val() != ''){
  	let message = $("textarea").val();
  	console.log(message);
  	$("#chatLog").append(
	  	"<div class='operator'>" +
		    "<div class='operatorMsg'>" + message + "</div>" +
		"</div>"
  		);
  	$("#operatorText").val('');
  	}	
});

// SCRIPT SELECTION ON SCREEN

$(".script").on("click", function(){
	let message = $(this).text();
	$.trim(message);
	console.log(message);
	$("#operatorText").val($("#operatorText").val() + message);
});



// ClOSE SCRIPT 

$("#close").on("click", function(){

	//remove previous script
	console.log("clicked");
	$(".link.item.script").remove();
	//update script
	$(".operatorScript").append(
		   "<div class='link item script'>Hey, how can I help you?</div>" +
		   "<div class='link item script'>I would be happy to help you with ____</div>" +
		   "<div class='link item script'>Is this regarding sales, service or parts?</div>" +
		   "<div class='link item script'>I'm sorry to hear that, let me see how I can help. May I have your name?</div>" +
		   "<div class='link item script'>May I have your name?</div>" +
		   "<div class='link item script'>Pleasure chatting with you _____.</div>" +
		   "<div class='link item script'>Just to clarify, are you able to see my previous message?</div>" +
		   "<div class='link item script'>Noted! I will make sure to put that into your request.</div>" +
		   "<div class='link item script'>Okay! Take your time.</div>" +
		   "<div class='link item script'>Let me look into that for you, just a moment.</div>" +
		   "<div class='link item script'>Let us know if you need anything. Have a nice day!</div>" +
		   "<div class='link item script'>I can assure you I am a real person and my name is _____</div>" +
		   "<div class='link item script'>I am a liason for the online department. While I am part of the online support team, we work</div>" +
		   "<div class='link item script'>I see you were chatting with another agent, one moment while I review your messages.</div>"
)
	// SCRIPT SELECTION ON SCREEN

	$(".script").on("click", function(){
		let message = $(this).text();
		$.trim(message);
		console.log(message);
		$("#operatorText").val($("#operatorText").val() + message);
	});

});





