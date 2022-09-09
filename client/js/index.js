import { renderHeader } from "./components/header.js";
import { renderSignup } from "./components/signup.js";
import { renderCabinetView } from "./components/cabinet-view.js";
import { renderLogin } from "./components/login.js";
import { renderSignupLoader } from "./components/signup-loader.js";
import { renderLogOut } from "./components/logout.js";

renderHeader();

window.renderHeader = renderHeader;
window.renderSignup = renderSignup;
window.renderSignupLoader = renderSignupLoader;
window.renderLogin = renderLogin;
window.renderCabinetView = renderCabinetView;
window.renderLogOut = renderLogOut;
