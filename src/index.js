import DOMRenderer from "./services/DOMRenderer";
import ProjectFacade from "./services/ProjectFacade";
import "./styles.css";

ProjectFacade.loadProjects();

DOMRenderer.renderProjectsList();

const addProjectButton = document.querySelector(".heading button");

addProjectButton.addEventListener("click", () =>
  DOMRenderer.renderAddItemDialog("Project")
);
