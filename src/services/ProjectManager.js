import LocalStorageService from "./LocalStorageService";
import Completable from "../models/behaviors/Completable";
import Prioritizable from "../models/behaviors/Prioritizable";
import Project from "../models/entities/Project";
import ProjectsPrinter from "./ProjectsPrinter";
import Checker from "./Checker";

export default class ProjectManager {
  static projects = [];

  static createProject(title, id = new Date().getTime()) {
    const newProject = new Project(title, id);

    this.projects.push(newProject);

    this.save();

    return newProject;
  }

  static save() {
    const savedProjects = this.projects.map((project) => {
      return {
        title: project.title,
        id: project.getId(),
        todos: project.getTodos().map((todo) => {
          return {
            title: todo.title,
            id: todo.getId(),
            projectId: todo.getProjectId(),
            description: todo.description,
            notes: todo.getNotes(),
            dueDate: todo.getDueDate(),
            isComplete: todo.isComplete(),
            priority: todo.getPriority(),
            checklists: todo.getChecklists().map((checklist) => {
              return {
                title: checklist.title,
                id: checklist.getId(),
                todoId: checklist.getTodoId(),
                projectId: checklist.getProjectId(),
                isComplete: checklist.isComplete(),
                priority: checklist.getPriority(),
              };
            }),
          };
        }),
      };
    });

    LocalStorageService.save("projects", savedProjects);
  }

  static load() {
    const loadedProjects = LocalStorageService.load("projects");

    this.transform(loadedProjects);
  }

  static printProjects() {
    ProjectsPrinter.print(this.projects);
  }

  static getProject(id) {
    const targetProject = this.projects.filter(
      (project) => project.getId() === id
    );
    Checker.isProjectExist(targetProject, id);

    return targetProject[0];
  }

  static deleteProject(id) {
    this.getProject(id);

    this.projects = this.projects.filter((project) => project.getId() !== id);

    this.save();
  }

  static deleteTodo(projectId, id) {
    const targetProjectTodoManager =
      this.getProject(projectId).getTodoManager();

    targetProjectTodoManager.deleteTodo(id);
  }

  static deleteChecklist(projectId, todoId, id) {
    const targetTodoChecklistManager = this.getProject(projectId)
      .getTodoManager()
      .getTodo(todoId)
      .getChecklistManager();

    targetTodoChecklistManager.deleteChecklist(id);
  }

  static transform(projects) {
    projects?.forEach((project) => {
      const currentProject = this.createProject(project.title, project.id);

      const todoManager = currentProject.getTodoManager();

      project.todos.forEach((todo) => {
        const currentTodo = todoManager.createTodo(
          todo.title,
          todo.description,
          todo.id
        );

        currentTodo.setNotes(todo.notes);
        currentTodo.setDueDate(todo.dueDate);
        currentTodo.prioritizable = new Prioritizable(todo.priority);
        currentTodo.completable = new Completable(todo.isComplete);

        todo.checklists.forEach((checklist) => {
          const currentChecklist = currentTodo.addChecklistItem(
            checklist.title,
            checklist.id
          );

          currentChecklist.prioritizable = new Prioritizable(
            checklist.priority
          );
          currentChecklist.completable = new Completable(checklist.isComplete);
        });
      });
    });
  }
}
