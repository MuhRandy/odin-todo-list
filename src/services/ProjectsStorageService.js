import LocalStorageService from "./LocalStorageService";
import ChecklistManager from "../models/managers/ChecklistManager";
import TodoManager from "../models/managers/TodoManager";
import Completable from "../models/behaviors/Completable";
import Prioritizable from "../models/behaviors/Prioritizable";
import Project from "../models/entities/Project";

export default class ProjectsStorageService {
  static save(projects) {
    const savedProjects = projects.map((project) => {
      return {
        title: project.title,
        id: project.id,
        todos: project.getTodos().map((todo) => {
          return {
            title: todo.title,
            description: todo.description,
            notes: todo.notes,
            dueDate: todo.dueDate,
            checklists: todo.getChecklists().map((checklist) => {
              return {
                title: checklist.title,
                isComplete: checklist.isComplete(),
                priority: checklist.getPriority(),
              };
            }),
            isComplete: todo.isComplete(),
            priority: todo.getPriority(),
          };
        }),
      };
    });

    LocalStorageService.save("projects", savedProjects);
  }

  static load() {
    const loadedProjects = LocalStorageService.load("projects");
    const projects = [];

    loadedProjects?.forEach((project) => {
      const todoManager = new TodoManager();
      projects.push(new Project(project.title, todoManager));

      project.todos.forEach((todo, i) => {
        const checklistManager = new ChecklistManager();
        todoManager.createTodo(todo.title, todo.description, checklistManager);

        const currentTodo = todoManager.getTodos()[i];
        currentTodo.setNotes(todo.notes);
        currentTodo.setDueDate(todo.dueDate);
        currentTodo.prioritizable = new Prioritizable(todo.priority);
        currentTodo.completable = new Completable(todo.isComplete);
        currentTodo.getChecklists().forEach((checklist, j) => {
          todo.addChecklistItem(checklist.title);

          const currentChecklist = checklistManager.getChecklists()[j];
          currentChecklist.prioritizable = new Prioritizable(
            checklist.priority
          );
          currentChecklist.completable = new Completable(checklist.isComplete);
        });
      });
    });

    return projects;
  }
}
