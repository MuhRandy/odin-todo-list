import Project from "../models/entities/Project";
import ProjectsPrinter from "./ProjectsPrinter";
import Checker from "./Checker";
import ProjectFacade from "./ProjectFacade";

export default class ProjectManager {
  static #projects = [];

  static createProject(title, id = new Date().getTime()) {
    const newProject = new Project(title, id);

    this.#projects.push(newProject);

    ProjectFacade.saveProjects();

    return newProject;
  }

  static printProjects() {
    ProjectsPrinter.print(this.#projects);
  }

  static getProjects() {
    return this.#projects;
  }

  static getProject(id) {
    const targetProject = this.#projects.filter(
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

  static getProjectsData() {
    return this.#projects.map((project) =>
      this.getProjectData(project.getId())
    );
  }

  static deleteProject(id) {
    this.getProject(id);

    this.#projects = this.#projects.filter((project) => project.getId() !== id);

    ProjectFacade.saveProjects();
  }
}
