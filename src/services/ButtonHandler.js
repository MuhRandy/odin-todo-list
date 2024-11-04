import DOMRenderer from "./DOMRenderer";
import ProjectFacade from "./ProjectFacade";
import ProjectManager from "./ProjectManager";

export default class ButtonHandler {
  static #getForm() {
    // eslint-disable-next-line no-undef
    return document.querySelector("form");
  }

  static addProject(inputData, itemType, itemData = null) {
    const titleInput = document.querySelector(".title-input");

    if (titleInput.validity.valueMissing) {
      titleInput.setCustomValidity("Title required!");
    } else {
      titleInput.setCustomValidity("");
    }

    if (this.#getForm().checkValidity()) {
      switch (itemType) {
        case "Project": {
          const newProject = ProjectManager.createProject(inputData.title);

          this.#renderChange(newProject.getId());

          break;
        }

        case "To-Do": {
          const todoManager = ProjectFacade.getTodoManager(itemData.id);
          const newTodo = todoManager.createTodo(
            inputData.title,
            inputData.description,
          );

          newTodo.setPriority(inputData.priority);
          newTodo.setDueDate(inputData.dueDate);

          this.#renderChange(newTodo.getProjectId());

          break;
        }

        case "Checklist": {
          const checklistManager = ProjectFacade.getChecklistManager(
            itemData.projectId,
            itemData.id,
          );

          const newChecklist = checklistManager.addChecklistItem(
            inputData.title,
          );

          this.#renderChange(newChecklist.getProjectId());

          break;
        }

        default:
          throw new Error(`item type ${itemType} not recognized`);
      }
    }
  }

  static deleteItem(itemData) {
    if (!itemData.projectId) {
      ProjectManager.deleteProject(itemData.id);

      this.#renderChange();
    }

    if (!itemData.todoId && itemData.projectId) {
      const todoManager = ProjectFacade.getTodoManager(itemData.projectId);
      todoManager.deleteTodo(itemData.id);
    }

    if (itemData.todoId) {
      const checklistManager = ProjectFacade.getChecklistManager(
        itemData.projectId,
        itemData.todoId,
      );
      checklistManager.deleteChecklist(itemData.id);
    }

    this.#renderChange(itemData.projectId);
  }

  static saveChange(inputData, itemData) {
    if (this.#getForm().checkValidity()) {
      if (!itemData.projectId) {
        const project = ProjectManager.getProject(itemData.id);
        project.setTitle(inputData.title);
      }

      if (!itemData.todoId && itemData.projectId) {
        const todo = ProjectFacade.getTodoManager(itemData.projectId).getTodo(
          itemData.id,
        );
        todo.setTitle(inputData.title);
        todo.setDescription(inputData.description);
        todo.setPriority(inputData.priority);
        todo.setDueDate(inputData.dueDate);
      }

      if (itemData.todoId) {
        const checklist = ProjectFacade.getChecklistManager(
          itemData.projectId,
          itemData.todoId,
        ).getChecklist(itemData.id);
        checklist.setTitle(inputData.title);
      }

      this.#renderChange(itemData.projectId ? itemData.projectId : itemData.id);
    }
  }

  static toggleIsComplete(itemData) {
    if (!itemData.todoId) {
      const todo = ProjectFacade.getTodoManager(itemData.projectId).getTodo(
        itemData.id,
      );

      todo.toggleComplete();
    }

    if (itemData.todoId) {
      const checklist = ProjectFacade.getChecklistManager(
        itemData.projectId,
        itemData.todoId,
      ).getChecklist(itemData.id);

      checklist.toggleComplete();
    }
  }

  static #renderChange(projectId = null) {
    DOMRenderer.renderProjectsList();

    if (!projectId) return;

    DOMRenderer.renderProject(projectId);
  }
}
