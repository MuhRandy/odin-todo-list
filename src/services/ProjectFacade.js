import LocalStorageService from "./LocalStorageService";
import ProjectManager from "./ProjectManager";

export default class ProjectFacade {
  static getTodoManager(projectId) {
    return ProjectManager.getProject(projectId).getTodoManager();
  }

  static getChecklistManager(projectId, todoId) {
    return this.getTodoManager(projectId).getTodo(todoId).getChecklistManager();
  }

  static saveProjects() {
    const savedProjects = ProjectManager.getProjects().map((project) => {
      const projectData = ProjectManager.getProjectData(project.getId());

      return {
        ...projectData,
        todos: project.getTodos().map((todo) => {
          const todoManager = this.getTodoManager(project.getId());

          const todoData = todoManager.getTodoData(todo.getId());

          return {
            ...todoData,
            checklists: todo.getChecklists().map((checklist) => {
              const checklistManager = this.getChecklistManager(
                project.getId(),
                todo.getId()
              );
              const checklistData = checklistManager.getChecklistData(
                checklist.getId()
              );

              return checklistData;
            }),
          };
        }),
      };
    });

    LocalStorageService.save("projects", savedProjects);
  }

  static loadProjects() {
    const loadedProjects = LocalStorageService.load("projects");

    this.transform(loadedProjects);
  }

  static transform(projects) {
    projects?.forEach((project) => {
      const currentProject = ProjectManager.createProject(
        project.title,
        project.id
      );

      const todoManager = currentProject.getTodoManager();

      project.todos.forEach((todo) => {
        const currentTodo = todoManager.createTodo(
          todo.title,
          todo.description,
          todo.id
        );

        currentTodo.setNotes(todo.notes);
        currentTodo.setDueDate(todo.dueDate);
        currentTodo.setPriority(todo.priority);
        currentTodo.setCompleteStatus(todo.isComplete);

        todo.checklists.forEach((checklist) => {
          const currentChecklist = currentTodo.addChecklistItem(
            checklist.title,
            checklist.id
          );

          currentChecklist.setPriority(checklist.priority);
          currentChecklist.setCompleteStatus(checklist.isComplete);
        });
      });
    });
  }
}
