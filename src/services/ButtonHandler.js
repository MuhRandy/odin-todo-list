import DOMRenderer from "./DOMRenderer";
import ProjectFacade from "./ProjectFacade";
import ProjectManager from "./ProjectManager";

export default class ButtonHandler {
  static addProject(inputData, itemType, itemData = null) {
    // eslint-disable-next-line no-undef
    console.log(inputData);

    // eslint-disable-next-line no-undef
    if (inputData.title.length === 0) return console.log("Title required!");

    switch (itemType) {
      case "Project": {
        const newProject = ProjectManager.createProject(inputData.title);

        this.#closeDialogAndRenderChange(newProject.getId());

        break;
      }

      case "To-Do": {
        const todoManager = ProjectFacade.getTodoManager(itemData.id);
        const newTodo = todoManager.createTodo(
          inputData.title,
          inputData.description
        );

        newTodo.setPriority(inputData.priority);
        newTodo.setDueDate(inputData.dueDate);

        this.#closeDialogAndRenderChange(newTodo.getProjectId());

        break;
      }

      case "Checklist": {
        const checklistManager = ProjectFacade.getChecklistManager(
          itemData.projectId,
          itemData.id
        );
        // eslint-disable-next-line no-undef
        console.log("masuk");

        const newChecklist = checklistManager.addChecklistItem(inputData.title);

        this.#closeDialogAndRenderChange(newChecklist.getProjectId());

        break;
      }

      default:
        throw new Error(`item type ${itemType} not recognized`);
    }
  }

  static deleteItem(itemData) {
    if (!itemData.projectId) {
      ProjectManager.deleteProject(itemData.id);

      this.#closeDialogAndRenderChange();
    }

    if (!itemData.todoId && itemData.projectId) {
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

  static saveChange(inputData, itemData) {
    if (!itemData.projectId) {
      const project = ProjectManager.getProject(itemData.id);
      project.setTitle(inputData.title);
    }

    if (!itemData.todoId && itemData.projectId) {
      const todo = ProjectFacade.getTodoManager(itemData.projectId).getTodo(
        itemData.id
      );
      todo.setTitle(inputData.title);
      todo.setDescription(inputData.description);
      todo.setPriority(inputData.priority);
      todo.setDueDate(inputData.dueDate);
    }

    if (itemData.todoId) {
      const checklist = ProjectFacade.getChecklistManager(
        itemData.projectId,
        itemData.todoId
      ).getChecklist(itemData.id);
      checklist.setTitle(inputData.title);
    }

    this.#closeDialogAndRenderChange(
      itemData.projectId ? itemData.projectId : itemData.id
    );
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

  static #closeDialogAndRenderChange(projectId = null) {
    // eslint-disable-next-line no-undef
    const dialog = document.querySelector("dialog");

    dialog.close();

    DOMRenderer.renderProjectsList();

    if (!projectId) return;

    DOMRenderer.renderProject(projectId);
  }
}
