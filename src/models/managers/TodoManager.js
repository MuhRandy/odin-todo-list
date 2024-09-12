import Todo from "../entities/Todo";
import ProjectManager from "../../services/ProjectManager";
import MessageLogService from "../../services/MessageLogService";

export default class TodoManager {
  #projectId;

  constructor(projectId) {
    this.todos = [];
    this.#projectId = projectId;
  }

  createTodo(title, description, id = new Date().getTime()) {
    const newTodo = new Todo(title, description, this.#projectId, id);

    this.todos.push(newTodo);

    ProjectManager.save();

    return newTodo;
  }

  deleteTodo(id) {
    MessageLogService.isItemExist(this.todos, id);

    this.todos = this.todos.filter((todo) => todo.getId() !== id);

    ProjectManager.save();
  }

  getTodo(id) {
    MessageLogService.isItemExist(this.todos, id);

    return this.todos.filter((todo) => todo.getId() === id)[0];
  }

  getTodos() {
    return this.todos;
  }
}
