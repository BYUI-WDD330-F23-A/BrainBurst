import { createElement } from "./utils";
import { quizContainer } from "./quiz";

export function userContainer(mainDiv) {
  const labelInput = createElement("label", { textContent: "Name:" });

  const nameInput = createElement("input", {
    className: "userName",
    placeholder: "John Doe",
  });

  const btnStart = createElement("button", { textContent: "Start" });
  btnStart.addEventListener("click", () => {
    mainDiv.innerHTML = "";
    mainDiv.appendChild(quizContainer()); // When click this should take you to the page 2 where the quiz is.
  });

  const quizDiv = createElement("div", { className: "user" }, [
    labelInput,
    nameInput,
    btnStart,
  ]);

  return quizDiv;
}

export default userContainer;
