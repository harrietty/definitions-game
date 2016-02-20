// Set the $questionsRight variable and insert it into the DOM

var questionsRight = 0;

document.getElementById("score").innerHTML = questionsRight;


$(document).ready(function() {




	// When the correct class is clicked

	$(".correct").click(function(){


		// Remove the answer & correct classes and add chosen-correct

		$(this).removeClass("answer correct");

		$(this).addClass("chosen-correct");



		// Remove siblings' answer & incorrect classes

		$(this).siblings().removeClass("answer");

		$(this).siblings().removeClass("incorrect");


		// Add siblings' unchosen class

		$(this).siblings().addClass("unchosen");


		// Stop the jquery doing anything else to this question

		$(this).unbind();

		$(this).siblings().unbind();


		// Keep track of score

		questionsRight += 1;

		// Update the score in the DOM

		document.getElementById("score").innerHTML = questionsRight;

	});

// No further answers are selectable now




// When an incorrect class is chosen

	$(".incorrect").click(function(){



		// Remove answer and incorrect class

		$(this).removeClass("answer incorrect");


		// Give chosen element chosen-incorrect class

		$(this).addClass("chosen-incorrect");


		// Remove other classes from sibling elements

		$(this).siblings().removeClass("answer correct incorrect");


		// Give siblings unchosen class

		$(this).siblings().addClass("unchosen");


		// Stop the jquery doing anything else to this question

		$(this).unbind();

		$(this).siblings().unbind();

	});




});

// No points gained and no further answers selectable

