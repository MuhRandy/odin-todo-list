import ButtonHandler from "./ButtonHandler";
import ProjectManager from "./ProjectManager";

export default class DOMFactory {
  static createTodos(projectId) {
    const todosContainer = this.#createContainer("todos");

    ProjectManager.getTodosData(projectId).map((todo) => {
      const container = this.#createContainer("todo");
      const titleWithIcon = this.#createTitleWithIcon(
        projectId,
        todo.id,
        todo.title
      );
      const description = document.createElement("p");
      const checklists = this.#createChecklists(projectId, todo.id);

      description.textContent = todo.description;
      description.className = "description";

      container.appendChild(titleWithIcon);
      container.appendChild(description);

      container.appendChild(checklists);

      todosContainer.appendChild(container);
    });

    return todosContainer;
  }

  static #createChecklists(projectId, todoId) {
    const checklistsContainer = this.#createContainer("checklists");

    ProjectManager.getChecklistsData(projectId, todoId).map((checklist) => {
      const li = document.createElement("li");
      const titleWithIcon = this.#createTitleWithIcon(
        projectId,
        checklist.id,
        checklist.title,
        todoId
      );

      li.appendChild(titleWithIcon);

      checklistsContainer.appendChild(li);
    });

    return checklistsContainer;
  }

  static #createCheckbox(id) {
    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.id = id;

    return checkbox;
  }

  static #createLabel(id, textContent) {
    const label = document.createElement("label");

    label.htmlFor = id;
    label.textContent = textContent;

    return label;
  }

  static #createContainer(className) {
    const div = document.createElement("div");

    div.className = className;

    return div;
  }

  static #createTitle(id, title, todoId = null) {
    const titleContainer = this.#createContainer("title");
    const checkbox = this.#createCheckbox(id);
    const titleLabel = this.#createLabel(id, title);

    if (todoId) checkbox.dataset.todoId = todoId;

    titleContainer.appendChild(checkbox);
    titleContainer.appendChild(titleLabel);

    return titleContainer;
  }

  static #createTitleWithIcon(projectId, id, title, todoId = null) {
    const container = this.#createContainer("title-with-icon");
    const titleContainer = this.#createTitle(id, title, todoId);
    const iconContainer = this.#createContainer("icon");
    const editIcon = this.#createButtonWithIcon("edit");
    const deleteIcon = this.#createButtonWithIcon("trash");

    deleteIcon.addEventListener("click", () => {
      ButtonHandler.deleteItem(projectId, id, todoId);
    });

    iconContainer.appendChild(editIcon);
    iconContainer.appendChild(deleteIcon);

    container.appendChild(titleContainer);
    container.appendChild(iconContainer);

    return container;
  }

  static #createIcon(iconCode) {
    const icon = document.createElement("i");

    icon.className = `ti ti-${iconCode}`;

    return icon;
  }

  static #createButtonWithIcon(iconCode) {
    const button = document.createElement("button");
    const icon = this.#createIcon(iconCode);

    button.appendChild(icon);

    return button;
  }
}