import Completable from "../behaviors/Completable";

export default class Checklist {
  #title;
  #id;
  #todoId;
  #projectId;
  #completable = new Completable();
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

  setCompleteStatus(newStatus) {
    this.#completable.setCompleteStatus(newStatus);
  }

  getTitle() {
    return this.#title;
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
