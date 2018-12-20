var message;
var currentStep = 0;
var n = 0;
var salesSteps = ["new","model","features","name","number","email","anything"];
var salesAnswers = ["new","corolla","no","Andres","555-555-5555","test@gmail.com","no, thank you!"]

// PERMANENT EVENT HANDLERS
$("body").on("click",".main", function(){
	let message = $(this).text();
	if(message === "-CUSTOMER ACKNOWLEDGEMENT-"){
		customerAck();
	}
});

// ON CLICK SELECTION
	$("body").on("click",".script", function(){
	let message = $(this).text();
	$.trim(message);
	console.log(message);
	$("#operatorText").val($("#operatorText").val() + message);
	});

// ClOSE SCRIPT 

$("#close").on("click", function(){
	$(".link.item.main").remove();
	main();
});

// RIGHT CLICK CLOSE SCRIPT

$(".operatorScript").on("contextmenu", function(ev){
	ev.preventDefault();
	$(".link.item.main").remove();
	main();
	return false;
})

// CREATE MESSAGE FUNCTION
function create(message){
	message = $("textarea").val();
 	$("#chatLog").append(
	  	"<div class='operator'>" +
		    "<div class='operatorMsg'>" + message + "</div>" +
		"</div>"
  	);
  	$("#operatorText").val('');
  	n = message.search(salesSteps[currentStep]);
  	if (n !== -1) {
 	$("#chatLog").append(
	  	"<div class='guess'>" +
		    "<div class='guessMsg'>"+ salesAnswers[currentStep] + "</div>" +
		"</div>"
  	);
 	currentStep++;
  }
};

//-------------------------------------------------------------------------------------------------------

// SCRIPT STATES

function main(){
	//remove current script
	$(".link.item.script").remove();
	//update script
	$(".operatorScript").append(
	   "<div class='link item main'>-DEALERSHIP LINKS-</div>" +
	   "<div class='link item main'>-CUSTOMER ACKNOWLEDGEMENT-</div>" +
	   "<div class='link item main'>-FACEBOOK-</div>" +
	   "<div class='link item main'>-INVENTORY MATCHING-</div>" +
	   "<div class='link item main'>-SALES ENGAGEMENT QUESTIONS-</div>" +
	   "<div class='link item main'>-SALES LEAD GENERATION-</div>" +
	   "<div class='link item main'>-SECOND LEAD GENERATION ATTEMPT-</div>" +
	   "<div class='link item main'>-SALES APPOINTMENT SETTING-</div>" +
	   "<div class='link item main'>-SERVICE & PARTS ENGAGEMENT QUESTIONS-</div>" +
	   "<div class='link item main'>-SERVICE & PARTS LEAD GENERATION-</div>" +
	   "<div class='link item main'>-CUSTOMER COMPLAINT LEAD GENERATION-</div>" +
	   "<div class='link item main'>-ESCALATION-</div>" +
	   "<div class='link item main'>-NO REPLY-</div>" +
	   "<div class='link item main'>-CLOSING-</div>" +
	   "<div class='link item main'>-DEALERSHIP INFORMATION-</div>"
)
};

function customerAck(){
	//remove main script
	$(".link.item.main").remove();
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
}


//----------------------------------------------------------------------------------------------------------------------------------------


// SEND MESSAGES WITH BUTTON
$("#send").click(function(){
  if($("#operatorText").val() != ''){
  	var message = $("textarea").val();
  	create();

}
}); 

 // SEND MESSAGES WITH ENTER
$("html").keyup(function(event){
  if(event.which === 13 & $("#operatorText").val() != ''){
  	var message = $("textarea").val();
  	create();
}	
});







