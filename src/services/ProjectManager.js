import LocalStorageService from "./LocalStorageService";
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
      const projectData = this.getProjectData(project.getId());

      return {
        ...projectData,
        todos: project.getTodos().map((todo) => {
          const todoData = this.getTodoData(project.getId(), todo.getId());

          return {
            ...todoData,
            checklists: todo.getChecklists().map((checklist) => {
              const checklistData = this.getChecklistData(
                project.getId(),
                todo.getId(),
                checklist.getId()
              );

              return checklistData;
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

  static getProjectData(id) {
    const project = this.getProject(id);

    return {
      title: project.getTitle(),
      id: project.getId(),
    };
  }

  static getTodoData(projectId, id) {
    const todoManager = this.getProject(projectId).getTodoManager();

    return todoManager.getTodoData(id);
  }

  static getChecklistData(projectId, todoId, id) {
    const checklistManager = this.getProject(projectId)
      .getTodoManager()
      .getTodo(todoId)
      .getChecklistManager();

    return checklistManager.getChecklistData(id);
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
        currentTodo.setPriority(todo.priority);
        currentTodo.setCompleteStatus(todo.isComplete);

        todo.checklists.forEach((checklist) => {
          const currentChecklist = currentTodo.addChecklistItem(
            checklist.title,
            checklist.id
          );

          currentChecklist.setPriority(checklist.priority);
          currentChecklist.setCompleteStatus(checklist.isComplete);
        });
      });
    });
  }
}
