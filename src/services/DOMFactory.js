import { formatDistanceToNow } from "date-fns";
import ButtonHandler from "./ButtonHandler";
import DOMRenderer from "./DOMRenderer";
import ProjectFacade from "./ProjectFacade";

export default class DOMFactory {
  static #priorityOptions = [
    {
      text: "urgent",
    },
    {
      text: "important",
    },
    {
      text: "normal",
      selected: true,
    },
    {
      text: "low",
    },
  ];

  static createTodos(projectId) {
    const todosContainer = this.createContainer("todos");
    const todoManager = ProjectFacade.getTodoManager(projectId);
    const addTodo = this.createButtonWithIcon("pencil-plus");
    // eslint-disable-next-line no-undef
    const buttonText = document.createElement("span");

    buttonText.textContent = "Add To-Do";
    addTodo.className = "add-to-do";
    addTodo.addEventListener("click", () =>
      DOMRenderer.renderAddItemDialog("To-Do", { id: projectId }),
    );

    todoManager.getTodosData(projectId).map((todo) => {
      const container = this.createContainer("todo");
      const titleWithIcon = this.#createTitleWithIcon(todo);
      const descriptionContainer = this.createContainer("description");
      // eslint-disable-next-line no-undef
      const description = document.createElement("p");
      const detail = this.createContainer("checklist-number-and-priority");
      const checklistNumber = this.#createIconWithDescription(
        "subtask",
        "checklist-number",
        todo.checklistNumber,
      );
      const priority = this.#createIconWithDescription(
        "info-circle",
        `priority ${todo.priority}`,
        todo.priority,
      );
      const dueDate = this.#createIconWithDescription(
        "calendar-due",
        "due-date",
        todo.dueDate ? formatDistanceToNow(todo.dueDate) : "",
      );
      const checklists = this.#createChecklists(projectId, todo.id);

      detail.appendChild(checklistNumber);
      if (todo.dueDate) detail.appendChild(dueDate);
      detail.appendChild(priority);

      description.textContent = todo.description;

      descriptionContainer.appendChild(description);
      descriptionContainer.appendChild(detail);

      container.appendChild(titleWithIcon);
      container.appendChild(descriptionContainer);

      container.appendChild(checklists);

      todosContainer.appendChild(container);
    });

    addTodo.appendChild(buttonText);

    todosContainer.appendChild(addTodo);

    return todosContainer;
  }

  static #createChecklists(projectId, todoId) {
    // eslint-disable-next-line no-undef
    const checklistsContainer = document.createElement("ul");

    checklistsContainer.className = "checklists";

    const checklistManager = ProjectFacade.getChecklistManager(
      projectId,
      todoId,
    );

    checklistManager.getChecklistsData(projectId, todoId).map((checklist) => {
      // eslint-disable-next-line no-undef
      const li = document.createElement("li");
      const titleWithIcon = this.#createTitleWithIcon(checklist);

      li.appendChild(titleWithIcon);

      checklistsContainer.appendChild(li);
    });

    return checklistsContainer;
  }

  static createAddItemForm(itemType, itemData = null) {
    const form = this.#createFormDialog();
    // eslint-disable-next-line no-undef
    const heading = document.createElement("h1");
    const title = this.#createTitleInput();
    // eslint-disable-next-line no-undef
    const description = document.createElement("textarea");
    const priorityInput = this.#createSelectInput(this.#priorityOptions);
    const priority = this.#createLabelWithContainer(
      "Priority :",
      "priority",
      priorityInput,
    );
    const dueDateInput = this.#createDateInput();
    const dueDate = this.#createLabelWithContainer(
      "Due date :",
      "due-date",
      dueDateInput,
    );
    const buttons = this.#createButtonsBoxDialog("add", "Add", () =>
      ButtonHandler.addProject(
        {
          title: title.value,
          description: description.value,
          priority: priorityInput.value,
          dueDate: dueDateInput.value,
        },
        itemType,
        itemData,
      ),
    );

    heading.textContent = `Add New ${itemType}`;

    title.placeholder = `New ${itemType}`;
    description.placeholder = "description...";

    form.appendChild(heading);
    form.appendChild(title);
    if (itemType === "To-Do") {
      form.appendChild(description);
      form.appendChild(priority);
      form.appendChild(dueDate);
    }
    form.appendChild(buttons);

    return form;
  }

  static createDeleteItemBoxDialog(itemType, itemData) {
    const form = this.#createFormDialog();
    // eslint-disable-next-line no-undef
    const heading = document.createElement("h1");
    // eslint-disable-next-line no-undef
    const p = document.createElement("p");
    const buttons = this.#createButtonsBoxDialog("delete", "Delete", () =>
      ButtonHandler.deleteItem(itemData),
    );

    heading.textContent = `Delete ${itemType}?`;
    p.textContent = `${itemType} "${itemData.title}" will be permanently deleted`;

    form.appendChild(heading);
    form.appendChild(p);
    form.appendChild(buttons);

    return form;
  }

  static createEditItemForm(itemType, itemData) {
    const form = this.#createFormDialog();
    // eslint-disable-next-line no-undef
    const heading = document.createElement("h1");
    const titleInput = this.#createTitleInput();
    // eslint-disable-next-line no-undef
    const descriptionInput = document.createElement("textarea");
    const priorityInput = this.#createSelectInput(this.#priorityOptions);
    const priority = this.#createLabelWithContainer(
      "Priority :",
      "priority",
      priorityInput,
    );
    const dueDateInput = this.#createDateInput();
    const dueDate = this.#createLabelWithContainer(
      "Due date :",
      "due-date",
      dueDateInput,
    );
    const buttons = this.#createButtonsBoxDialog("edit", "Save", () =>
      ButtonHandler.saveChange(
        {
          title: titleInput.value,
          description: descriptionInput.value,
          priority: priorityInput.value,
          dueDate: dueDateInput.value,
        },
        itemData,
      ),
    );

    heading.textContent = `Edit ${itemType}`;

    titleInput.value = itemData.title;
    descriptionInput.textContent = itemData.description;
    priorityInput.value = itemData.priority;
    dueDateInput.value = itemData.dueDate;

    form.appendChild(heading);
    form.appendChild(titleInput);
    if (itemType === "To-Do") {
      form.appendChild(descriptionInput);
      form.appendChild(priority);
      form.appendChild(dueDate);
    }
    form.appendChild(buttons);

    return form;
  }

  static #createFormDialog() {
    // eslint-disable-next-line no-undef
    const form = document.createElement("form");

    form.method = "dialog";

    return form;
  }

  static #createTitleInput() {
    // eslint-disable-next-line no-undef
    const title = document.createElement("input");

    title.required = true;

    if (title.validity.valueMissing) {
      title.setCustomValidity("Title required!");
    }

    return title;
  }

  static #createLabelWithContainer(text, htmlFor, inputElement) {
    // eslint-disable-next-line no-undef
    const div = document.createElement("div");
    const label = this.#createLabel(htmlFor, text);

    inputElement.id = htmlFor;

    div.appendChild(label);
    div.appendChild(inputElement);

    return div;
  }

  static #createSelectInput(options) {
    // eslint-disable-next-line no-undef
    const select = document.createElement("select");

    options.forEach((option) => {
      // eslint-disable-next-line no-undef
      const opt = document.createElement("option");

      opt.textContent = option.text;
      opt.value = option.text;
      opt.selected = option.selected;

      select.appendChild(opt);
    });

    return select;
  }

  static #createDateInput() {
    // eslint-disable-next-line no-undef
    const input = document.createElement("input");
    const today = new Date().toISOString().substring(0, 10);

    input.type = "date";
    input.value = today;
    input.min = today;

    return input;
  }

  static #createButtonsBoxDialog(
    confirmClassName,
    confirmText,
    confirmClickHandler,
  ) {
    // eslint-disable-next-line no-undef
    const dialog = document.querySelector("dialog");
    const buttons = this.createContainer("buttons");
    const cancelButton = this.#createButton("cancel", "Cancel");
    const confirmButton = this.#createButton(confirmClassName, confirmText);

    cancelButton.addEventListener("click", () => {
      dialog.textContent = "";
      dialog.close();
    });

    confirmButton.addEventListener("click", confirmClickHandler);

    buttons.appendChild(cancelButton);
    buttons.appendChild(confirmButton);

    return buttons;
  }

  static #createCheckbox(itemData) {
    // eslint-disable-next-line no-undef
    const checkbox = document.createElement("input");
    const checkboxState = itemData.isComplete;

    checkbox.type = "checkbox";
    checkbox.id = itemData.id;

    if (itemData.todoId) {
      checkbox.dataset.todoId = itemData.todoId;
    }

    checkbox.checked = checkboxState;

    checkbox.addEventListener("click", () => {
      ButtonHandler.toggleIsComplete(itemData);

      ProjectFacade.saveProjects();
    });

    return checkbox;
  }

  static #createLabel(id, textContent) {
    // eslint-disable-next-line no-undef
    const label = document.createElement("label");

    label.htmlFor = id;
    label.textContent = textContent;

    return label;
  }

  static createContainer(className) {
    // eslint-disable-next-line no-undef
    const div = document.createElement("div");

    div.className = className;

    return div;
  }

  static #createTitle(itemData) {
    const titleContainer = this.createContainer("title");
    const checkbox = this.#createCheckbox(itemData);
    const titleLabel = this.#createLabel(itemData.id, itemData.title);

    titleContainer.appendChild(checkbox);
    titleContainer.appendChild(titleLabel);

    return titleContainer;
  }

  static #createTitleWithIcon(itemData) {
    const container = this.createContainer("title-with-icon");
    const titleContainer = this.#createTitle(itemData);
    const iconContainer = this.createContainer("icon");
    const addIcon = this.createButtonWithIcon("plus");
    const editIcon = this.createButtonWithIcon("edit");
    const deleteIcon = this.createButtonWithIcon("trash");

    addIcon.addEventListener("click", () =>
      DOMRenderer.renderAddItemDialog("Checklist", itemData),
    );

    editIcon.addEventListener("click", () =>
      DOMRenderer.renderEditItemDialog(
        itemData.todoId ? "Checklist" : "To-Do",
        itemData,
      ),
    );

    deleteIcon.addEventListener("click", () =>
      DOMRenderer.renderDeleteItemDialog(
        itemData.todoId ? "Checklist" : "To-Do",
        itemData,
      ),
    );

    if (!itemData.todoId) iconContainer.appendChild(addIcon);
    iconContainer.appendChild(editIcon);
    iconContainer.appendChild(deleteIcon);

    container.appendChild(titleContainer);
    container.appendChild(iconContainer);

    return container;
  }

  static #createIcon(iconCode) {
    // eslint-disable-next-line no-undef
    const icon = document.createElement("i");

    icon.className = `ti ti-${iconCode}`;

    return icon;
  }

  static #createButton(className, text) {
    // eslint-disable-next-line no-undef
    const button = document.createElement("button");

    button.className = className;
    button.textContent = text;

    return button;
  }

  static createButtonWithIcon(iconCode) {
    // eslint-disable-next-line no-undef
    const button = document.createElement("button");
    const icon = this.#createIcon(iconCode);

    button.appendChild(icon);

    return button;
  }

  static #createIconWithDescription(iconCode, className, desc) {
    const container = this.createContainer(className);
    const icon = this.#createIcon(iconCode);
    // eslint-disable-next-line no-undef
    const description = document.createElement("span");

    description.textContent = desc;

    container.appendChild(icon);
    container.appendChild(description);

    return container;
  }
}
