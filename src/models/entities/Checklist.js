import Completable from "../behaviors/Completable";
import Prioritizable from "../behaviors/Prioritizable";

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
