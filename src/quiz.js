import {createElement, shuffle} from "./utils";

function options() {
  const option1 = createElement(
    "input",
    {name: "answer", id: "option1", type: "radio", value: "option 1"},
    []
  );
  const option2 = createElement(
    "input",
    {name: "answer", id: "option2", type: "radio", value: "option 2"},
    []
  );
  const option3 = createElement(
    "input",
    {name: "answer", id: "option3", type: "radio", value: "option 3"},
    []
  );
  const option4 = createElement(
    "input",
    {name: "answer", id: "option4", type: "radio", value: "option 4"},
    []
  );
  const option5 = createElement(
    "input",
    {name: "answer", id: "option5", type: "radio", value: "option 5"},
    []
  );

  const label1 = createElement(
    "label",
    {for: "option1", textContent: "Option 1"},
    [option1]
  );
  const label2 = createElement(
    "label",
    {for: "option2", textContent: "Option 2"},
    [option2]
  );
  const label3 = createElement(
    "label",
    {for: "option3", textContent: "Option 3"},
    [option3]
  );
  const label4 = createElement(
    "label",
    {for: "option4", textContent: "Option 4"},
    [option4]
  );
  const label5 = createElement(
    "label",
    {for: "option5", textContent: "Option 5"},
    [option5]
  );

  return createElement("form", {}, [label1, label2, label3, label4, label5]);
}
async function getData() {
  const jsonData = await fetch("../data/triviaGoodResponses.json").then((res) =>
    res.json()
  );
  console.log(jsonData.Topic);
  return jsonData;
  // return jsonData.Topic["Best general trivia questions"];
}


async function getWrongAnswers() {

}

// Load the Questions
const quizData = await getData();

export function quizContainer(category = "General Trivia") {
  for (let i = 0; i < 10; i++) {
    console.log(quizData.Topic[category][i].Question);
  }
  // Initialize our game loop
  // Do some dereferencing to get our list of questions.
  // TODO call a randomize function to give us a random list.
  let questionList = shuffle(quizData.Topic[category]);

  // Set our index to the first question.
  let currentQuestion = 0;
  
  // Set the number answered correctly
  let numberCorrect = 0;
 
  
  const quizName = createElement("h1", {textContent: `${category} - ${currentQuestion + 1}/10`}, []);

  const question = createElement("p", 
    { 
      className: "quiz-question", 
      textContent: questionList[0].Question
    }
  );
  
  const btnNext = createElement("button", {textContent: "Next"});
  btnNext.addEventListener("click", () => {
    console.log("NEXT Question"); // When click this should take you to next question.
  });

  const questionCounter = createElement("span", {textContent: `1/10`}); // this should count the question number

  const answercontainer = createElement("div", {}, [
    quizName,
    question,
    options(),
    questionCounter,
    btnNext,
  ]);
  console.log(answercontainer);

  return answercontainer;
}

export {
  quizContainer as default, 
  quizData
};

