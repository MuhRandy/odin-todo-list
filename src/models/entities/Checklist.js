import Completable from "../behaviors/Completable";
import Prioritizable from "../behaviors/Prioritizable";

export default class Checklist {
  #title;
  #id;
  #todoId;
  #projectId;
  #completable = new Completable();
  #prioritizable = new Prioritizable();
  constructor(title, projectId, todoId, id) {
    this.#title = title;
    this.#projectId = projectId;
    this.#todoId = todoId;
    this.#id = id;
  }

  toggleComplete() {
    this.#completable.toggleComplete();
  }

  isComplete() {
    return this.#completable.getCompleteStatus();
  }

  setTitle(newTitle) {
    this.#title = newTitle;
  }

  setPriority(priority) {
    this.#prioritizable.setPriority(priority);
  }

  setCompleteStatus(newStatus) {
    this.#completable.setCompleteStatus(newStatus);
  }

  getTitle() {
    return this.#title;
  }

  getPriority() {
    return this.#prioritizable.getPriority();
  }

  getId() {
    return this.#id;
  }

  getTodoId() {
    return this.#todoId;
  }

  getProjectId() {
    return this.#projectId;
  }
}
