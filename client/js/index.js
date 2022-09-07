import { renderHeader } from "./components/header.js";
import { renderSignup } from "./components/signup.js";
import { renderCabinetList } from "./components/cabinet-list.js";
import { renderLogin } from "./components/login.js";

renderHeader();
renderSignup();

window.renderSignup = renderSignup;
window.renderLogin = renderLogin;
window.renderCabinetList = renderCabinetList;
// renderCabinetList();
