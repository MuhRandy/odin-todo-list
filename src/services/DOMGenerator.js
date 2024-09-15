import ProjectManager from "./ProjectManager";

export default class DOMGenerator {
  static generateProjectsList() {
    const projects = document.querySelector(".projects");

    ProjectManager.getProjectsData().map((project) => {
      const li = document.createElement("li");

      li.textContent = project.title;
      li.dataset.id = project.id;

      projects.appendChild(li);
    });
  }

  static generateProject(id) {
    const projectData = ProjectManager.getProjectData(id);

    const main = document.querySelector(".main");
    const projectTitle = document.createElement("h1");
    const todos = document.createElement("div");

    projectTitle.textContent = projectData.title;
    projectTitle.dataset.id = projectData.id;

    main.appendChild(projectTitle);

    todos.className = "todos";

    ProjectManager.getTodosData(id).map((todo) => {
      const todoContainer = document.createElement("div");
      const todoTitleContainer = document.createElement("div");
      const todoCheckbox = document.createElement("input");
      const todoTitle = document.createElement("label");
      const todoDescription = document.createElement("p");
      const checklists = document.createElement("div");

      todoContainer.className = "todo";

      todoTitleContainer.className = "title";

      todoCheckbox.type = "checkbox";
      todoCheckbox.id = todo.id;
      todoCheckbox.dataset.projectId = todo.projectId;

      todoTitle.htmlFor = todo.id;
      todoTitle.textContent = todo.title;

      todoTitleContainer.appendChild(todoCheckbox);
      todoTitleContainer.appendChild(todoTitle);

      todoDescription.textContent = todo.description;
      todoDescription.className = "description";

      todoContainer.appendChild(todoTitleContainer);
      todoContainer.appendChild(todoDescription);

      checklists.className = "checklists";

      ProjectManager.getChecklistsData(id, todo.id).map((checklist) => {
        const li = document.createElement("li");
        const checklistCheckbox = document.createElement("input");
        const checklistTitle = document.createElement("label");

        checklistCheckbox.type = "checkbox";
        checklistCheckbox.id = checklist.id;
        checklistCheckbox.dataset.projectId = checklist.projectId;
        checklistCheckbox.dataset.todoId = checklist.todoId;

        checklistTitle.htmlFor = checklist.id;
        checklistTitle.textContent = checklist.title;

        li.appendChild(checklistCheckbox);
        li.appendChild(checklistTitle);

        checklists.appendChild(li);
      });

      todoContainer.appendChild(checklists);

      todos.appendChild(todoContainer);
    });

    main.appendChild(todos);
  }
}
