var message;
var currentStep = 0;
var n = 0;
var salesSteps = [/specific model in mind/i,/new or pre-owned/i,/are there any special features/i,/your name/i,/best phone number/i,/email/i,/when do you want to come in/i,/anything else/i,/great day/i];
var salesAnswers = ["I am looking for a Corolla","new only please","No, just the basic features and no specific color","Andres","555-555-5555","Perdomo, test@gmail.com","I would like to see what you have tomorrow at around 2:00 PM","no, thank you!","Thanks"];
var serviceSteps = [/bring your vehicle/i,/of your vehicle/i,/your name/i,/best phone number/i,/email/i,/anything else/i,/great day/i];
var serviceAnswers = ["Anyday next week would work","2018 Toyota Corolla","Aurora Calisto","555-555-5555","test@gmail.com","that is all. Thank you!","Thanks"];
var partsSteps = [/of your vehicle/i,/installation as well/i,/your name/i,/best phone number/i,/email/i,/anything else/i,/great day/i];
var partsAnswers = ["2015 Honda Civic","just parts please","Jean","555-555-5555","test@gmail.com","I think that is all","Thank you!"];
var chatSteps;
var chatAnswers; 

// CHAT TYPE SELECTOR

$("#salesChat1").on("click",function(){
	$("#chatLog").html("");
	chatSteps = salesSteps;
	chatAnswers = salesAnswers;
	currentStep = 0;
	$(".chatSelection").removeClass("blue");
	$("#leadForm").removeClass("success");
	$("#leadForm").trigger("reset");
	$("#salesChat1").addClass("blue");
 	$("#chatLog").append(
	  	"<div class='guess ui one column grid'>" +
	  		"<div class='row guessRow'>" +
	  			"<img src='https://lh5.googleusercontent.com/-EynEDM3K02k/AAAAAAAAAAI/AAAAAAAAAAA/T6AsZn7xWXg/s40-c-k-mo/photo.jpg' alt='' class='brand icon'>" +
		    	"<div class='guessMsg'>"+ "I am looking to purchase a car" + "</div>" +
		    "</div>" +
		    "<div class='time'>" + moment().format('LTS') + "</div>" +
		"</div>"
  	);
 	$("#chatLog").append(
	  	"<div class='operator ui one column grid'>" +
	  		"<div class='row operatorRow'>" +
		    	"<div class='operatorMsg'>" + "Hello! My name is Anthony. It's great to have you with us!" + "</div>" +
		    "</div>" +
		    "<div class='time'>" + moment().format('LTS') + "</div>" + 
		"</div>"
  	);
})

$("#serviceChat1").on("click",function(){
	$("#chatLog").html("");
	chatSteps = serviceSteps;
	chatAnswers = serviceAnswers;
	currentStep = 0;
	$(".chatSelection").removeClass("blue");
	$("#leadForm").removeClass("success");
	$("#leadForm").trigger("reset");
	$("#serviceChat1").addClass("blue");
 	$("#chatLog").append(
	  	"<div class='guess ui one column grid'>" +
	  		"<div class='row guessRow'>" +
	  			"<img src='https://lh5.googleusercontent.com/-EynEDM3K02k/AAAAAAAAAAI/AAAAAAAAAAA/T6AsZn7xWXg/s40-c-k-mo/photo.jpg' alt='' class='brand icon'>" +
		    	"<div class='guessMsg'>"+ "I need to schedule an oil change" + "</div>" +
		    "</div>" +
		    "<div class='time'>" + moment().format('LTS') + "</div>" +
		"</div>"
  	);
 	$("#chatLog").append(
	  	"<div class='operator ui one column grid'>" +
	  		"<div class='row operatorRow'>" +
		    	"<div class='operatorMsg'>" + "Hello! My name is Anthony. It's great to have you with us!" + "</div>" +
		    "</div>" +
		    "<div class='time'>" + moment().format('LTS') + "</div>" + 
		"</div>"
  	);
})

$("#partsChat1").on("click",function(){
	$("#chatLog").html("");
	chatSteps = partsSteps;
	chatAnswers = partsAnswers;
	currentStep = 0;
	$("#leadForm").removeClass("success");
	$("#leadForm").trigger("reset");
	$(".chatSelection").removeClass("blue");
	$("#partsChat1").addClass("blue");
 	$("#chatLog").append(
	  	"<div class='guess ui one column grid'>" +
	  		"<div class='row guessRow'>" +
	  			"<img src='https://lh5.googleusercontent.com/-EynEDM3K02k/AAAAAAAAAAI/AAAAAAAAAAA/T6AsZn7xWXg/s40-c-k-mo/photo.jpg' alt='' class='brand icon'>" +
		    	"<div class='guessMsg'>"+ "I need to purchase tires for my vehicle" + "</div>" +
		    "</div>" +
		    "<div class='time'>" + moment().format('LTS') + "</div>" +
		"</div>"
  	);
 	$("#chatLog").append(
	  	"<div class='operator ui one column grid'>" +
	  		"<div class='row operatorRow'>" +
		    	"<div class='operatorMsg'>" + "Hello! My name is Anthony. It's great to have you with us!" + "</div>" +
		    "</div>" +
		    "<div class='time'>" + moment().format('LTS') + "</div>" + 
		"</div>"
  	);
})

// PERMANENT EVENT HANDLERS
$("body").on("click",".main", function(){
	let message = $(this).text();
	if(message === "-DEALERSHIP LINKS-"){
		dealerLinks();
	} else if(message === "-CUSTOMER ACKNOWLEDGEMENT-"){
		customerAck();
	} else if(message === "-FACEBOOK-"){
		facebook();
	} else if(message === "-INVENTORY MATCHING-"){
		inventoryMatching();
	} else if(message === "-SALES ENGAGEMENT QUESTIONS-"){
		salesEngQuestions();
	} else if(message === "-SALES LEAD GENERATION-"){
		salesLeadGen();
	} else if(message === "-SECOND LEAD GENERATION ATTEMPT-"){
		secondLeadGen();
	} else if(message === "-SALES APPOINTMENT SETTING-"){
		salesAppointment();
	} else if(message === "-SERVICE & PARTS ENGAGEMENT QUESTIONS-"){
		serviceEngQuestions();
	} else if(message === "-SERVICE & PARTS LEAD GENERATION-"){
		serviceLeadGen();	
	} else if(message === "-CUSTOMER COMPLAINT LEAD GENERATION-"){
		customerComplaint();
	} else if(message === "-ESCALATION-"){
		escalation();
	} else if(message === "-NO REPLY-"){
		noReply();	
	} else if(message === "-CLOSING-"){
		closing();
	} else if(message === "-DEALERSHIP INFORMATION-"){
		dealershipInformation();
	}
});

// TIME 
$(".time").text(moment().format('LTS'));

// ON CLICK SELECTION
	$("body").on("click",".script", function(){
	let message = $(this).text();
	$.trim(message);
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
	  	"<div class='operator ui one column grid'>" +
	  		"<div class='row operatorRow'>" +
		    	"<div class='operatorMsg'>" + message + "</div>" +
		    "</div>" +
		    "<div class='time'>" + moment().format('LTS') + "</div>" + 
		"</div>"
  	);
  	$(".operatorMsg:last").transition({animation  : 'pulse', duration   : '100ms',});
  	$("#operatorText").val('');
  	$("#chatHistory").scrollTop(10000);
  	n = message.search(chatSteps[currentStep]);
  	setTimeout(function(){
  	if (n !== -1) {
 	$("#chatLog").append(
	  	"<div class='guess ui one column grid'>" +
	  		"<div class='row guessRow'>" +
	  			"<img src='https://lh5.googleusercontent.com/-EynEDM3K02k/AAAAAAAAAAI/AAAAAAAAAAA/T6AsZn7xWXg/s40-c-k-mo/photo.jpg' alt='' class='brand icon'>" +
		    	"<div class='guessMsg'>"+ chatAnswers[currentStep] + "</div>" +
		    "</div>" +
		    "<div class='time'>" + moment().format('LTS') + "</div>" +
		"</div>"
  	);
 	currentStep++;
 	$(".guessMsg:last").transition({animation  : 'pulse', duration   : '100ms',});
    } else{
 	$("#chatLog").append(
	  	"<div class='guess ui one column grid'>" +
	  		"<div class='row guessRow'>" +
	  			"<img src='https://lh5.googleusercontent.com/-EynEDM3K02k/AAAAAAAAAAI/AAAAAAAAAAA/T6AsZn7xWXg/s40-c-k-mo/photo.jpg' alt='' class='brand icon'>" +
		    	"<div class='guessMsg'>"+ "I am confused. Please follow chat steps correctly."+ "</div>" +
		    "</div>" +
		    "<div class='time'>" + moment().format('LTS') + "</div>" +
		"</div>"
	);
	$(".guessMsg:last").transition({animation  : 'pulse', duration   : '100ms',});    	
    }
    $("#chatHistory").scrollTop(10000);
	}, 1500);
};
//-------------------------------------------------------------------------------------------------------

// SCRIPT STATES

function main(){
	$(".link.item.script").remove();
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

function dealerLinks(){
	$(".link.item.main").remove();
	$(".operatorScript").append(
	   "<div class='link item script'>Here is the link for directions to our location: https://www.gubatest.com/directions</div>" +
	   "<div class='link item script'>Here is the link to our employment opportunities: https://www.gubatest.com/employment</div>" +
	   "<div class='link item script'>Here is the link to our service scheduling tool: https://www.gubatest.com/schedule-service</div>" +
	   "<div class='link item script'>Here is the link to our online parts order form: https://www.gubatest.com/order-parts</div>" +
	   "<div class='link item script'>Here is the link to our service specials: https://www.gubatest.com/service-specials</div>" +
	   "<div class='link item script'>Here is the link to our parts specials: https://www.gubatest.com/service-specials</div>" +
	   "<div class='link item script'>Here is the link to our credit application: https://www.gubatest.com/credit-application</div>" +
	   "<div class='link item script'>Here is the link to our payment calculator: https://www.gubatest.com/payment-calculator</div>" +
	   "<div class='link item script'>Here is the link to our trade evaluation tool: https://www.gubatest.com/value-your-trade</div>" +
	   "<div class='link item script'>Here is the link to our current sales specials: https://www.gubatest.com/new-sales-specials</div>" +
	   "<div class='link item script'>Here is the link to our factory incentives: https://www.gubatest.com/offers</div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>"
)
};

function customerAck(){
	$(".link.item.main").remove();
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
	   "<div class='link item script'>I am a liason for the online department. While I am part of the online support team, we work from a different building.</div>" +
	   "<div class='link item script'>I see you were chatting with another agent, one moment while I review your messages.</div>"
)
};

function facebook(){
	$(".link.item.main").remove();
	$(".operatorScript").append(
	   "<div class='link item script'>I'm sorry.I don't see that particular message can you clarify what you're referring to please?</div>" +
	   "<div class='link item script'>I'm sorry.I didn't see that post, can you confirm what it is about?</div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>"
)
};

function inventoryMatching(){
	$(".link.item.main").remove();
	$(".operatorScript").append(
	   "<div class='link item script'>Just to be sure, is this the vehicle?</div>" +
	   "<div class='link item script'>Here's one:</div>" +
	   "<div class='link item script'>Are there any special features or color you would like?</div>" +
	   "<div class='link item script'>How do you feel about this ____?</div>" +
	   "<div class='link item script'>I am not seeing that ____ listed.</div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>"
)
};

function salesEngQuestions(){
	$(".link.item.main").remove();
	$(".operatorScript").append(
	   "<div class='link item script'>Do you have a specific model in mind?</div>" +
	   "<div class='link item script'>Do you prefer new or pre-owned?</div>" +
	   "<div class='link item script'>Are you looking to purchase or lease?</div>" +
	   "<div class='link item script'>Typically, leases are offered for new models. Are you interested in leasing a new model?</div>" +
	   "<div class='link item script'>Do you know what lease term or mileage package you will need?</div>" +
	   "<div class='link item script'>Do you have a trade-in?</div>" +
	   "<div class='link item script'>What is the year, make, model and mileage of your trade?</div>" +
	   "<div class='link item script'>Thanks! What model are you interested in trading in for?</div>" +
	   "<div class='link item script'>What price range do you want to stay within?</div>" +
	   "<div class='link item script'>Are you looking for a sedan,SUV,van or truck?</div>" +
	   "<div class='link item script'>What colors do you like?</div>" +
	   "<div class='link item script'>Do you know what trim you like?</div>" +
	   "<div class='link item script'>Any special features that you're looking for?</div>" +
	   "<div class='link item script'>Is that a requirement for you?</div>" +
	   "<div class='link item script'></div>"
)
};

function salesLeadGen(){
	$(".link.item.main").remove();
	$(".operatorScript").append(
	   "<div class='link item script'>Let me get with my team about ____. What's the best phone number and email to follow up with you?</div>" +
	   "<div class='link item script'>Let me do some research and get back with you. What's the best phone number and email to follow up with you?</div>" +
	   "<div class='link item script'>Thanks, just to finish up, can I have your last name and phone number/email address?</div>" +
	   "<div class='link item script'>Thanks, I'll have our sales team follow up with you asap[BRIEF RECAP HERE?].Is there anything else I can assist you with today?</div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>"
)
};

function secondLeadGen(){
	$(".link.item.main").remove();
	$(".operatorScript").append(
	   "<div class='link item script'>No problem, we can email you with ___ if you prefer. May I have your email address please?</div>" +
	   "<div class='link item script'>I need a little more time to get _____. I can have my team follow up with you as soon as they are available.</div>" +
	   "<div class='link item script'>For your privacy. I am unable to see the number you're chatting with me from. Would you mind providing it?</div>" +
	   "<div class='link item script'>What's the best phone number and email for you please?</div>" +
	   "<div class='link item script'>We look forward to seeing you! I'll send this over to my team so that they are ready for you.</div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>"
)
};

function salesAppointment(){
	$(".link.item.main").remove();
	$(".operatorScript").append(
	   "<div class='link item script'>When do you want to come in to take a look at that vehicle?</div>" +
	   "<div class='link item script'>When do you want to come in to take a look at our selection?</div>" +
	   "<div class='link item script'>When do you want to come in to discuss your options?</div>" +
	   "<div class='link item script'>When do you want to come in for your appraisal?</div>" +
	   "<div class='link item script'>Would (DAY & TIME] work for you?</div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>"
)
};

function serviceEngQuestions(){
	$(".link.item.main").remove();
	$(".operatorScript").append(
	   "<div class='link item script'>What day did you want to bring your vehicle in?</div>" +
	   "<div class='link item script'>I apologize. I am not authorized to schedule service appointments within 48 hours of this chat.</div>" +
	   "<div class='link item script'>An appointment is recommended to ensure our availability. What day are you wanting to schedule your appointment for?</div>" +
	   "<div class='link item script'>I am unable to cancel your appointment. To do so, please contact our service department during regular business hours.</div>" +
	   "<div class='link item script'>Were you looking to schedule an appointment?</div>" +
	   "<div class='link item script'>What service do you need?</div>" +
	   "<div class='link item script'>What is the year,make and model of your vehicle?</div>" +
	   "<div class='link item script'>Do you know the approximate mileage?</div>" +
	   "<div class='link item script'>Do you have that recall number handy?</div>" +
	   "<div class='link item script'>I am unable to confirm an appointment for your recall. I need to have my service team confirm if</div>" +
	   "<div class='link item script'>What part are you looking for?</div>" +
	   "<div class='link item script'>Do you only need the price for the part, or for installation as well?</div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>"
)
};

function serviceLeadGen(){
	$(".link.item.main").remove();
	$(".operatorScript").append(
	   "<div class='link item script'>I need to get with my service team about ____. What's the best phone number and email to reach you?</div>" +
	   "<div class='link item script'>I can submit a service appointment request and have my service team confirm _____ for you.What's the best phone number and email to reach you? </div>" +
	   "<div class='link item script'>I need to get with my parts team for you on ____. What's the best phone number and email to reach you?</div>" +
	   "<div class='link item script'>Thanks, just to finish up, may I please have your last name and phone number/email address as an alternate contact?</div>" +
	   "<div class='link item script'>Thanks! I will have our service team follow up with you asap about (BRIEF RECAP HERE). Is there anything else I can assist you with?</div>" +
	   "<div class='link item script'>Thanks! I will have our parts team follow up with you asap about (BRIEF RECAP HERE). Is there anything else I can assist you with?</div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>"
)
};

function customerComplaint(){
	$(".link.item.main").remove();
	$(".operatorScript").append(
	   "<div class='link item script'>Ok, can you tell me on what date _____?</div>" +
	   "<div class='link item script'>Ok, do you recall who you were working with?</div>" +
	   "<div class='link item script'>I understand your frustration, let me have a manager contact you as soon as possible to address your situation</div>" +
	   "<div class='link item script'>Ok, let me have a manager contact you about this. Would you prefer an email or phone call?</div>" +
	   "<div class='link item script'>Which method of contact would you prefer to be reached on?</div>" +
	   "<div class='link item script'>I appreciate you confirming, may I please have your last name and phone number/email address?</div>" +
	   "<div class='link item script'>Thank you. I'm sending this to my team now. A manager will follow up with you shortly.</div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>"
)
};

function escalation(){
	$(".link.item.main").remove();
	$(".operatorScript").append(
	   "<div class='link item script'>I'm sorry to hear that. Let me have a member of my team contact you. What's a good number to reach you at?</div>" +
	   "<div class='link item script'>I understand. Please contact our office if you would like to speak further regarding this.</div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>"
)
};

function noReply(){
	$(".link.item.main").remove();
	$(".operatorScript").append(
	   "<div class='link item script'>Just checking if you are still there. I'll be here if you need help.</div>" +
	   "<div class='link item script'>Do you need another moment?</div>" +
	   "<div class='link item script'>Are you still with me?</div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>"
)
};

function closing(){
	$(".link.item.main").remove();
	$(".operatorScript").append(
	   "<div class='link item script'>Do you have any other questions?</div>" +
	   "<div class='link item script'>Can I help you with anything else?</div>" +
	   "<div class='link item script'>Is there anything else I can do for you?</div>" +
	   "<div class='link item script'>Thank you for visiting us. Have a great day!</div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>"
)
};

function dealershipInformation(){
	$(".link.item.main").remove();
	$(".operatorScript").append(
	   "<div class='link item script'>Test Dealership</div>" +
	   "<div class='link item script'>We are located at test</div>" +
	   "<div class='link item script'>Here is the phone number for our new vehicle sales department: 555-555-5555</div>" + 
	   "<div class='link item script'>Here is the phone number for our used vehicle sales department: 555-555-5555</div>" +
	   "<div class='link item script'>Here is the phone number for our service department: 555-555-5555</div>" +
	   "<div class='link item script'>Here is the phone number for our parts department: 555-555-5555</div>" +
	   "<div class='link item script'>Our sales department is open Monday through Thursday 9am - 8pm</div>" +
	   "<div class='link item script'>Our service department is open Monday through Thursday 9am - 8pm</div>" +
	   "<div class='link item script'>Our parts department is open Monday through Thursday 9am - 8pm</div>" +
	   "<div class='link item script'>This is the link to our staff details: https://www.gubatest.com/staff</div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>" +
	   "<div class='link item script'></div>"
)
};

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

// LEAD SUCCESSFUL

$("#leadForm").submit(function(event){
	$("#leadForm").addClass("success");
	event.preventDefault();
})

$(".department").click(function(){
	$(".department").removeClass("blue");
	$(this).addClass("blue");
})





