import Checker from "../../services/Checker";
import Completable from "../behaviors/Completable";
import Prioritizable from "../behaviors/Prioritizable";
import ChecklistManager from "../managers/ChecklistManager";

export default class Todo {
  #title;
  #description;
  #id;
  #projectId;
  #notes = "";
  #dueDate = "";
  #completable = new Completable();
  #prioritizable = new Prioritizable();
  #checklistManager;
  constructor(title, description, projectId, id) {
    this.#title = title;
    this.#description = description;
    this.#id = id;
    this.#projectId = projectId;
    this.#checklistManager = new ChecklistManager(projectId, id);
  }

  setTitle(newTitle) {
    this.#title = newTitle;
  }

  setDescription(newDescription) {
    this.#description = newDescription;
  }

  setPriorityByNumber(priorityNumber) {
    this.#prioritizable.setPriorityByNumber(priorityNumber);
  }

  setPriority(newPriority) {
    this.#prioritizable.setPriority(newPriority);
  }

  setDueDate(date) {
    Checker.isDateValid(date) ? (this.#dueDate = new Date(date)) : "";
  }

  setNotes(notes) {
    this.#notes = notes;
  }

  setCompleteStatus(newStatus) {
    this.#completable.setCompleteStatus(newStatus);
  }

  toggleComplete() {
    this.#completable.toggleComplete();
  }

  isComplete() {
    return this.#completable.getCompleteStatus();
  }

  addChecklistItem(title, id = new Date().getTime()) {
    return this.#checklistManager.addChecklistItem(title, id);
  }

  getTitle() {
    return this.#title;
  }

  getDescription() {
    return this.#description;
  }

  getChecklists() {
    return this.#checklistManager.getChecklists();
  }

  getPriority() {
    return this.#prioritizable.getPriority();
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
    return this.#checklistManager;
  }

  toggleChecklistItem(index) {
    this.getChecklists()[index].toggleComplete();
  }
}
