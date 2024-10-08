export default class Checker {
  static isDateValid(date) {
    return !isNaN(new Date(date).getTime());
  }

  static isProjectExist(targetProject, id) {
    if (targetProject.length === 0)
      throw new Error("No such project with id " + id);
  }

  static isItemExist(items, id) {
    const targetItem = items.filter((item) => item.getId() === id);
    if (targetItem.length === 0)
      throw new Error("No such todo or checklist with id " + id);
  }
}
