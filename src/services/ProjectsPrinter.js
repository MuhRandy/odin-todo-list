export default class ProjectsPrinter {
  static print(projects) {
    projects.forEach((project) => {
      console.log(`Project: ${project.getTitle()}`);
      project.getTodos().forEach((todo, i) => {
        console.log(
          `${i + 1}. ${todo.getTitle()} - ${todo.getPriority()} ${
            todo.isComplete() ? "✅" : "❎"
          }`
        );
        todo.getNotes() && console.log(`  Notes: ${todo.getNotes()}`);
        todo.getDueDate() && console.log(`  Due Date: ${todo.getDueDate()}`);

        // Print checklist items
        todo.getChecklists().forEach((checklistItem, j) => {
          console.log(
            `    Checklist ${
              j + 1
            }: ${checklistItem.getTitle()} - Priority: ${checklistItem.getPriority()} - ${
              checklistItem.isComplete() ? "✅" : "❎"
            }`
          );
        });
      });
    });
  }
}
