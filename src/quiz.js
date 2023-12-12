import {createElement, shuffle} from "./utils";

function options(correctAnswer = 'Correct', badAnswers = ['Bad 1', 'Bad 2', 'Bad 3', 'Bad 4', 'Bad 5']) {
  let optionList = [];
  let goodIndex = Math.floor(Math.random() * 4);
  for (let i = 0; i < 4; i++) {
    let theAnswer = i == goodIndex ? correctAnswer : badAnswers[i];
    let inputElement = createElement(
      "input",
      {
        name: "answer",
        id: `option${i}`,
        type: "radio",
        value: theAnswer
      },
      []
    );
    optionList.push(
      createElement(
        "label",
        {
          for: `option${i}`,
          className: "answer-label",
          textContent: theAnswer
        },
        [inputElement]
      )
    )
  }

  goodIndex = Math.floor(Math.random() * 4);

  const answerPack = createElement("form", {}, optionList);

  return answerPack;
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

export function quizContainer(category = "General Trivia") {
  // Initialize our game loop
  // Do some dereferencing to get our list of questions.
  
  debugger;
  let questionList = shuffle(quizData.Topic[category]);

  // Set our index to the first question.
  let currentQuestion = 0;
  
  // Set the number answered correctly
  let numberCorrect = 0;
 
  
  const quizName = createElement("h1", {textContent: `${category} - ${currentQuestion + 1}/10`}, []);

  const question = createElement("p", 
    { 
      className: "quiz-question", 
      textContent: questionList[currentQuestion].Question
    }
  );
  
  const btnNext = createElement("button", {className: "next-button", textContent: "Next"});
  btnNext.addEventListener("click", () => {
    console.log("NEXT Question"); // When click this should take you to next question.
  });

  const answercontainer = createElement("div", {}, [
    quizName,
    question,
    options(questionList[currentQuestion].Answer,shuffle(badAnswers)),
    btnNext,
  ]);
  
  return answercontainer;
}

export {
  quizContainer as default, 
  quizData
};

