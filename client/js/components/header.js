export const renderHeader = () => {
  const h1Loader = document.createElement("p");
  h1Loader.textContent = "Loading";

  //accessing header nav
  const header = document.querySelector("#header-nav");
  header.appendChild(h1Loader);

  //creating
  const logOUtButton = document.createElement("button");

  const h1AfterLogin = document.createElement("h1");
  const span = document.createElement("span");

  // checking session , login icon changes if logged in
  axios
    .get("/api/session")
    .then((response) => {
      //remove loader
      header.removeChild(h1Loader);
      //removing h1 before logged in
      const h1 = document.querySelector("#h1Header");
      if (h1) {
        h1.remove();
      }
      //setting
      h1AfterLogin.textContent = response.data.name;
      span.textContent = `'s cabinet`;
      logOUtButton.textContent = "Log out";
      // appending
      h1AfterLogin.appendChild(span);
      header.appendChild(logOUtButton);
      header.appendChild(h1AfterLogin);
      renderCabinetView();
    })
    .catch((err) => {
      //remove loader
      header.removeChild(h1Loader);

      const h1 = document.createElement("h1");
      h1.id = "h1Header";

      //setting
      h1.textContent = "Cocktail Cabinet";
      //appending
      header.appendChild(h1);
      renderSignup();
    });

  //Event Listeners
  logOUtButton.addEventListener("click", () => {
    renderLogOut();
  });
};
