import Completable from "../behaviors/Completable";
import Prioritizable from "../behaviors/Prioritizable";

export default class Checklist {
  #id;
  #todoId;
  #projectId;
  constructor(title, projectId, todoId, id) {
    this.title = title;
    this.#projectId = projectId;
    this.#todoId = todoId;
    this.#id = id;

    this.completable = new Completable();
    this.prioritizable = new Prioritizable();
  }

  toggleComplete() {
    this.completable.toggleComplete();
  }

  isComplete() {
    return this.completable.isComplete;
  }

  setPriority(priority) {
    this.prioritizable.setPriority(priority);
  }

  getPriority() {
    return this.prioritizable.getPriority();
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
