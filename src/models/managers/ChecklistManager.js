import Checker from "../../services/Checker";
import ProjectFacade from "../../services/ProjectFacade";
import Checklist from "../entities/Checklist";

export default class ChecklistManager {
  #projectId;
  #todoId;
  #checklists = [];
  constructor(projectId, todoId) {
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

    this.#checklists.push(newChecklist);

    ProjectFacade.saveProjects();

    return newChecklist;
  }

  deleteChecklist(id) {
    Checker.isItemExist(this.#checklists, id);

    this.#checklists = this.#checklists.filter(
      (checklist) => checklist.getId() !== id
    );

    ProjectFacade.saveProjects();
  }

  getChecklists() {
    return this.#checklists;
  }

  getChecklist(id) {
    Checker.isItemExist(this.#checklists, id);

    return this.#checklists.filter((checklist) => checklist.getId() === id)[0];
  }

  getChecklistData(id) {
    const checklist = this.getChecklist(id);

    return {
      title: checklist.getTitle(),
      id: checklist.getId(),
      todoId: checklist.getTodoId(),
      projectId: checklist.getProjectId(),
      isComplete: checklist.isComplete(),
      priority: checklist.getPriority(),
    };
  }

  getChecklistsData() {
    return this.getChecklists().map((checklist) =>
      this.getChecklistData(checklist.getId())
    );
  }
}
