import Completable from "./Completable.js";
import Prioritizable from "./Prioritizable.js";

export default class Checklist {
  constructor(title) {
    this.title = title;
    this.completable = new Completable();
    this.prioritizable = new Prioritizable();
  }

  toggleComplete() {
    this.completable.toggleComplete();
  }

  isComplete() {
    return this.completable.isComplete;
  }

  setPriority(priority) {
    this.prioritizable.setPriority(priority);
  }

  getPriority() {
    return this.prioritizable.getPriority();
  }
}
