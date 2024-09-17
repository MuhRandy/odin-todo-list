import DOMRenderer from "./services/DOMRenderer";
import ProjectManager from "./services/ProjectManager";
import Tester from "./services/Tester";
import "./styles.css";

Tester.generateDataToLocalStorage();

ProjectManager.load();

DOMRenderer.renderProjectsList();

DOMRenderer.renderProject(4827365893012);
