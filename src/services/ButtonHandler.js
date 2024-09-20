import DOMRenderer from "./DOMRenderer";
import ProjectFacade from "./ProjectFacade";

export default class ButtonHandler {
  static deleteItem(projectId, id, todoId = null) {
    const dialog = document.querySelector("dialog");

    if (!todoId) {
      const todoManager = ProjectFacade.getTodoManager(projectId);
      todoManager.deleteTodo(id);
    }

    if (todoId) {
      const checklistManager = ProjectFacade.getChecklistManager(
        projectId,
        todoId
      );
      checklistManager.deleteChecklist(id);
    }

    dialog.close();

    DOMRenderer.renderProject(projectId);
  }

  static saveChange(
    projectId,
    id,
    newTitle,
    newDescription = null,
    todoId = null
  ) {
    const dialog = document.querySelector("dialog");

    if (!todoId) {
      const todo = ProjectFacade.getTodoManager(projectId).getTodo(id);
      todo.setTitle(newTitle);
      todo.setDescription(newDescription);
    }

    if (todoId) {
      const checklist = ProjectFacade.getChecklistManager(
        projectId,
        todoId
      ).getChecklist(id);
      checklist.setTitle(newTitle);
    }

    dialog.close();

    DOMRenderer.renderProject(projectId);
  }

  static toggleIsComplete(projectId, id, todoId = null) {
    if (!todoId) {
      const todo = ProjectFacade.getTodoManager(projectId).getTodo(id);

      todo.toggleComplete();
    }

    if (todoId) {
      const checklist = ProjectFacade.getChecklistManager(
        projectId,
        todoId
      ).getChecklist(id);

      checklist.toggleComplete();
    }
  }
}
