
export const renderCabinetView = () => {
 
  //accessing page
  const page = document.querySelector("#page");

  //creating------------------------
  const divMain = document.createElement("div");
  const buttonSearch = document.createElement("button");
  const buttonAddCabinet = document.createElement("button");

  const buttonHeader = document.createElement("div");
  buttonHeader.id = "buttonHeader"
  
  //setting----------------------
  buttonSearch.id = "buttonSearch";
  buttonSearch.textContent = "Get me drunk";

  buttonAddCabinet.id =  "buttonAddCabinet";
  buttonAddCabinet.textContent = "Add to cabinet";

  // function
  // buttonAddCabinet.onclick = addToCabinetRender();

  buttonAddCabinet.addEventListener("click", addToCabinetRender);

  divMain.className = "searchDivMain";

  //appending-----------------------
  // divMain.appendChild(buttonSearch);
  // divMain.appendChild  buttonAddCabinet);

  buttonHeader.appendChild(buttonSearch);
  buttonHeader.appendChild  (buttonAddCabinet);

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
        let bottleImage = document.createElement("img");

        bottleButton.className = "bottleButton"
        bottleLabel.className = "bottleLabel";
        bottleName.className = "bottleName";
        bottleVolume.className ="bottleVolume";
        bottleImage.className = "bottleImage";

        bottleName.textContent = item.name;
        bottleVolume.textContent = item.volume;
        bottleLabel.id = item.id;
        bottleImage.src = "https://lh3.googleusercontent.com/hI9mHWFQU9Fr3CnSOW_WeuUZaLM9HFjU63hx3tC0qVRTOboRxwFlFAgJKAGIw5Qei0f10YzB7j-QUUzJJKe4uyJqRqVVzxJaWUxdN1c=w600";
        console.log(bottleImage.src)
        bottleButton.textContent = "update"

        cabinetBottle.appendChild(bottleImage);
        
        bottleLabel.appendChild(bottleName);
        bottleLabel.appendChild(bottleVolume);
        cabinetBottle.appendChild(bottleLabel);
        bottleLabel.appendChild(bottleButton);
        cabinet.appendChild(cabinetBottle);

      
      });                   
  }).catch(err => page.textContent = 'Something went wrong (cabinetPopulate): ' + err.message)

   

    
    divMain.appendChild(cabinet);

    
    page.replaceChildren(divMain);
};

  // appending page
  

