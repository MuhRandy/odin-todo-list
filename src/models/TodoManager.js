import Todo from "./Todo.js";

export default class TodoManager {
  todos = [];

  createTodo(title, description) {
    const newTodo = new Todo(title, description);
    newTodo.setPriority(2);
    newTodo.setNotes("");
    newTodo.setDueDate("");

    this.todos.push(newTodo);
  }

  getTodos() {
    return this.todos;
  }
}
