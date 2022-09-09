export const renderCabinetView = () => {
  //accessing page
  const page = document.querySelector("#page");

  //creating------------------------
  const divMain = document.createElement("div");
  const buttonSearch = document.createElement("button");
  const buttonUpdate = document.createElement("button");
  //setting----------------------
  buttonSearch.id = "buttonSearch";
  buttonSearch.textContent = "Get me drunk";

  buttonUpdate.id = "buttonUpdate";
  buttonUpdate.textContent = "Update cabinet";

  divMain.className = "searchDivMain";

  //appending-----------------------
  divMain.appendChild(buttonSearch);
  divMain.appendChild(buttonUpdate);

  // appending page
  page.replaceChildren(divMain);
};

// view all alcohol in cabinet
const cabinetShelf = document.createElement('ul');

