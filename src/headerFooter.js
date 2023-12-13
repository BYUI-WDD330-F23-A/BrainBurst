import { createElement, getLocalStorage } from "./utils";
import { RulesPage } from "./Rules";
import { teamPage } from "./team";
import { userContainer } from "./userInput";
import { quizContainer } from "./quiz";

export function header(mainDiv) {
  const appTitle = createElement("h1", {
    textContent: "BrainBurst",
    className: "app-title",
  });

  const titlelink = createElement("a", { href: "#" }, [appTitle]);

  titlelink.addEventListener("click", () => { // find a best way to go to main
    window.location.href = "index.html";
  });

  // navigation

  const rulesPageBtn = createElement("button", { textContent: "Rules" }, []);
  const teamPageBtn = createElement("button", { textContent: "Team" }, []);
  const startQuizBtn = createElement("button", { textContent: "Start New Quiz" }, []);
  const restartGameBtn = createElement("button", { textContent: "Restart Quiz" }, []);

  startQuizBtn.addEventListener("click", () => {
    mainDiv.innerHTML = "";
    mainDiv.appendChild(userContainer(mainDiv)); // go to intro page
  });
  
  rulesPageBtn.addEventListener("click", () => {
    mainDiv.innerHTML = "";
    mainDiv.appendChild(RulesPage()); // go to rules page
  });

  teamPageBtn.addEventListener("click", () => {
    mainDiv.innerHTML = "";
    mainDiv.appendChild(teamPage()); // go to team page
  });

  restartGameBtn.addEventListener("click", () => {
    let theCategory = getLocalStorage('bb-category');
    mainDiv.innerHTML = "";
    mainDiv.appendChild(quizContainer(theCategory, mainDiv)); // go to quiz page
  });

  const nav = createElement("nav", {}, [
    rulesPageBtn,
    teamPageBtn,
    startQuizBtn,
    restartGameBtn
  ]);

  return createElement("header", {}, [titlelink, nav]);
}

export function footer() {
  const copyright = createElement("footer", {
    textContent: `Copyright © ${new Date().getFullYear()} by WDD-330 Team A`,
  });
  return copyright;
}
