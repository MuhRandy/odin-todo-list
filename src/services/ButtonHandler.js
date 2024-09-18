import DOMRenderer from "./DOMRenderer";
import ProjectManager from "./ProjectManager";

export default class ButtonHandler {
  static deleteItem(projectId, id, todoId = null) {
    if (!todoId) ProjectManager.deleteTodo(projectId, id);
    if (todoId) ProjectManager.deleteChecklist(projectId, todoId, id);

    DOMRenderer.renderProject(projectId);
  }

  static toggleIsComplete(projectId, id, todoId = null) {
    const project = ProjectManager.getProject(projectId);

    if (!todoId) {
      const todo = project.getTodoManager().getTodo(id);

      todo.toggleComplete();
    }

    if (todoId) {
      const todo = project.getTodoManager().getTodo(todoId);
      const checklist = todo.getChecklistManager().getChecklist(id);

      checklist.toggleComplete();
    }
  }
}
