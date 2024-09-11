import ProjectPrinter from "./services/ProjectPrinter.js";
import TodoManager from "./models/TodoManager.js";
import ProjectManager from "./models/ProjectManager.js";

const projectManager = new ProjectManager();

const todoManager = new TodoManager();

projectManager.createProject("Personal Development Project", todoManager);

todoManager.createTodo(
  "Learn JavaScript",
  "Complete JavaScript course on The Odin Project"
);
todoManager.createTodo("Workout Routine", "Create a 4-week workout plan");
todoManager.createTodo(
  "Grocery Shopping",
  "Prepare shopping list for the week"
);
todoManager.createTodo("Plan Vacation", "Research and book a trip");
todoManager.createTodo("Read a Book", "Finish reading a new novel");

const todo1 = todoManager.getTodos()[0];
todo1.addChecklistItem("Complete DOM manipulation section");
todo1.addChecklistItem("Build a project using JS");

const todo2 = todoManager.getTodos()[1];
todo2.addChecklistItem("Design workout schedule");
todo2.addChecklistItem("Buy gym equipment");
todo2.addChecklistItem("Track progress");

const todo3 = todoManager.getTodos()[2];
todo3.addChecklistItem("Create meal plan");
todo3.addChecklistItem("List groceries for each meal");
todo3.addChecklistItem("Find discounts");

const todo4 = todoManager.getTodos()[3];
todo4.addChecklistItem("Research destinations");
todo4.addChecklistItem("Check flight prices");
todo4.addChecklistItem("Book hotel");

const todo5 = todoManager.getTodos()[4];
todo5.addChecklistItem("Read 50 pages per day");
todo5.addChecklistItem("Write notes for each chapter");

todo1.setPriority(1); // Important
todo2.setPriority(2); // Normal
todo3.setPriority(0); // Urgent
todo4.setPriority(3); // Low
todo5.setPriority(2); // Normal

todo1.getChecklists()[0].setPriority(0); // Urgent checklist item
todo2.getChecklists()[1].setPriority(1); // Important checklist item
todo3.getChecklists()[2].setPriority(2); // Normal checklist item
todo4.getChecklists()[0].setPriority(1); // Important checklist item
todo5.getChecklists()[1].setPriority(3); // Low checklist item

todo1.getChecklists()[0].toggleComplete();
todo2.getChecklists()[1].toggleComplete();
todo4.getChecklists()[2].toggleComplete();

projectManager.saveProjects();

projectManager.projects.forEach((project) => {
  ProjectPrinter.print(project);
});
