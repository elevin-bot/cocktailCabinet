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
  h1.textContent = "Cocktail Cabinet";
  span.textContent = `'s cabinet`;

  logOUtButton.classList.add("hidden");
  h1AfterLogin.classList.add("hidden");

  // checking session , login icon changes if logged in
  axios
    .get("/api/session")
    .then((response) => {
      console.log(object);
      // if (response.data.name) {
      //   h1AfterLogin.textContent = response.data.name;
      //   logOUtButton.classList.remove("hidden");
      //   h1AfterLogin.classList.remove("hidden");
      // }
    })
    .catch((err) => {
      alert(err.response.data.message);
    });

  // appending
  h1AfterLogin.appendChild(span);
  header.appendChild(logOUtButton);
  header.appendChild(h1);
  header.appendChild(h1AfterLogin);
};
