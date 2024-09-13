import TodoManager from "../managers/TodoManager";

export default class Project {
  #title;
  #id;
  constructor(title, id) {
    this.#title = title;
    this.#id = id;
    this.todoManager = new TodoManager(id);
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
    return this.todoManager.getTodos();
  }

  getTodoManager() {
    return this.todoManager;
  }
}
