import { renderHeader } from "./components/header.js";
import { renderSignup } from "./components/signup.js";
import { renderCabinetView } from "./components/cabinet-view.js";
import { renderLogin } from "./components/login.js";
import { renderSignupLoader } from "./components/signup-loader.js";

renderHeader();
renderSignup();

window.renderSignup = renderSignup;
window.renderLogin = renderLogin;
window.renderCabinetView = renderCabinetView;
window.renderSignupLoader = renderSignupLoader;
// renderCabinetList();
