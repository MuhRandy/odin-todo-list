import TodoManager from "./TodoManager";

export default class Project {
  constructor(title, todoManager = new TodoManager()) {
    this.title = title;
    this.todoManager = todoManager;
  }

  getTodos() {
    return this.todoManager.getTodos();
  }
}
