import MessageLogService from "../../services/MessageLogService";
import ProjectsStorageService from "../../services/ProjectsStorageService";
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

    ProjectsStorageService.save();

    return newChecklist;
  }

  deleteChecklist(id) {
    MessageLogService.isItemExist(this.checklists, id);

    this.checklists = this.checklists.filter(
      (checklist) => checklist.getId() !== id
    );

    ProjectsStorageService.save();
  }

  getChecklists() {
    return this.checklists;
  }
}
