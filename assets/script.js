var timeEl = document.getElementById("countdown");
var mainEl = document.getElementById("main");
var pageOneEl = document.getElementById("pageone");
var questionAnswerAreaEl = document.getElementById("questionanswerarea");
var pageQuestionEl = document.getElementById("pagequestion");
var pageAnswersEl = document.getElementById("pageanswers");
var resultAreaEl = document.getElementById("resultarea");
var highScoreAreaEl = document.getElementById("highscorearea");
var finalScoreEl = document.getElementById("finalscore");
var endAlertEl = document.getElementById("endalert");
var wrongAlertEl = document.getElementById("wrongalert");
var viewScoreAreaEl = document.getElementById("viewscorearea");

var viewScoreBtn = document.getElementById("highscores");
viewScoreBtn.addEventListener("click", generateHighScoresPageHtml);

var secondsLeft = 30;
var startQuizEl = document.getElementById("startquiz");
startQuizEl.addEventListener("click", startQuiz);

var current_page_number = 0;
var global_score = 0;


var question_1 = {
	answer:2, 
	answeroptions: ["strings", "booleans", "alerts", "numbers"], 
	question: "1. Commonly used data types DO NOT include:"
};
var question_2 = {
	answer:2, 
	answeroptions: ["quotes", "curly brackets", "parentheses", "square brackets"], 
	question: "2. The condition in an if / else statement is enclosed within ___."
};
var question_3 = {
	answer:3, 
	answeroptions: ["numbers & strings", "other arrays", "booleans", "all of the above"], 
	question: "3. Arrays in Javascript can be used to store ___."
};
var question_4 = {
	answer:2, 
	answeroptions: ["commas", "curly brackets", "quotes", "parentheses"], 
	question: "4. String values must be enclosed within ___ when being assigned to variables."
};
var question_5 = {
	answer:0, 
	answeroptions: ["JavaScript", "terminal / bash", "for leaps", "console.log"], 
	question: "5. A very useful tool used during development and debugging for printing content to the debugger is:"
};


var global_questions_array = [question_1, question_2, question_3, question_4, question_5];


function startQuiz()
{
	setTime();
	generateHtml();
}

function nextPage()
{
	current_page_number++; //increase page.


	if (typeof global_questions_array[current_page_number] == "object" 
	&& typeof global_questions_array[current_page_number].answeroptions == "object") //exists in array above.
		{
			generateHtml();
		}
		else
		{
			//assume we have reached the end.
			generateResultPageHtml();
			
		}

}



function create_button_helper(button_text, is_correct)
{
//we want to create:
/*
                        <li>
                            <button class="btn" onclick="DOSOMETHING()">3. quotes</button>
                        </li>
*/

var li_element = document.createElement('li');
var el = document.createElement('button');
if(is_correct == true)
	{
el.addEventListener('click', handle_button_click_correct);
	}
	else
	{
el.addEventListener('click', handle_button_click_wrong);
	}
el.className="btn";
el.textContent = button_text;

li_element.appendChild(el); //we now have <li><button></li>
//append it into the ul:


pageAnswersEl.appendChild(li_element);


}



function handle_button_click_wrong(event)
{
secondsLeft = secondsLeft - 5;
resultAreaEl.innerHTML="Wrong!";
setTimeout(nextPage, 500);
wrongAlertEl.style.visibility = "visible";
setTimeout(() => {
	 
	wrongAlertEl.style.visibility = 'hidden';
  
  }, 1000);
}


function handle_button_click_correct(event)
{
resultAreaEl.innerHTML="Correct!!!";
global_score++;   				 // increase score.
global_score = global_score + 4; // increase score.
setTimeout(nextPage, 500);
}

function goHome()
{
	location.reload();
}


function generateHtml()
{

if (typeof global_questions_array[current_page_number] != "object" || typeof global_questions_array[current_page_number].answeroptions != "object")
	{
		alert("Failed to generate html for page: " + current_page_number);
		return false;
	}



pageOneEl.style.display="none"; //Hide pageone if it happens to be visible.
questionAnswerAreaEl.style.display="block"; //Make our question/answer area visible



pageQuestionEl.innerHTML=global_questions_array[current_page_number].question;
resultAreaEl.innerHTML=""; //clear the Wrong/Correct area.
pageAnswersEl.innerHTML=""; // reset the answer area content, we append the buttons into it below:


var is_correct;
var answer_prefix = 0;
var answer_text;
for(item in global_questions_array[current_page_number].answeroptions)
	{
		if(item == global_questions_array[current_page_number].answer)
		{
			is_correct = true; //the answer we are doing now is the right one.
		}
		else
		{
			is_correct = false;
		}
		answer_prefix = (item / 1) + 1; // ie so that the first item which is 0 becomes 1.
		answer_text = answer_prefix + ". " + global_questions_array[current_page_number].answeroptions[item];
		create_button_helper(answer_text, is_correct);
	}


return true;
}


function generateResultPageHtml()
{
pageOneEl.style.display="none"; // Hide front page area
questionAnswerAreaEl.style.display="none"; //Hide question and answer area
highScoreAreaEl.style.display="block"; //Hide question and answer area
finalScoreEl.innerHTML=global_score + secondsLeft;
}

function setTime() {
    var timerInterval = setInterval(function() {
    secondsLeft--;    
    timeEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
		clearInterval(timerInterval);		  	
	    gameOver();
    } else if (secondsLeft < 0) {
		clearInterval(timerInterval);
		gameOver();
		secondsLeft = 0;
	} else if (current_page_number === 3) {
		clearInterval(timerInterval);
		}
  }, 1000);
}

function gameOver() {
	endAlertEl.textContent = "Time's Up!";
	endAlertEl.setAttribute("style", "color:red");
	generateResultPageHtml();
}

function generateHighScoresPageHtml()
{
pageOneEl.style.display="none"; // Hide front page area
questionAnswerAreaEl.style.display="none"; //Hide question and answer area
highScoreAreaEl.style.display="none"; //Hide question and answer area
viewScoreAreaEl.style.display="block";
}

var initialsInput = document.querySelector("#fname");
var submitBtn = document.getElementById("submit");
var highScoreEl = document.getElementById("initials");



// This function handles the input for initials and puts it into local storage.
    // It also appends data from previous scores, then sorts in score order from big to small
    function addInitials() {
        submitBtn.addEventListener("click", function () {
            if (initialsInput.value == "") {
                initialsInput.textContent = "Please type in your initials!"
            } else {
                var highScoreList = JSON.parse(localStorage.getItem("highScores"));
                if (highScoreList == null) {
                    var highScoreList = [];
                    var newScore = new Object();
                    newScore.initials = initialsInput.value;
                    newScore.global_score = global_score;
                    highScoreList.push(newScore);
                    var rankedScore = highScoreList.sort(({ global_score: a }, { global_score: b }) => b - a);
                    localStorage.setItem("highScores", JSON.stringify(rankedScore));
                }
                else {
                    var highScore = new Object();
                    highScore.initials = initialsInput.value;
                    highScore.global_score = global_score;
                    highScoreList.push(highScore);
                    var rankedScore = highScoreList.sort(({ global_score: a }, { global_score: b }) => b - a);
                    localStorage.setItem("highScores", JSON.stringify(rankedScore));
                };
            };
        });
    };

var goBackEl = document.getElementById("back");
goBackEl.addEventListener("click", goHome);

addInitials();