import Completable from "../models/behaviors/Completable";
import Prioritizable from "../models/behaviors/Prioritizable";
import LocalStorageService from "./LocalStorageService";
import ProjectManager from "./ProjectManager";

export default class Tester {
  static #data = [
    {
      title: "Web Development Project",
      id: 2398745234897,
      todos: [
        {
          title: "Build Portfolio Website",
          id: 123456789,
          projectId: 2398745234897,
          description: "Create a personal portfolio to showcase my projects",
          notes: "Include a section for blog posts",
          dueDate: "",
          isComplete: false,
          priority: "urgent",
          checklists: [
            {
              title: "Design the layout",
              id: 987654321,
              todoId: 123456789,
              projectId: 2398745234897,
              isComplete: true,
              priority: "important",
            },
            {
              title: "Implement responsiveness",
              id: 987654322,
              todoId: 123456789,
              projectId: 2398745234897,
              isComplete: false,
              priority: "urgent",
            },
          ],
        },
        {
          title: "Learn React",
          id: 123456790,
          projectId: 2398745234897,
          description: "Go through the official React documentation",
          notes: "Focus on hooks and context API",
          dueDate: "",
          isComplete: false,
          priority: "important",
          checklists: [
            {
              title: "Complete React basics section",
              id: 987654323,
              todoId: 123456790,
              projectId: 2398745234897,
              isComplete: true,
              priority: "normal",
            },
            {
              title: "Build a project using React",
              id: 987654324,
              todoId: 123456790,
              projectId: 2398745234897,
              isComplete: false,
              priority: "urgent",
            },
          ],
        },
        {
          title: "Client Website",
          id: 123456791,
          projectId: 2398745234897,
          description: "Create an e-commerce website for a client",
          notes: "Use Shopify API for backend",
          dueDate: "",
          isComplete: false,
          priority: "urgent",
          checklists: [
            {
              title: "Design the UI",
              id: 987654325,
              todoId: 123456791,
              projectId: 2398745234897,
              isComplete: true,
              priority: "urgent",
            },
            {
              title: "Set up the backend",
              id: 987654326,
              todoId: 123456791,
              projectId: 2398745234897,
              isComplete: false,
              priority: "normal",
            },
            {
              title: "Test payment gateway",
              id: 987654327,
              todoId: 123456791,
              projectId: 2398745234897,
              isComplete: false,
              priority: "important",
            },
          ],
        },
        {
          title: "Improve Git skills",
          id: 123456792,
          projectId: 2398745234897,
          description: "Learn advanced Git features",
          notes: "",
          dueDate: "",
          isComplete: false,
          priority: "normal",
          checklists: [
            {
              title: "Learn Git rebasing",
              id: 987654328,
              todoId: 123456792,
              projectId: 2398745234897,
              isComplete: false,
              priority: "low",
            },
            {
              title: "Learn cherry-picking",
              id: 987654329,
              todoId: 123456792,
              projectId: 2398745234897,
              isComplete: false,
              priority: "normal",
            },
            {
              title: "Practice creating branches",
              id: 987654330,
              todoId: 123456792,
              projectId: 2398745234897,
              isComplete: true,
              priority: "important",
            },
          ],
        },
        {
          title: "Study Algorithms",
          id: 123456793,
          projectId: 2398745234897,
          description: "Prepare for coding interviews by studying algorithms",
          notes: "",
          dueDate: "",
          isComplete: false,
          priority: "normal",
          checklists: [
            {
              title: "Solve 10 sorting algorithm problems",
              id: 987654331,
              todoId: 123456793,
              projectId: 2398745234897,
              isComplete: false,
              priority: "important",
            },
            {
              title: "Review dynamic programming",
              id: 987654332,
              todoId: 123456793,
              projectId: 2398745234897,
              isComplete: false,
              priority: "urgent",
            },
          ],
        },
      ],
    },
    {
      title: "Mobile App Development Project",
      id: 4827365893012,
      todos: [
        {
          title: "Design App UI",
          id: 112233445,
          projectId: 4827365893012,
          description: "Create the user interface for the mobile app",
          notes: "Focus on usability for touch devices",
          dueDate: "",
          isComplete: false,
          priority: "urgent",
          checklists: [
            {
              title: "Create wireframes",
              id: 998877661,
              todoId: 112233445,
              projectId: 4827365893012,
              isComplete: true,
              priority: "important",
            },
            {
              title: "Design interactive prototype",
              id: 998877662,
              todoId: 112233445,
              projectId: 4827365893012,
              isComplete: false,
              priority: "urgent",
            },
          ],
        },
        {
          title: "Set up Backend",
          id: 112233446,
          projectId: 4827365893012,
          description: "Set up the backend with Firebase",
          notes: "Use Firestore for real-time data",
          dueDate: "",
          isComplete: false,
          priority: "important",
          checklists: [
            {
              title: "Configure Firebase project",
              id: 998877663,
              todoId: 112233446,
              projectId: 4827365893012,
              isComplete: true,
              priority: "normal",
            },
            {
              title: "Set up user authentication",
              id: 998877664,
              todoId: 112233446,
              projectId: 4827365893012,
              isComplete: false,
              priority: "urgent",
            },
          ],
        },
        {
          title: "Implement App Features",
          id: 112233447,
          projectId: 4827365893012,
          description: "Add main features to the app",
          notes: "Include push notifications",
          dueDate: "",
          isComplete: false,
          priority: "urgent",
          checklists: [
            {
              title: "Add push notifications",
              id: 998877665,
              todoId: 112233447,
              projectId: 4827365893012,
              isComplete: false,
              priority: "urgent",
            },
            {
              title: "Implement in-app purchases",
              id: 998877666,
              todoId: 112233447,
              projectId: 4827365893012,
              isComplete: false,
              priority: "important",
            },
          ],
        },
        {
          title: "App Testing",
          id: 112233448,
          projectId: 4827365893012,
          description: "Test the app for bugs and performance",
          notes: "",
          dueDate: "",
          isComplete: false,
          priority: "low",
          checklists: [
            {
              title: "Test on Android devices",
              id: 998877667,
              todoId: 112233448,
              projectId: 4827365893012,
              isComplete: false,
              priority: "important",
            },
            {
              title: "Test on iOS devices",
              id: 998877668,
              todoId: 112233448,
              projectId: 4827365893012,
              isComplete: false,
              priority: "urgent",
            },
            {
              title: "Fix UI bugs",
              id: 998877669,
              todoId: 112233448,
              projectId: 4827365893012,
              isComplete: true,
              priority: "normal",
            },
          ],
        },
        {
          title: "App Launch",
          id: 112233449,
          projectId: 4827365893012,
          description: "Launch the app on Google Play and App Store",
          notes: "Prepare a marketing strategy",
          dueDate: "",
          isComplete: false,
          priority: "urgent",
          checklists: [
            {
              title: "Create app listing",
              id: 998877670,
              todoId: 112233449,
              projectId: 4827365893012,
              isComplete: false,
              priority: "normal",
            },
            {
              title: "Submit to Google Play",
              id: 998877671,
              todoId: 112233449,
              projectId: 4827365893012,
              isComplete: false,
              priority: "normal",
            },
            {
              title: "Submit to App Store",
              id: 998877672,
              todoId: 112233449,
              projectId: 4827365893012,
              isComplete: true,
              priority: "important",
            },
          ],
        },
      ],
    },
    {
      title: "Home Renovation Project",
      id: 5872391827314,
      todos: [
        {
          title: "Kitchen Renovation",
          id: 223344556,
          projectId: 5872391827314,
          description: "Update the kitchen with new cabinets and appliances",
          notes: "Consider eco-friendly appliances",
          dueDate: "",
          isComplete: false,
          priority: "important",
          checklists: [
            {
              title: "Hire a contractor",
              id: 887766553,
              todoId: 223344556,
              projectId: 5872391827314,
              isComplete: true,
              priority: "urgent",
            },
            {
              title: "Purchase new appliances",
              id: 887766554,
              todoId: 223344556,
              projectId: 5872391827314,
              isComplete: false,
              priority: "important",
            },
          ],
        },
        {
          title: "Bathroom Renovation",
          id: 223344557,
          projectId: 5872391827314,
          description: "Redesign the bathroom and replace old fixtures",
          notes: "Install new plumbing",
          dueDate: "",
          isComplete: false,
          priority: "urgent",
          checklists: [
            {
              title: "Select new tiles",
              id: 887766555,
              todoId: 223344557,
              projectId: 5872391827314,
              isComplete: true,
              priority: "normal",
            },
            {
              title: "Hire a plumber",
              id: 887766556,
              todoId: 223344557,
              projectId: 5872391827314,
              isComplete: false,
              priority: "urgent",
            },
          ],
        },
        {
          title: "Living Room Furniture",
          id: 223344558,
          projectId: 5872391827314,
          description: "Buy new furniture for the living room",
          notes: "Look for a modern design",
          dueDate: "",
          isComplete: false,
          priority: "low",
          checklists: [
            {
              title: "Visit furniture stores",
              id: 887766557,
              todoId: 223344558,
              projectId: 5872391827314,
              isComplete: false,
              priority: "normal",
            },
            {
              title: "Buy new couch",
              id: 887766558,
              todoId: 223344558,
              projectId: 5872391827314,
              isComplete: false,
              priority: "important",
            },
          ],
        },
        {
          title: "Painting",
          id: 223344559,
          projectId: 5872391827314,
          description: "Repaint the entire house",
          notes: "Use eco-friendly paint",
          dueDate: "",
          isComplete: false,
          priority: "urgent",
          checklists: [
            {
              title: "Choose color palette",
              id: 887766559,
              todoId: 223344559,
              projectId: 5872391827314,
              isComplete: true,
              priority: "important",
            },
            {
              title: "Hire a painter",
              id: 887766560,
              todoId: 223344559,
              projectId: 5872391827314,
              isComplete: false,
              priority: "urgent",
            },
          ],
        },
        {
          title: "Landscaping",
          id: 223344560,
          projectId: 5872391827314,
          description: "Update the garden with new plants and features",
          notes: "Consider drought-tolerant plants",
          dueDate: "",
          isComplete: false,
          priority: "normal",
          checklists: [
            {
              title: "Design the garden layout",
              id: 887766561,
              todoId: 223344560,
              projectId: 5872391827314,
              isComplete: false,
              priority: "normal",
            },
            {
              title: "Purchase plants",
              id: 887766562,
              todoId: 223344560,
              projectId: 5872391827314,
              isComplete: false,
              priority: "important",
            },
            {
              title: "Hire a landscaper",
              id: 887766563,
              todoId: 223344560,
              projectId: 5872391827314,
              isComplete: true,
              priority: "important",
            },
          ],
        },
      ],
    },
  ];

  static getData() {
    return this.#data;
  }

  static #getProjectTestData() {
    const mobileAppDevProject = this.getData()[1];

    return mobileAppDevProject;
  }

  static #getTodoTestData() {
    const webDevProject = this.getData()[0];

    const learnReactTodo = webDevProject.todos[1];

    return { ...learnReactTodo, projectTitle: webDevProject.title };
  }

  static #getChecklistTestData() {
    const webDevProject = this.getData()[0];

    const improveGitSkillsTodo = webDevProject.todos[3];

    const learnGitRebasingChecklist = improveGitSkillsTodo.checklists[0];

    return {
      ...learnGitRebasingChecklist,
      projectTitle: webDevProject.title,
      todoTitle: improveGitSkillsTodo.title,
    };
  }

  static generateDataToLocalStorage() {
    LocalStorageService.save("projects", this.getData());
  }

  static generateData() {
    const webDevelopmentProjectObj = this.getData()[0];
    const WDProject = ProjectManager.createProject(
      webDevelopmentProjectObj.title
    );

    const WDProjectTodoManager = WDProject.getTodoManager();

    webDevelopmentProjectObj.todos.forEach((todo) => {
      const currentTodo = WDProjectTodoManager.createTodo(
        todo.title,
        todo.description
      );

      currentTodo.setNotes(todo.notes);
      currentTodo.setDueDate(todo.dueDate);
      currentTodo.prioritizable = new Prioritizable(todo.priority);
      currentTodo.completable = new Completable(todo.isComplete);

      todo.checklists.forEach((checklist) => {
        const currentChecklist = currentTodo.addChecklistItem(checklist.title);

        currentChecklist.prioritizable = new Prioritizable(checklist.priority);
        currentChecklist.completable = new Completable(checklist.isComplete);
      });
    });

    ProjectManager.printProjects();
  }

  static testDeleteData() {
    const projectData = this.#getProjectTestData();
    const todoData = this.#getTodoTestData();
    const checklistData = this.#getChecklistTestData();

    console.log(`
        This test will delete:
         - Project "${projectData.title}"
         - Todo "${todoData.title}" in Project "${todoData.projectTitle}"
         - Checklist "${checklistData.title}" in Todo "${checklistData.todoTitle}" in Project "${checklistData.projectTitle}"
        `);

    this.generateDataToLocalStorage();

    ProjectManager.load();

    ProjectManager.deleteProject(projectData.id);
    ProjectManager.deleteTodo(todoData.projectId, todoData.id);
    ProjectManager.deleteChecklist(
      checklistData.projectId,
      checklistData.todoId,
      checklistData.id
    );

    ProjectManager.save();

    ProjectManager.printProjects();
  }

  static testGetData() {
    const projectData = this.#getProjectTestData();
    const todoData = this.#getTodoTestData();
    const checklistData = this.#getChecklistTestData();

    console.log(`
        This test will get data from:
         - Project "${projectData.title}"
         - Todo "${todoData.title}" in Project "${todoData.projectTitle}"
         - Checklist "${checklistData.title}" in Todo "${checklistData.todoTitle}" in Project "${checklistData.projectTitle}"
        `);

    this.generateDataToLocalStorage();

    ProjectManager.load();

    console.log(ProjectManager.getProjectData(projectData.id));
    console.log(ProjectManager.getTodoData(todoData.projectId, todoData.id));
    console.log(
      ProjectManager.getChecklistData(
        checklistData.projectId,
        checklistData.todoId,
        checklistData.id
      )
    );
  }
}
