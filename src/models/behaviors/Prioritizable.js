export default class Prioritizable {
  constructor(priority = "normal") {
    this.priority = priority;
  }

  setPriority(priority) {
    const priorities = ["urgent", "important", "normal", "low"];

    this.priority = priorities[priority];
  }

  getPriority() {
    return this.priority;
  }
}
