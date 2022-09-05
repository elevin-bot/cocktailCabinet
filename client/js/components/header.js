export const renderHeader = () => {
  //accessing header nav
  const header = document.querySelector("#header-nav");
  //creating
  const logOUtButton = document.createElement("button");
  const h1 = document.createElement("h1");
  const h1AfterLogin = document.createElement("h1");
  const span = document.createElement("span");
  //setting
  logOUtButton.textContent = "Log out";
  logOUtButton.classList.add("hidden");

  h1.textContent = "Cocktail Cabinet";

  h1AfterLogin.textContent = "name from session";
  h1AfterLogin.classList.add("hidden");

  span.textContent = `'s cabinet`;
  // appending
  h1AfterLogin.appendChild(span);
  header.appendChild(logOUtButton);
  header.appendChild(h1);
  header.appendChild(h1AfterLogin);
};
