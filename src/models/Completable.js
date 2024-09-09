export default class Completable {
  constructor() {
    this.isComplete = false;
  }

  toggleComplete() {
    this.isComplete = !this.isComplete;
  }
}
