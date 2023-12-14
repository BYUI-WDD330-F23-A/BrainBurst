import { createElement } from "./utils";

export function RulesPage() {
  let theRules = [
    createElement("h1", { textContent: "Instructions" }),
    createElement("h2", { textContent: "Objective" }),
    createElement("p", {
      textContent:
        "The objective of this game is to correctly answer as many questions as you can.",
    }),
    createElement("h2", { textContent: "Rules" }),
    createElement("ol", {}, [
      createElement("li", {
        textContent: "You will be able to answer each question only one time.",
      }),
      createElement("li", {
        innerHTML:
          "Your answer will be flagged as <b>CORRECT</b> or <b>INCORRECT</b> as soon as you submit the answer.",
      }),
      createElement("li", { textContent: "There is no time limit." }),
      createElement("li", {
        innerHTML:
          "Restarting the quiz <i>will</i> reset your score, however, you may not necessarily get the same questions from the category.",
      }),
      createElement("li", {
        textContent: "Try to do as much as you can on your own.",
      }),
    ]),

    createElement("h2", { textContent: "Instructions" }),
    createElement("p", {
      innerHTML:
        "The quiz is multiple choice. Simply read the question and choose from the list of available answers. When you are sure of your choice, click on the answer. You will receive instant feedback if your answer was right or wrong. Click the <b>Next</b> button to advance to the next question.",
    }),
  ];

  console.log(theRules);

  const rulesContainer = createElement("div", {}, theRules);

  return rulesContainer;
}

export default RulesPage;
