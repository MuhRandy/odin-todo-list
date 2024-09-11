export default class Project {
  constructor(title, todoManager, id = new Date().getTime()) {
    this.title = title;
    this.id = id;
    this.todoManager = todoManager;
  }

  getTodos() {
    return this.todoManager.getTodos();
  }
}
