import DOMFactory from "./DOMFactory";
import ProjectFacade from "./ProjectFacade";
import ProjectManager from "./ProjectManager";

export default class DOMRenderer {
  static renderProjectsList() {
    // eslint-disable-next-line no-undef
    const projects = document.querySelector(".projects");

    projects.textContent = "";

    ProjectManager.getProjectsData().map((project, i) => {
      // eslint-disable-next-line no-undef
      const li = document.createElement("li");
      // eslint-disable-next-line no-undef
      const button = document.createElement("button");

      button.textContent = project.title;
      button.addEventListener("click", () => this.renderProject(project.id));

      li.appendChild(button);

      projects.appendChild(li);

      if (i === 0) this.renderProject(project.id);
    });

    if (ProjectManager.getProjectsData().length === 0) {
      ProjectFacade.loadProjects();
    }
  }

  static renderProject(id) {
    const projectData = ProjectManager.getProjectData(id);

    // eslint-disable-next-line no-undef
    const main = document.querySelector(".main");
    const projectTitle = DOMFactory.createContainer("project-title");
    // eslint-disable-next-line no-undef
    const h1 = document.createElement("h1");
    const editProject = DOMFactory.createButtonWithIcon("edit");
    const deleteProject = DOMFactory.createButtonWithIcon("trash");
    const todos = DOMFactory.createTodos(id);

    main.textContent = "";

    h1.textContent = projectData.title;

    editProject.addEventListener("click", () =>
      this.renderEditItemDialog("Project", projectData),
    );

    deleteProject.addEventListener("click", () =>
      this.renderDeleteItemDialog("Project", projectData),
    );

    projectTitle.appendChild(h1);
    projectTitle.appendChild(editProject);
    projectTitle.appendChild(deleteProject);

    main.appendChild(projectTitle);

    main.appendChild(todos);
  }

  static renderEditItemDialog(itemType, itemData) {
    const editItemBox = DOMFactory.createEditItemForm(itemType, itemData);

    this.#renderBoxDialog(editItemBox);
  }

  static renderDeleteItemDialog(itemType, itemData) {
    const deleteItemBox = DOMFactory.createDeleteItemBoxDialog(
      itemType,
      itemData,
    );

    this.#renderBoxDialog(deleteItemBox);
  }

  static renderAddItemDialog(itemType, itemData = null) {
    const addItemBox = DOMFactory.createAddItemForm(itemType, itemData);

    this.#renderBoxDialog(addItemBox);
  }

  static #renderBoxDialog(box) {
    // eslint-disable-next-line no-undef
    const dialog = document.querySelector("dialog");

    dialog.textContent = "";

    dialog.appendChild(box);

    dialog.show();
  }
}
