import Checklist from "./Checklist.js";

export default class ChecklistManager {
  constructor() {
    this.checklists = [];
  }

  addChecklistItem(title) {
    const newChecklist = new Checklist(title);

    this.checklists.push(newChecklist);
  }

  getChecklists() {
    return this.checklists;
  }
}
