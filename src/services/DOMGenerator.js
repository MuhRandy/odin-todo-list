import DOMFactory from "./DOMFactory";
import ProjectManager from "./ProjectManager";

export default class DOMGenerator {
  static generateProjectsList() {
    const projects = document.querySelector(".projects");

    ProjectManager.getProjectsData().map((project) => {
      const li = document.createElement("li");

      li.textContent = project.title;
      li.dataset.id = project.id;

      projects.appendChild(li);
    });
  }

  static generateProject(id) {
    const projectData = ProjectManager.getProjectData(id);

    const main = document.querySelector(".main");
    const projectTitle = document.createElement("h1");
    const todos = DOMFactory.createTodos(id);

    projectTitle.textContent = projectData.title;
    projectTitle.dataset.id = projectData.id;

    main.appendChild(projectTitle);

    main.appendChild(todos);
  }
}
