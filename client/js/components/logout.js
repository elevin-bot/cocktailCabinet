export const renderLogOut = () => {
  //accessing page
  const page = document.querySelector("#page");

  //creating----------------------------
  const divMain = document.createElement("div");
  const p = document.createElement("p");
  const buttonYes = document.createElement("button");
  const buttonCancel = document.createElement("button");

  //setting-------------------------------
  divMain.className = "logOutReconfirm";
  p.textContent = "Are you sure you want to logout?";
  buttonYes.textContent = "Yes";
  buttonCancel.textContent = "Cancel";

  //appending------------------------------
  divMain.append(p, buttonYes, buttonCancel);

  // appending page
  page.append(divMain);

  // Event Listeners -----------------------
  buttonYes.addEventListener("click", () => {
    axios
      .delete("/api/session")
      .then((response) => {
        location = "/";
      })
      .catch((err) => {
        alert(err);
      });
  });
  buttonCancel.addEventListener("click", () => {
    buttonCancel.parentElement.remove();
  });
};
