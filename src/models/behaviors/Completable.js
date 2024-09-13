export default class Completable {
  #isComplete = false;

  getCompleteStatus() {
    return this.#isComplete;
  }

  setCompleteStatus(newCompleteStatus) {
    this.#isComplete = newCompleteStatus;
  }

  toggleComplete() {
    this.#isComplete = !this.#isComplete;
  }
}
