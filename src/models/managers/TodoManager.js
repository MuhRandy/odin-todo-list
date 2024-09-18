import Todo from "../entities/Todo";
import Checker from "../../services/Checker";
import ProjectFacade from "../../services/ProjectFacade";

export default class TodoManager {
  #projectId;
  #todos = [];

  constructor(projectId) {
    this.#projectId = projectId;
  }

  createTodo(title, description, id = new Date().getTime()) {
    const newTodo = new Todo(title, description, this.#projectId, id);

    this.#todos.push(newTodo);

    ProjectFacade.saveProjects();

    return newTodo;
  }

  deleteTodo(id) {
    Checker.isItemExist(this.#todos, id);

    this.#todos = this.#todos.filter((todo) => todo.getId() !== id);

    ProjectFacade.saveProjects();
  }

  getTodo(id) {
    Checker.isItemExist(this.#todos, id);

    return this.#todos.filter((todo) => todo.getId() === id)[0];
  }

  getTodoData(id) {
    const todo = this.getTodo(id);

    return {
      title: todo.getTitle(),
      id: todo.getId(),
      projectId: todo.getProjectId(),
      description: todo.getDescription(),
      notes: todo.getNotes(),
      dueDate: todo.getDueDate(),
      isComplete: todo.isComplete(),
      priority: todo.getPriority(),
    };
  }

  getTodos() {
    return this.#todos;
  }

  getTodosData() {
    return this.getTodos().map((todo) => this.getTodoData(todo.getId()));
  }
}
