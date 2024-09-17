import DOMGenerator from "./DOMGenerator";
import ProjectManager from "./ProjectManager";

export default class ButtonHandler {
  static deleteItem(projectId, id, todoId = null) {
    if (!todoId) ProjectManager.deleteTodo(projectId, id);
    if (todoId) ProjectManager.deleteChecklist(projectId, todoId, id);

    DOMGenerator.generateProject(projectId);
  }
}
