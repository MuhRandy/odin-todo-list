import ProjectFacade from "../../services/ProjectFacade";

export default class Prioritizable {
  #priority = "normal";

  setPriorityByNumber(priorityNumber) {
    const priorities = ["urgent", "important", "normal", "low"];

    this.#priority = priorities[priorityNumber];
  }

  setPriority(newPriority) {
    this.#priority = newPriority;

    ProjectFacade.saveProjects();
  }

  getPriority() {
    return this.#priority;
  }
}
