export default class Prioritizable {
  constructor() {
    this.priority = "normal";
  }

  setPriority(priority) {
    const priorities = ["urgent", "important", "normal", "low"];

    this.priority = priorities[priority];
  }

  getPriority() {
    return this.priority;
  }
}
