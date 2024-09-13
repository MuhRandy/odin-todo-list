import TodoManager from "../managers/TodoManager";

export default class Project {
  #title;
  #id;
  #todoManager = new TodoManager(id);
  constructor(title, id) {
    this.#title = title;
    this.#id = id;
  }

  setTitle(newTitle) {
    this.#title = newTitle;
  }

  getTitle() {
    return this.#title;
  }

  getId() {
    return this.#id;
  }

  getTodos() {
    return this.#todoManager.getTodos();
  }

  getTodoManager() {
    return this.#todoManager;
  }
}
