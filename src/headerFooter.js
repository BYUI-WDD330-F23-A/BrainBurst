import { createElement } from "./utils";
import { RulesPage } from "./Rules";
import { teamPage } from "./team";
import { userContainer } from "./userInput";

/* function page(title) {
  const titleHeading = createElement("h2", { textContent: title });
  return createElement("div", {}, [titleHeading]);
} */

export function header(mainDiv) {
  const appTitle = createElement("h1", {
    textContent: "BrainBurst QUIZ",
    className: "app-title",
  });

  //navigation
  const introPageBtn = createElement(
    "button",
    { textContent: "Start Quiz" },
    [],
  );
  const rulesPageBtn = createElement("button", { textContent: "Rules" }, []);
  const teamPageBtn = createElement("button", { textContent: "Team" }, []);

  introPageBtn.addEventListener("click", () => {
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

  const nav = createElement("nav", {}, [
    introPageBtn,
    rulesPageBtn,
    teamPageBtn,
  ]);

  return createElement("header", {}, [appTitle, nav]);
}

export function footer() {
  const copyright = createElement("span", {
    textContent: `Copyright © ${new Date().getFullYear()}`,
  });
  return copyright;
}
