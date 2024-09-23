import DOMRenderer from "./DOMRenderer";
import ProjectFacade from "./ProjectFacade";
import ProjectManager from "./ProjectManager";

export default class ButtonHandler {
  static addProject(inputData, itemData = null) {
    if (inputData.title.length === 0) return console.log("Title required!");

    if (!itemData) {
      const newProject = ProjectManager.createProject(inputData.title);

      this.#closeDialogAndRenderChange(newProject.getId());

      return;
    }

    if (!itemData.projectId) {
      const todoManager = ProjectFacade.getTodoManager(itemData.id);
      const newTodo = todoManager.createTodo(
        inputData.title,
        inputData.description
      );

      newTodo.setPriority(inputData.priority);
      newTodo.setDueDate(inputData.dueDate);

      this.#closeDialogAndRenderChange(newTodo.getProjectId());
      DOMRenderer.renderProjectsList();

      return;
    }

    if (itemData.projectId) {
      const checklistManager = ProjectFacade.getChecklistManager(
        itemData.projectId,
        itemData.id
      );
      const newChecklist = checklistManager.addChecklistItem(inputData.title);

      this.#closeDialogAndRenderChange(newChecklist.getProjectId());
    }
  }

  static deleteItem(itemData) {
    if (!itemData.todoId) {
      const todoManager = ProjectFacade.getTodoManager(itemData.projectId);
      todoManager.deleteTodo(itemData.id);
    }

    if (itemData.todoId) {
      const checklistManager = ProjectFacade.getChecklistManager(
        itemData.projectId,
        itemData.todoId
      );
      checklistManager.deleteChecklist(itemData.id);
    }

    this.#closeDialogAndRenderChange(itemData.projectId);
  }

  static saveChange(itemData, newTitle, newDescription = null) {
    if (!itemData.todoId) {
      const todo = ProjectFacade.getTodoManager(itemData.projectId).getTodo(
        itemData.id
      );
      todo.setTitle(newTitle);
      todo.setDescription(newDescription);
    }

    if (itemData.todoId) {
      const checklist = ProjectFacade.getChecklistManager(
        itemData.projectId,
        itemData.todoId
      ).getChecklist(itemData.id);
      checklist.setTitle(newTitle);
    }

    this.#closeDialogAndRenderChange(itemData.projectId);
  }

  static toggleIsComplete(itemData) {
    if (!itemData.todoId) {
      const todo = ProjectFacade.getTodoManager(itemData.projectId).getTodo(
        itemData.id
      );

      todo.toggleComplete();
    }

    if (itemData.todoId) {
      const checklist = ProjectFacade.getChecklistManager(
        itemData.projectId,
        itemData.todoId
      ).getChecklist(itemData.id);

      checklist.toggleComplete();
    }
  }

  static #closeDialogAndRenderChange(projectId) {
    const dialog = document.querySelector("dialog");

    dialog.close();

    DOMRenderer.renderProject(projectId);
  }
}
