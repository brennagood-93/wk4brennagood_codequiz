// variables for page
const startQuiz = document.querySelector("#startButton");
const timeLeft = document.querySelector("#timeLeft");
const startPage = document.querySelector("#startPage")
const questions = document.querySelector("#questionPage");
const results = document.querySelector("#resultsPage");
const failedPage = document.querySelector("#failedPage");
const questionSpace = document.querySelector("#questionSpace");
const answersList = document.querySelector("#answersList");
const answerList = document.querySelector("#scoresList")
const scoreText = document.querySelector("#finalScore");
const scoreSubmit = document.querySelector("#scoreSubmit");
const initials = document.querySelector("#initials");
const highScoreResults = document.querySelector("#highScoreResults");
const highscore = document.querySelector("#highscore");
const goBack = document.querySelector("#goBack");

// The questions that will be asked in the quiz
const questionText = ["What wine pairs best with Beef Sirloin?",
    "What fruit is wine typically made from?",
    "What is the standard amount in most wine bottles?",
    "Which country in the world has the largest area of vineyards?"];

// This is the answers the user will be given a choice from
const questAns = [
    ["Cabernet Sauvignon", "Rose", "Chardonnay", "Pinot Noir"],
    ["Berries", "Grapes", "Oranges", "Mangos"],
    ["250 millilitres", "500 millilitres", "750 millilitres", "1 litres"],
    ["France", "Austrailia", "Italy", "Spain"]
];
// This shows which answer is correct in the above array
const correctAns = [
    ["correct", "incorrect", "incorrect", "incorrect"],
    ["incorrect", "correct", "incorrect", "incorrect"],
    ["incorrect", "incorrect", "correct", "incorrect"],
    ["incorrect", "incorrect", "incorrect", "correct"]
];





// Time of quiz is 60 seconds
let secondsLeft = 60;
// send message if timer runs out
const sendMessage = function () {
    timeLeft.textContent = "Time is up!";
    questions.removeAttribute("class");
    failedPage.setAttribute("class", "active");


}
// Starts the timer
const timerInterval = setInterval(setTime, 1000);
function setTime() {
    secondsLeft--;
    timeLeft.textContent = secondsLeft

    if (secondsLeft <= 0) {
        clearInterval(timerInterval);
        sendMessage();
    }


}

// shows the score is how much time is left when finished
let = currentQuestion = 0;

// const questionSpace = document.querySelector("#questionSpace");


// When user clicks start, triggers timer and updates text on question page with whats in question array
startQuiz.addEventListener("click", function () {
    event.preventDefault();
    setTime();
    questions.setAttribute("class", "active");
    startPage.removeAttribute("class");
    nextQ();
})

// This replaces all question/answer text with the next question in the quiz
const nextQ = function () {
    answersList.innerHTML = "";
    questionSpace.textContent = questionText[currentQuestion];
    for (let i = 0; i < questAns[currentQuestion].length; i++) {
        let answerSpace = document.createElement("li");
        let answerBtn = document.createElement("button");
        answerBtn.textContent = questAns[currentQuestion][i];
        answerBtn.setAttribute("value", correctAns[currentQuestion][i]);
        answerSpace.appendChild(answerBtn);
        answersList.appendChild(answerSpace);
    }
}
// This is the event listener that indicates if they clicked the right answer, if they answer wrong the seconds decrease
answersList.addEventListener("click", function (event) {
    if (currentQuestion === 3) {
        if (event.target.matches("button") && event.target.value === "incorrect") {
            secondsLeft -= 4;
            clearInterval(timerInterval);
            questions.removeAttribute("class");
            results.setAttribute("class", "active");
            scoreText.textContent = secondsLeft;
        } else {
            clearInterval(timerInterval);
            questions.removeAttribute("class");
            results.setAttribute("class", "active");
            scoreText.textContent = secondsLeft;
        }
    } else if (event.target.matches("button") && event.target.value === "incorrect") {
        secondsLeft -= 4;
        currentQuestion++;
        nextQ();
    } else {
        currentQuestion++;
        nextQ();
        
    }
})




//when user submits initials, run a funtion that adds the score to the local storage (doesn't work)
const initialsValue = initials.value 
scoreSubmit.addEventListener("click", function () {
    localStorage.setItem("highScores", initialsValue + secondsLeft)
})

//get the data from local storage to show the scores in a list




highscore.addEventListener("click", function () {
    startPage.removeAttribute("class");
    questions.removeAttribute("class");
    results.removeAttribute("class");
    highScoreResults.setAttribute("class", "active");

})
goBack.addEventListener("click", function () {
    highScoreResults.removeAttribute("class");
    startPage.setAttribute("class", "active");

})
// portion to restart quiz if they run out of time
const restart = document.querySelector("#restart")
restart.addEventListener("click", function () {
    clearInterval(timeLeft);
    let secondsLeft = 60;
    failedPage.removeAttribute("class");
    startPage.setAttribute("class", "active");
})












