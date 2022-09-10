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
  buttonUpdate.textContent = "Add to cabinet";

  divMain.className = "searchDivMain";

  //appending-----------------------
  // divMain.appendChild(buttonSearch);
  // divMain.appendChild(buttonUpdate);

  buttonHeader.appendChild(buttonSearch);
  buttonHeader.appendChild(buttonUpdate);

  divMain.appendChild(buttonHeader);
  const cabinet = document.createElement("div")
  cabinet.id = "cabinet"

  axios.get("api/cabinet")
  .then((response) => {
      const cabinetArray = response.data;
      console.log(cabinetArray);
      cabinetArray.forEach((item) => {
        console.log(item.name)
        console.log(item.volume)
        console.log(item.id)

        let cabinetBottle = document.createElement("div")
        cabinetBottle.className = "cabinetBottle"
        

        let bottleName = document.createElement("div");
        let bottleVolume = document.createElement("div");
        let bottleLabel = document.createElement("div");
        let bottleButton = document.createElement("button");
        let bottleImage = document.createElement("div");

        bottleButton.className = "bottleButton"
        bottleLabel.className = "bottleLabel";
        bottleName.className = "bottleName";
        bottleVolume.className ="bottleVolume";
        bottleImage.className = "bottleImage";

        bottleName.textContent = item.name;
        bottleVolume.textContent = item.volume;
        bottleLabel.id = item.id;
        bottleImage.textContent = "IMAGE";
        bottleButton.textContent = "update"

        cabinetBottle.appendChild(bottleImage);
        bottleLabel.appendChild(bottleButton);
        bottleLabel.appendChild(bottleName);
        bottleLabel.appendChild(bottleVolume);
        cabinetBottle.appendChild(bottleLabel);
        cabinet.appendChild(cabinetBottle);

      
      });                   
  }).catch(err => page.textContent = 'Something went wrong (cabinetPopulate): ' + err.message)

   

    
    divMain.appendChild(cabinet);

    
    page.replaceChildren(divMain);
};

  // appending page
  

