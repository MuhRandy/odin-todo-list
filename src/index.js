import DOMRenderer from "./services/DOMRenderer";
import ProjectFacade from "./services/ProjectFacade";
import Tester from "./services/Tester";
import "./styles.css";

Tester.generateDataToLocalStorage();

ProjectFacade.loadProjects();

DOMRenderer.renderProjectsList();

DOMRenderer.renderProject(4827365893012);

const addProjectButton = document.querySelector(".heading button");

addProjectButton.addEventListener("click", () =>
  DOMRenderer.renderAddItemDialog("Project")
);
