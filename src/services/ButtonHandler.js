import DOMRenderer from "./DOMRenderer";
import ProjectFacade from "./ProjectFacade";
import ProjectManager from "./ProjectManager";

export default class ButtonHandler {
  static deleteItem(projectId, id, todoId = null) {
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
