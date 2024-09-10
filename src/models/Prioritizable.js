export default class Prioritizable {
  constructor() {
    this.priority = this.setPriority(2);
  }

  setPriority(priority) {
    const priorities = ["urgent", "important", "normal", "low"];

    this.priority = priorities[priority];
  }

  getPriority() {
    return this.priority;
  }
}
