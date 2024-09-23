import ProjectFacade from "../../services/ProjectFacade";

export default class Prioritizable {
  #priority = "normal";
  #priorities = ["urgent", "important", "normal", "low"];

  setPriority(priorityNumber) {
    let index = priorityNumber;
    if (isNaN(priorityNumber))
      index = this.#priorities.findIndex(
        (priority) => priority === priorityNumber
      );
    this.#priority = this.#priorities[index];

    ProjectFacade.saveProjects();
  }

  getPriority() {
    return this.#priority;
  }
}
