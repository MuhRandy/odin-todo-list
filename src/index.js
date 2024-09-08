import "./styles.css";

class Project {
  constructor(title) {
    this.title = title;
  }

  project = [];

  createTodo(title, description) {
    const newTodo = new Todo(title, description);
    newTodo.setPriority(2);
    newTodo.setNotes("");
    newTodo.setDueDate("");

    this.project.push(newTodo);
  }

  printTodos = () => {
    console.log(this.title);

    this.project.map((todo, i) => {
      console.log(`${i}. ${todo.title}`);
    });
  };
}

class Todo {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }

  isComplete = false;
  checklists = [];

  setPriority = (priority) => {
    const priorities = ["urgent", "important", "normal", "low"];
    this.priority = priorities[priority];
  };

  setDueDate = (date) => {
    this.dueDate = new Date(date);
  };

  setNotes = (notes) => {
    this.notes = notes;
  };

  addChecklist = (title) => {
    this.checklists.push(new Checklist(title));
  };

  toggleComplete = () => {
    this.isComplete = !this.isComplete;
  };
}

class Checklist {
  constructor(title) {
    this.title = title;
  }

  isComplete = false;
}

const defaultProject = new Project("default");

defaultProject.createTodo("Brush Teeth", "");

defaultProject.project[0].addChecklist("To do 1");
defaultProject.project[0].toggleComplete();

console.log(defaultProject);
defaultProject.printTodos();
