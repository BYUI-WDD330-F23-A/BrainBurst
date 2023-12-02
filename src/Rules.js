import { createElement } from "./utils";

export function RulesPage() {
  const rulesHeading = createElement("h1", { textContent: "Rules" });

  const rulesText = createElement("p", {
    textContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Eu augue ut lectus arcu bibendum at. Id aliquet risus feugiat in ante metus dictum at. Consequat ac felis donec et odio pellentesque diam. Ipsum a arcu cursus vitae congue mauris rhoncus aenean. Pulvinar etiam non quam lacus suspendisse faucibus. Risus at ultrices mi tempus imperdiet. Amet consectetur adipiscing elit ut aliquam. At augue eget arcu dictum varius duis at. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Faucibus vitae aliquet nec ullamcorper sit amet risus. Auctor eu augue ut lectus arcu bibendum at varius.",
  });

  const rulesContainer = createElement("div", {}, [rulesHeading, rulesText]);

  return rulesContainer;
}

export default RulesPage;
