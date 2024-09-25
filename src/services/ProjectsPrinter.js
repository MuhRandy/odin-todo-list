export default class ProjectsPrinter {
  static print(projects) {
    projects.forEach((project) => {
      // eslint-disable-next-line no-undef
      console.log(`Project: ${project.getTitle()}`);
      project.getTodos().forEach((todo, i) => {
        // eslint-disable-next-line no-undef
        console.log(
          `${i + 1}. ${todo.getTitle()} - ${todo.getPriority()} ${
            todo.isComplete() ? "✅" : "❎"
          }`,
        );
        // eslint-disable-next-line no-undef
        todo.getNotes() && console.log(`  Notes: ${todo.getNotes()}`);
        // eslint-disable-next-line no-undef
        todo.getDueDate() && console.log(`  Due Date: ${todo.getDueDate()}`);

        // Print checklist items
        todo.getChecklists().forEach((checklistItem, j) => {
          // eslint-disable-next-line no-undef
          console.log(
            `    Checklist ${j + 1}: ${checklistItem.getTitle()} - ${
              checklistItem.isComplete() ? "✅" : "❎"
            }`,
          );
        });
      });
    });
  }
}
