import { createElement } from "./utils";

export function teamPage () {
  const teamHeading = createElement("h1", { textContent: "Team Names" });
  const teamMember1 = createElement("p", { className: "teamUsers", id: "user1", textContent: "@Wyoming-C64" });
  const teamMember2 = createElement("p", { className: "teamUsers", id: "user2", textContent: "@Ecob1" });
  const teamMember3 = createElement("p", { className: "teamUsers", id: "user3", textContent: "@hectapia" });
  const teamMember4 = createElement("p", { className: "teamUsers", id: "user4", textContent: "@flixjavier" });
  const teamText = createElement("div", { className: "teamUsersContainer" }, [teamMember1, teamMember2, teamMember3, teamMember4]);
  const teamName1 = createElement("p", { className: "teamNames", id: "Name1", textContent: "Mike Lewis" });
  const teamName2 = createElement("p", { className: "teamNames", id: "Name2", textContent: "Edgar Cobian" });
  const teamName3 = createElement("p", { className: "teamNames", id: "Name3", textContent: "Hector Olivares" });
  const teamName4 = createElement("p", { className: "teamNames", id: "Name4", textContent: "Felix Flores" });
  const teamNames = createElement("div", { className: "teamNamesContainer" }, [teamName1, teamName2, teamName3, teamName4]);
  const teamContainer = createElement("div", { className: "div-content" }, [teamHeading, teamNames, teamText]);

  return teamContainer;
}

export default teamPage;
