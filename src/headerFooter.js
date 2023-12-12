import { createElement } from "./utils";
import { RulesPage } from "./Rules";
import { teamPage } from "./team";
import { userContainer } from "./userInput";
import { quizContainer } from "./quiz";

/* function page(title) {
  const titleHeading = createElement("h2", { textContent: title });
  return createElement("div", {}, [titleHeading]);
} */

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
  const startQuizBtn = createElement("button", { textContent: "Start Quiz" }, []);
  const restartGameBtn = createElement("button", { textContent: "Restart quiz" }, []);

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
    mainDiv.innerHTML = "";
    mainDiv.appendChild(quizContainer()); // go to rules page
  });

  const nav = createElement("nav", {}, [
    startQuizBtn,
    rulesPageBtn,
    teamPageBtn,
    restartGameBtn
  ]);

  return createElement("header", {}, [titlelink, nav]);
}

export function footer() {
  const copyright = createElement("footer", {
    textContent: `Copyright © ${new Date().getFullYear()} Team A`,
  });
  return copyright;
}
