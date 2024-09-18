import ProjectFacade from "../../services/ProjectFacade";

export default class Completable {
  #isComplete = false;

  getCompleteStatus() {
    return this.#isComplete;
  }

  setCompleteStatus(newCompleteStatus) {
    this.#isComplete = newCompleteStatus;
    ProjectFacade.saveProjects();
  }

  toggleComplete() {
    this.#isComplete = !this.#isComplete;
  }
}
