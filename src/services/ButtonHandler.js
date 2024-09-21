import DOMRenderer from "./DOMRenderer";
import ProjectFacade from "./ProjectFacade";

export default class ButtonHandler {
  static deleteItem(itemData) {
    const dialog = document.querySelector("dialog");

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

    dialog.close();

    DOMRenderer.renderProject(itemData.projectId);
  }

  static saveChange(itemData, newTitle, newDescription = null) {
    const dialog = document.querySelector("dialog");

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

    dialog.close();

    DOMRenderer.renderProject(itemData.projectId);
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
}
