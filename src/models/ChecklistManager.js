import Checklist from "./Checklist.js";

export default class ChecklistManager {
  constructor() {
    this.checklists = [];
  }

  addChecklistItem(title) {
    const newChecklist = new Checklist(title);
    newChecklist.setPriority(2);

    this.checklists.push(newChecklist);
  }

  getChecklists() {
    return this.checklists;
  }
}
