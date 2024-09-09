import DateValidator from "../services/DateValidator.js";
import ChecklistManager from "./ChecklistManager";
import Completable from "./Completable.js";
import Prioritizable from "./Prioritizable.js";

export default class Todo {
  constructor(title, description, checklistManager = new ChecklistManager()) {
    this.title = title;
    this.description = description;
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
