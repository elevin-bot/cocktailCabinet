export const renderLogOut = () => {
  //lock scroll when modal is on
  // document.body.style.overflow = "hidden";
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
  //cancel modal
  buttonCancel.addEventListener("click", () => {
    //unlock scroll when modal is on
    // document.body.style.overflow = "auto";
    //remove modal
    divMain.remove();
    containerPopup.remove();
  });
  //cancel modal clicking on black screen overlay
  containerPopup.addEventListener("click", () => {
    //unlock scroll when modal is on
    // document.body.style.overflow = "auto";
    //remove modal
    divMain.remove();
    containerPopup.remove();
  });
};
