import Checker from "../../services/Checker";
import Completable from "../behaviors/Completable";
import Prioritizable from "../behaviors/Prioritizable";
import ChecklistManager from "../managers/ChecklistManager";

export default class Todo {
  #id;
  #projectId;
  #notes = "";
  #dueDate = "";
  constructor(title, description, projectId, id) {
    this.title = title;
    this.description = description;
    this.#id = id;
    this.#projectId = projectId;

    this.checklistManager = new ChecklistManager(this.#projectId, this.#id);
    this.completable = new Completable();
    this.prioritizable = new Prioritizable();
  }

  setPriority(priority) {
    this.prioritizable.setPriority(priority);
  }

  setDueDate(date) {
    Checker.isDateValid(date) ? (this.#dueDate = new Date(date)) : "";
  }

  setNotes(notes) {
    this.#notes = notes;
  }

  toggleComplete() {
    this.completable.toggleComplete();
  }

  isComplete() {
    return this.completable.isComplete;
  }

  addChecklistItem(title, id = new Date().getTime()) {
    return this.checklistManager.addChecklistItem(title, id);
  }

  getChecklists() {
    return this.checklistManager.getChecklists();
  }

  getPriority() {
    return this.prioritizable.getPriority();
  }

  getNotes() {
    return this.#notes;
  }

  getDueDate() {
    return this.#dueDate;
  }

  getId() {
    return this.#id;
  }

  getProjectId() {
    return this.#projectId;
  }

  getChecklistManager() {
    return this.checklistManager;
  }

  toggleChecklistItem(index) {
    this.getChecklists()[index].toggleComplete();
  }
}
