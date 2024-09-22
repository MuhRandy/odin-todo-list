import DOMFactory from "./DOMFactory";
import ProjectManager from "./ProjectManager";

export default class DOMRenderer {
  static renderProjectsList() {
    const projects = document.querySelector(".projects");

    projects.textContent = "";

    ProjectManager.getProjectsData().map((project) => {
      const li = document.createElement("li");
      const button = document.createElement("button");

      button.textContent = project.title;
      button.addEventListener("click", () => this.renderProject(project.id));

      li.appendChild(button);

      projects.appendChild(li);
    });
  }

  static renderProject(id) {
    const projectData = ProjectManager.getProjectData(id);

    const main = document.querySelector(".main");
    const projectTitle = document.createElement("h1");
    const todos = DOMFactory.createTodos(id);

    main.textContent = "";

    projectTitle.textContent = projectData.title;
    projectTitle.dataset.id = projectData.id;

    main.appendChild(projectTitle);

    main.appendChild(todos);
  }

  static renderEditItemDialog(itemData) {
    const editItemBox = DOMFactory.createEditItemBoxDialog(itemData);

    this.#renderBoxDialog(editItemBox);
  }

  static renderDeleteItemDialog(itemData) {
    const deleteItemBox = DOMFactory.createDeleteItemBoxDialog(itemData);

    this.#renderBoxDialog(deleteItemBox);
  }

  static renderAddItemDialog(itemType, itemData = null) {
    const addItemBox = DOMFactory.createAddItemBoxDialog(itemType, itemData);

    this.#renderBoxDialog(addItemBox);
  }

  static #renderBoxDialog(box) {
    const dialog = document.querySelector("dialog");

    dialog.textContent = "";

    dialog.appendChild(box);

    dialog.show();
  }
}
