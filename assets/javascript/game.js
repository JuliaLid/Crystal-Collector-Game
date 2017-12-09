var targetScore;
var	winCount =0;
var	lossCount = 0;
var crystalValues = [];
var counter = 0;


//function to determine the random target number
		function targetNumber() {
		targetScore = Math.floor(Math.random()*(120-19+1)+19);
		console.log(targetScore);
		 $("#scoreDisplay").text(targetScore);
	};
		

//function to determine 4 random, non-repeating numbers - one for each crystal 

 	function crystalNumbers(){
	  	for (i=0; i<4; i++) {
	  		var nextNumber = Math.floor(Math.random()*(12-1+1)+1);

	  		while(crystalValues.indexOf(nextNumber) !== -1) {
	  			nextNumber = Math.floor(Math.random()*(12-1+1)+1);
	  		}
	  			crystalValues.push(nextNumber);
				// $("img").attr("data-crystal",crystalValues[i]);
			}
			// var names = [ "Jon", "Nick", "Bill", "Tom" ];
			$('.crystal-image').each(function (i) {
 			$(this).attr("data-crystal",crystalValues[i]);
});
	};

	 	// assign a random number to each image as attr "data-crystalValue"//

				//not working for loop
				// function assignNumbers() {
				// 	for(var j=0;j< crystalValues.length; j++) {
				// 	$(".crystal-image").attr("data-crystal",crystalValues[j]);
				// 	}
				// }

				//working function but not assigning number
					// $ .each($(".crystal-image"),(function(index){
					// 					$(this).attr("data-crystal",crystalValues[i]);
					// 				}));
					// 			};

				jQuery.each( crystalValues, function( i, val ) {
  				$(".crystal-image").attr("data-crystal",crystalValues[i]);
  			});

targetNumber();
crystalNumbers();
console.log(crystalValues)
$("#userScore").text(counter);

//onlcick function for assigning random numbers to each image
	//increment user's score accordingly
	$(".crystal-image").on("click", function() {
		
		var crystalValueNum = ($(this).attr("data-crystal"));
   		 crystalValueNum = parseInt( crystalValueNum);
   		 counter += crystalValueNum;
   		  $("#userScore").text(counter);

   		 console.log("Score:" + counter);

   		 if (counter === targetScore) {
   		 	winCount +=1;
   		 	console.log("you win!");
   		 	$ ("#win").text(winCount);
   		 	gameReset();
   		 } else if (counter >= targetScore){
   		 	lossCount +=1;
   		 	console.log ("You lose!");
   		 	$ ("#loss").text(lossCount);
   		 	gameReset();
   		 };
   	});



//reset to trigger the new random score and numbers
	//keep the win and loss count going
function gameReset(){
	targetScore = 0;
	counter = 0;
	$("#userScore").text("");
	targetNumber();
 	crystalNumbers();

};
