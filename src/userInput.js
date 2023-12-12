import { createElement } from "./utils";
import { quizContainer, quizData } from "./quiz";

export function userContainer(mainDiv) {

  const labelName = createElement("label", { textContent: "Name: " });
  const nameInput = createElement("input", {
    className: "userName",
    placeholder: "John Doe",
  });

  const btnStart = createElement("button", { textContent: "Start" });


  const labelCategory = createElement("label", { textContent: "Category: " });
  
  let categories = Object.keys(quizData.Topic);

  let categoryElements = [];

  categories.forEach( (input) => {
    categoryElements.push(
      createElement("option", {value: input, textContent: input})
    );
  });

  const categoryPicker = createElement("select", {id: "pickedCategory"}, categoryElements)

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

  btnStart.addEventListener("click", () => {
    mainDiv.innerHTML = "";
    let theCategory = document.getElementById("pickedCategory").value;
    mainDiv.appendChild(
      quizContainer(
        theCategory
      )
    ); // When click this should take you to the page 2 where the quiz is.
  });

  return quizDiv;
}

export default userContainer;
