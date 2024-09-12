export default class ProjectsPrinter {
  static print(projects) {
    projects.forEach((project) => {
      console.log(`Project: ${project.title}`);
      project.getTodos().forEach((todo, i) => {
        console.log(
          `${i + 1}. ${todo.title} - ${todo.getPriority()} ${
            todo.isComplete() ? "✅" : "❎"
          }`
        );
        todo.notes && console.log(`  Notes: ${todo.notes}`);
        todo.dueDate && console.log(`  Due Date: ${todo.dueDate}`);

        // Print checklist items
        todo.getChecklists().forEach((checklistItem, j) => {
          console.log(
            `    Checklist ${j + 1}: ${
              checklistItem.title
            } - Priority: ${checklistItem.getPriority()} - ${
              checklistItem.isComplete() ? "✅" : "❎"
            }`
          );
        });
      });
    });
  }
}
