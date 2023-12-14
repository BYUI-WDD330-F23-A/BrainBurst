import { createElement } from "./utils";
import { footer, header } from "./headerFooter";

// this function creates the flow of all the elements in the html file

export function App() {
  const welcomeMessage = createElement("h2", {
    textContent: "Welcome to BrainBurst!",
  });

  const welcomeBlock = [
    welcomeMessage,
    createElement("p", {
      textContent: "Test your knowledge and have fun with our quiz.",
    }),
    createElement("p", { textContent: "Are you ready?" }),
    createElement("p", {
      innerHTML: "Click the <b>Start New Quiz</b> button at the top.",
    }),
  ];

  const main = createElement("main", {}, welcomeBlock);

  return createElement("div", { className: "container" }, [
    header(main),
    main,
    footer(),
  ]);
}

export default App;
