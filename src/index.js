import DOMGenerator from "./services/DOMGenerator";
import ProjectManager from "./services/ProjectManager";
import Tester from "./services/Tester";
import "./styles.css";

Tester.generateDataToLocalStorage();

ProjectManager.load();

DOMGenerator.generateProjectsList();

DOMGenerator.generateProject(4827365893012);
