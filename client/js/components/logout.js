export const renderLogOut = () => {
  //accessing page
  const page = document.querySelector("#page");

  //creating----------------------------
  const divMain = document.createElement("div");
  const p = document.createElement("p");
  const buttonYes = document.createElement("button");
  const buttonCancel = document.createElement("button");

  //setting-------------------------------
  p.textContent = "Are you sure you want to logout?";
  buttonYes.textContent = "Yes";
  buttonCancel.textContent = "Cancel";

  //appending------------------------------
  divMain.append(p, buttonYes, buttonCancel);

  // appending page
  page.replaceChildren(divMain);

  // Event Listeners -----------------------
  buttonYes.addEventListener("click", () => {
    axios
      .delete("/api/session")
      .then((response) => {
        // ############ IMPORTANT #############
        location = "/"; // has to be changed after pop pup function is working
      })
      .catch((err) => {
        alert(err);
      });
  });
  buttonCancel.addEventListener("click", () => {
    // ############ IMPORTANT #############
    renderCabinetView(); // has to be changed after pop pup function is working
  });
};
