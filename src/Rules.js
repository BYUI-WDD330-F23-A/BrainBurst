import { createElement } from "./utils";

export function RulesPage() {
  let theRules = [
    createElement("h1", { textContent: "Instructions" }),
    createElement("h2", { textContent: "Objective" }),
    createElement("p", { textContent:
      "The objective of this game is to answer as many questions correctly as you can."
    }),
    createElement("h2", { textContent: "Rules" }),
    createElement("p", { textContent:
      "You will be able to answer each question only one time. Your answer will be flagged as correct or incorrect as soon as you submit the answer. Try to do as much as you can on your own. There is no time limit."
    }),
    createElement("h2", { textContent: "Instructions" }),
    createElement("p", { textContent:
      "The quiz is multiple choice. Simply read the question and choose from the list of available answers. When you are sure of your choice, click on the answer. You will receive instant feedback if your answer was right or wrong. Click the [Next] button to advance to the next question."
    }),
  ];

  const rulesContainer = createElement("div", {}, theRules);

  return rulesContainer;
}

export default RulesPage;
