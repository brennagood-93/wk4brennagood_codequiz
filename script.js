//change display type for div holding content, start timer
    const startQuiz = document.querySelector("#startButton");
    const timeLeft = document.querySelector("#timeLeft");
    const startPage - document.querySelector("#startPage")
    const questions = document.querySelector("#questionPage");
        let secondsLeft = 60;
        function setTime() {
            const timerInterval = setInterval(function() {
              secondsLeft--;
              timeEl.textContent = secondsLeft

              if(secondsLeft === 0) {
                clearInterval(timerInterval);
                sendMessage();
              }

          
            }, 1000);
        }
    startQuiz.addEventListener("click", function() {
        event.preventDefault();
        setTime();
        questions.setAttribute("class", "active");
        startPage.removeAttribute("class")
    
    
    })

//function changing the question / answer text to the next question when each question is answered
//event listenter that pertains to all answer buttons that runs funcion a (changes to next question)
    //by changing the textContent for the question space and ansewr content
//last question changes class of master divs to hide question space and show results screen
const questionText = ["question 1", "question 2", "question 3", "question 4"]
const q1Answer = ["answer 1", "answer 2", "answer 3", "answer 4"]
const q2Answer = ["answer 1", "answer 2", "answer 3", "answer 4"]
const q3Answer = ["answer 1", "answer 2", "answer 3", "answer 4"]
const q4Answer = ["answer 1", "answer 2", "answer 3", "answer 4"]

let = currentQuestion = 0;

const questionSpace = document.querySelector("questionSpace");
const answer = document.querySelector("answerButton");
answer.querySelector("click", function {
    currentQuestion++;
    questionSpace.textContent(questionText[currentQuestion]);



})
//function keeping score
//runs if correct answer is clicked; 
    //if statements to add to a scoce variable as the test continues
//when last answer is clicked 
//when user submits initials, run a funtion that adds the score to the local storage
//get the data from local storage to show the scores in a list
Collapse














