import {createElement, shuffle} from "./utils";
import { FinalPage } from "./finalScore";

let userScore;

function showResult() {
  for(let i = 0; i < 4; i++) {
    document.getElementById(`label${i}`).revealTruth();
    document.getElementById(`option${i}`).disabled = true;
  }
  document.getElementById("nextButton").disabled = false;
}

function imTrue() {
  this.className = this.className + " correct-answer";
  if (document.getElementById(this.htmlFor).checked) {
    userScore++;
    console.log(`Correct! Your score is now ${userScore}.`);
  } else {
    console.log(`WRONG!`);
  }
}

function imFalse() {
  this.className = this.className + " incorrect-answer";
}

function options(correctAnswer, badAnswers) {
  let optionList = [];
  
  // Pick a position for the correct answer.
  let goodIndex = Math.floor(Math.random() * 4);

  for (let i = 0; i < 4; i++) {
    // There is slight possibility that the correct answer can be in the bad answer pool
    // Since the bad answers are currently made up of the correct answers to other questions. 
    if (badAnswers[i] == correctAnswer) {
      console.log("Duplicate answers found. Adjusting the incorrect one.");
      badAnswers[i] = '42';
    }
    let theAnswer = i == goodIndex ? correctAnswer : badAnswers[i];
    let resultFunction = i == goodIndex ? imTrue : imFalse;

    let inputElement = createElement("input", {
          name: "answer",
          id: `option${i}`,
          type: "checkbox",
          value: theAnswer,
        });

    inputElement.addEventListener("click", showResult);

    let labelElement = createElement("label", {
          htmlFor: `option${i}`,
          id: `label${i}`,
          textContent: " "+theAnswer,
          revealTruth: resultFunction
        });

    optionList.push(createElement("div", {
          className: "answer-wrapper"
        },
        [inputElement, labelElement]
      )
    );
  }

  const answerGroup = createElement("form", {}, optionList);

  return answerGroup;
}


function updateOptions(correctAnswer, badAnswers) {
  // Pick a position for the correct answer.
  let goodIndex = Math.floor(Math.random() * 4);

  for (let i = 0; i < 4; i++) {
    // There is slight possibility that the correct answer can be in the bad answer pool
    // Since the bad answers are currently made up of the correct answers to other questions. 
    if (badAnswers[i] == correctAnswer) {
      console.log("Duplicate answers found. Adjusting the incorrect one.");
      badAnswers[i] = badAnswers[42];
    }
    let theAnswer = i == goodIndex ? correctAnswer : badAnswers[i];
    let resultFunction = i == goodIndex ? imTrue : imFalse;

    let inputElement = document.getElementById(`option${i}`);
    inputElement.checked = false;
    inputElement.disabled = false;

    inputElement.addEventListener("click", showResult);

    let labelElement = document.getElementById(`label${i}`);
    labelElement.className = "";
    labelElement.textContent = " "+theAnswer;
    labelElement.revealTruth = resultFunction;
  }

  document.getElementById("nextButton").disabled = true;
}


async function getData() {
  const jsonData = await fetch("../data/triviaGoodResponses.json").then((res) =>
    res.json()
  );
  return jsonData;
  // return jsonData.Topic["Best general trivia questions"];
}


async function getWrongAnswers() {
  const jsonData = await fetch("../data/mikesBadAnswers.json").then((res) =>
    res.json()
  );
  return jsonData;
}

// Load the Questions
const quizData = await getData();
const badAnswers = await getWrongAnswers();

export function quizContainer(category = "General Trivia", parentElement) {
  
  // Do some dereferencing to get our list of questions.
  let questionList = shuffle(quizData.Topic[category]);

  // Set our index to the first question.
  let currentQuestion = 0;
  userScore = 0;
  
  const quizName = createElement("h1", {textContent: `${category}`}, []);

  const questionCounter = createElement("h2", {
    id: "questionCounter",
    currentQ: 1,
    advanceQuestion: function() {
      let temp = this.currentQ;
      this.currentQ++;
      this.textContent = `Question ${this.currentQ} of 10`;
      return temp;
    },
    textContent: `Question 1 of 10`
  })

  const question = createElement("p", 
    { 
      id: "theQuestion",
      className: "quiz-question", 
      textContent: questionList[currentQuestion].Question
    }
  );
  
  const btnNext = createElement("button", {id: "nextButton", disabled: true, className: "next-button", textContent: "Next"});
  btnNext.addEventListener("click", () => {
    console.log("NEXT Question"); // When click this should take you to next question.
    currentQuestion = document.getElementById("questionCounter").advanceQuestion();
    if (currentQuestion == 10) {
      parentElement.innerHTML = "";
      parentElement.appendChild(FinalPage(userScore)); // go to final score page
    } else {
      question.textContent = questionList[currentQuestion].Question;
      updateOptions(questionList[currentQuestion].Answer,shuffle(badAnswers));
    }

  });

  const answerContainer = createElement("div", {id: "answerContainer"}, [
    quizName,
    questionCounter,
    question,
    options(questionList[currentQuestion].Answer,shuffle(badAnswers)),
    btnNext,
  ]);
  
  return answerContainer;
}

export {
  quizContainer as default, 
  quizData
};

