import Checker from "../../services/Checker";
import ProjectManager from "../../services/ProjectManager";
import Checklist from "../entities/Checklist";

export default class ChecklistManager {
  #projectId;
  #todoId;
  constructor(projectId, todoId) {
    this.checklists = [];
    this.#todoId = todoId;
    this.#projectId = projectId;
  }

  addChecklistItem(title, id) {
    const newChecklist = new Checklist(
      title,
      this.#projectId,
      this.#todoId,
      id
    );

    this.checklists.push(newChecklist);

    ProjectManager.save();

    return newChecklist;
  }

  deleteChecklist(id) {
    Checker.isItemExist(this.checklists, id);

    this.checklists = this.checklists.filter(
      (checklist) => checklist.getId() !== id
    );

    ProjectManager.save();
  }

  getChecklists() {
    return this.checklists;
  }
}
