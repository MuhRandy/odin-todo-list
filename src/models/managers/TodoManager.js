import Todo from "../entities/Todo";
import ProjectManager from "../../services/ProjectManager";
import Checker from "../../services/Checker";

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
    Checker.isItemExist(this.todos, id);

    this.todos = this.todos.filter((todo) => todo.getId() !== id);

    ProjectManager.save();
  }

  getTodo(id) {
    Checker.isItemExist(this.todos, id);

    return this.todos.filter((todo) => todo.getId() === id)[0];
  }

  getTodoData(id) {
    const todo = this.getTodo(id);

    return {
      title: todo.title,
      id: todo.getId(),
      projectId: todo.getProjectId(),
      description: todo.description,
      notes: todo.getNotes(),
      dueDate: todo.getDueDate(),
      isComplete: todo.isComplete(),
      priority: todo.getPriority(),
    };
  }

  getTodos() {
    return this.todos;
  }
}
