export default class Completable {
  constructor(isComplete = false) {
    this.isComplete = isComplete;
  }

  toggleComplete() {
    this.isComplete = !this.isComplete;
  }
}
