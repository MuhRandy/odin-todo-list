import ChecklistManager from "./ChecklistManager.js";
import Todo from "./Todo.js";

export default class TodoManager {
  constructor() {
    this.todos = [];
  }

  createTodo(title, description, checklistManager = new ChecklistManager()) {
    const newTodo = new Todo(title, description, checklistManager);

    this.todos.push(newTodo);
  }

  getTodos() {
    return this.todos;
  }
}
