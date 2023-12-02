import { createElement } from "./utils";

export function FinalPage(score) {
  const scoreHeading = createElement("h1", { textContent: "Final Score" });

  const finalScoreText = createElement("p", {
    textContent:
      `You got ${score} of 10`
  });

  const ScoreContainer = createElement("div", {}, [scoreHeading, finalScoreText]);

  return ScoreContainer;
}

export default FinalPage;
