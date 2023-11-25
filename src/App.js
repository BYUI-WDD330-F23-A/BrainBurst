import { createElement } from "./utils";
import { footer, header } from "./headerFooter";

// this function creates the flow of all the elements in the html file

function App() {
  const welcomeMessage = createElement("h2", {
    textContent: "Welcome to the Quiz",
  });

  const main = createElement("main", {}, [welcomeMessage]);

  return createElement("div", { className: "container" }, [
    header(main),
    main,
    footer(),
  ]);
}

export default App;
