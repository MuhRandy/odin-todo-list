import ProjectsStorageService from "../../services/ProjectsStorageService";
import Project from "../entities/Project";
import TodoManager from "./TodoManager";

export default class ProjectManager {
  constructor() {
    this.projects = this.loadProjects();
  }

  createProject(title, todoManager = new TodoManager()) {
    const newProject = new Project(title, todoManager);

    this.projects.push(newProject);
  }

  saveProjects() {
    ProjectsStorageService.save(this.projects);
  }

  loadProjects() {
    return ProjectsStorageService.load();
  }
}
