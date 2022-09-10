export const renderCabinetView = () => {
 
  //accessing page
  const page = document.querySelector("#page");

  //creating------------------------
  const divMain = document.createElement("div");
  const buttonSearch = document.createElement("button");
  const buttonUpdate = document.createElement("button");

  const buttonHeader = document.createElement("div");
  buttonHeader.id = "buttonHeader"
  
  //setting----------------------
  buttonSearch.id = "buttonSearch";
  buttonSearch.textContent = "Get me drunk";

  buttonUpdate.id = "buttonUpdate";
  buttonUpdate.textContent = "Update cabinet";

  divMain.className = "searchDivMain";

  //appending-----------------------
  divMain.appendChild(buttonSearch);
  divMain.appendChild(buttonUpdate);


  // creating cabinet---------------
  const cabinet = document.createElement("div")
  const cabinetShelf = document.createElement("div");
  cabinetShelf.id = cabinetShelf

  for (let i = 0; i < 3; i++) {
    let cabinetShelf = document.createElement("div")
    cabinetShelf.className = "cabinetShelf"

    for (let j = 0; j < 6; j++) {
      let cabinetBottle = document.createElement("div")
      cabinetBottle.className = "cabinetBottle"
      cabinetShelf.appendChild(cabinetBottle)

      for (let k = 0; k < 1; k++) {
        let bottleName = document.createElement("div");
        let bottleVolume = document.createElement("div");
        bottleName.className = "bottleName";
        bottleVolume.className ="bottleVolume";
        cabinetBottle.appendChild(bottleName);
        cabinetBottle.appendChild(bottleVolume);
      }
      
    }

    cabinet.appendChild(cabinetShelf);
    divMain.appendChild(cabinet);

    

  };

  // appending page
  page.replaceChildren(divMain);
};

