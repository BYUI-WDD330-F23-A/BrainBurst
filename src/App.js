import { createElement } from "./utils";
import { footer, header } from "./headerFooter";

// this function creates the flow of all the elements in the html file

export function App() {
  const welcomeMessage = createElement("h2", {
    textContent: "Welcome to BrainBurst!"
  });

  const welcomeParagraph = createElement("p", { textContent: "Test your knowledge and have fun with our quiz. Are you ready?" });

  const main = createElement("main", {}, [welcomeMessage, welcomeParagraph]);

  return createElement("div", { className: "container" }, [
    header(main),
    main,
    footer(),
  ]);
}

export default App;
