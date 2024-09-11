import DateValidator from "../../services/DateValidator";
import Completable from "../behaviors/Completable";
import Prioritizable from "../behaviors/Prioritizable";

export default class Todo {
  constructor(title, description, checklistManager) {
    this.title = title;
    this.description = description;
    this.notes = "";
    this.dueDate = "";

    this.checklistManager = checklistManager;
    this.completable = new Completable();
    this.prioritizable = new Prioritizable();
  }

  setPriority(priority) {
    this.prioritizable.setPriority(priority);
  }

  setDueDate(date) {
    DateValidator.isDateValid(date) ? (this.dueDate = new Date(date)) : "";
  }

  setNotes(notes) {
    this.notes = notes;
  }

  toggleComplete() {
    this.completable.toggleComplete();
  }

  isComplete() {
    return this.completable.isComplete;
  }

  addChecklistItem(title) {
    this.checklistManager.addChecklistItem(title);
  }

  getChecklists() {
    return this.checklistManager.getChecklists();
  }

  getPriority() {
    return this.prioritizable.getPriority();
  }

  toggleChecklistItem(index) {
    this.getChecklists()[index].toggleComplete();
  }
}
