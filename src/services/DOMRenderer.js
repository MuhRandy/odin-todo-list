import ButtonHandler from "./ButtonHandler";
import DOMFactory from "./DOMFactory";
import ProjectManager from "./ProjectManager";

export default class DOMRenderer {
  static renderProjectsList() {
    const projects = document.querySelector(".projects");

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

  static renderDeleteConfirmDialog(todoTitle, projectId, id, todoId = null) {
    const dialog = document.querySelector("dialog");
    const deleteConfirmBox = DOMFactory.createBoxDialog(
      `Delete ${todoId ? "Checklist" : "To Do"}?`,
      `${
        todoId ? "Checklist" : "To Do"
      } "${todoTitle}" will be permanently deleted`,
      "delete",
      "Delete",
      () => ButtonHandler.deleteItem(projectId, id, todoId)
    );

    dialog.textContent = "";

    dialog.appendChild(deleteConfirmBox);

    dialog.show();
  }
}
