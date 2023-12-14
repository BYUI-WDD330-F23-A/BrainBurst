import { createElement, getLocalStorage, setLocalStorage } from "./utils";
import { quizContainer, quizData } from "./quiz";

export function userContainer (mainDiv) {
  const userName = getLocalStorage("bb-username") || "";
  const previousCategory = getLocalStorage("bb-category") || "General Trivia";

  const labelName = createElement("label", { textContent: "Name: " });
  const nameInput = createElement("input", {
    className: "userName",
    placeholder: "John Doe",
    value: userName
  });

  const btnStart = createElement("button", { textContent: "Start" });
  const labelCategory = createElement("label", { textContent: "Category: " });
  const categories = Object.keys(quizData.Topic);
  const categoryElements = [];

  categories.forEach((input) => {
    const selectedBool = previousCategory === input;
    categoryElements.push(
      createElement("option", { selected: selectedBool, value: input, textContent: input })
    );
  });

  const categoryPicker = createElement("select", { id: "pickedCategory" }, categoryElements);

  const nameDiv = createElement("div", { className: "user" }, [
    labelName,
    nameInput
  ]);

  const categoryDiv = createElement("div", { className: "category" }, [
    labelCategory,
    categoryPicker,
    btnStart
  ]);

  const quizDiv = createElement("div", { className: "PLACEHOLDER" }, [
    nameDiv,
    categoryDiv
  ]);

  categoryPicker.addEventListener("input", () => {
    const theCategory = document.getElementById("pickedCategory").value;
    setLocalStorage("bb-category", theCategory);
  });

  btnStart.addEventListener("click", () => {
    mainDiv.innerHTML = "";
    setLocalStorage("bb-username", nameInput.value);
    let theCategory = getLocalStorage("bb-category");
    if (!theCategory) {
      theCategory = "General Trivia";
    }
    mainDiv.appendChild(
      quizContainer(theCategory, mainDiv)
    ); // When click this should take you to the page 2 where the quiz is.
  });

  if (!getLocalStorage("bb-category")) {
    setLocalStorage("bb-category", "General Trivia");
  }

  return quizDiv;
}

export default userContainer;
