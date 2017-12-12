//Declare global variables
//==============================================
var targetScore;		//randomly generated score
var	winCount =0;		
var	lossCount = 0;
var shoeValues = [];	//array to store random values
var counter = 0;

//Functions
//================================================
//function to determine the random target number
		function targetNumber() {
		targetScore = Math.floor(Math.random()*(120-19+1)+19);
		
		$("#scoreDisplay").text(targetScore);
		$("#userScore").text(counter);
	};
		

//function to determine 4 random, non-repeating numbers - one for each pair of shoes 

 	function crystalNumbers(){
	  	for (i=0; i<4; i++) {
	  		var nextNumber = Math.floor(Math.random()*(12-1+1)+1);

	  		while(shoeValues.indexOf(nextNumber) !== -1) {
	  			nextNumber = Math.floor(Math.random()*(12-1+1)+1);
	  		}
	  			shoeValues.push(nextNumber);
			}
			
			$('.shoe-image').each(function (i) {
	 		$(this).attr("data-shoe",shoeValues[i]);
		});
	};


//Gameplay
//==================================================
	//calling functions to initialize the game
	targetNumber();
	crystalNumbers();


//onlcick function for assigning random numbers to each image
	//add animation for each image 
	//increment user's score accordingly
	$(".shoe-image").on("click", function() {
		 
		  $(this).effect("bounce", {times: 1}, 200);
		
		 var shoeValueNum = ($(this).attr("data-shoe"));
   		 shoeValueNum = parseInt( shoeValueNum);
   		 counter += shoeValueNum;
   		 $("#userScore").text(counter);

   	
   		 if (counter === targetScore) {
   		 	winCount +=1;
   		  	$ ("#win").text(winCount);
   		 	gameReset();
   		 } else if (counter >= targetScore){
   		 	lossCount +=1;
   		 	$ ("#loss").text(lossCount);
   		 	gameReset();
   		 };
   	});


//reset to trigger the new random score and numbers for images
	//keep the win and loss count going
function gameReset(){
	targetScore = 0;
	counter = 0;
	$("#userScore").text("");
	targetNumber();
 	crystalNumbers();
};
