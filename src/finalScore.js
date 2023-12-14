import { createElement, getLocalStorage } from "./utils";

export function FinalPage(score) {
  const scoreHeading = createElement("h1", { textContent: "Final Score" });
  const userName = getLocalStorage("bb-username");
  const finalScoreText = createElement("p", {
    textContent: `${userName}, you got ${score} out of 10!`,
  });

  const ScoreContainer = createElement("div", {}, [
    scoreHeading,
    finalScoreText,
  ]);

  return ScoreContainer;
}

export default FinalPage;
