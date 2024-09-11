export default class Project {
  constructor(title, todoManager) {
    this.title = title;
    this.id = new Date().getTime();
    this.todoManager = todoManager;
  }

  getTodos() {
    return this.todoManager.getTodos();
  }
}
