import TodoManager from "../managers/TodoManager";

export default class Project {
  #id;
  constructor(title, id) {
    this.title = title;
    this.#id = id;
    this.todoManager = new TodoManager(id);
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
