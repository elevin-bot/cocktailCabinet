export const renderLogOut = () => {
  //accessing page
  const page = document.querySelector("#page");

  //creating----------------------------

  const containerPopup = document.createElement("div");

  const divMain = document.createElement("div");
  const p = document.createElement("p");
  const buttonYes = document.createElement("button");
  const buttonCancel = document.createElement("button");

  //setting-------------------------------
  containerPopup.className = "containerPopup";

  divMain.className = "logOutReconfirm";
  p.textContent = "Are you sure you want to logout?";
  buttonYes.textContent = "Yes";
  buttonCancel.textContent = "Cancel";

  //appending------------------------------
  divMain.append(p, buttonYes, buttonCancel);
  // containerPopup.append(divMain);

  // appending page
  document.body.append(containerPopup);
  document.body.append(divMain);

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
  //cancel popup
  buttonCancel.addEventListener("click", () => {
    divMain.remove();
    containerPopup.remove();
  });
  //cancel popup clicking on black screen
  containerPopup.addEventListener("click", () => {
    divMain.remove();
    containerPopup.remove();
  });
};
