export const renderCabinetView = () => {
  //accessing page
  const page = document.querySelector("#page");

  //creating-----------------------------------
  const divMain = document.createElement("div");
  const cabinet = document.createElement("div");
  const buttonSearch = document.createElement("button");
  const buttonAddCabinet = document.createElement("button");
  const buttonHeader = document.createElement("div");

  //setting------------------------------------
  divMain.className = "searchDivMain";
  cabinet.id = "cabinet";
  buttonHeader.id = "buttonHeader";
  buttonSearch.id = "buttonSearch";
  buttonSearch.textContent = "Get me drunk";
  buttonAddCabinet.id = "buttonAddCabinet";
  buttonAddCabinet.textContent = "Add to cabinet";

  //appending----------------------------------
  buttonHeader.append(buttonSearch, buttonAddCabinet);
  divMain.append(buttonHeader);

 

  cabinet.id = "cabinet"
  

  
  


  axios
    .get("api/cabinet")
    .then((response) => {

      const cabinetArray = response.data;
      cabinetArray.forEach((item) => {
        const cabinetBottle = document.createElement("div");
        cabinetBottle.className = "cabinetBottle";
        //creating
        const bottleName = document.createElement("div");
        const bottleVolume = document.createElement("div");
        const bottleLabel = document.createElement("div");
        const bottleUpdateBtn = document.createElement("button");
        const bottleImage = document.createElement("img");
        const bottleRemoveBtn = document.createElement("button");
        //setting
        bottleUpdateBtn.className = "bottleUpdateBtn";
        bottleLabel.className = "bottleLabel";
        bottleName.className = "bottleName";
        bottleVolume.className = "bottleVolume";
        bottleVolume.contentEditable = "true";
        bottleImage.className = "bottleImage";
        bottleRemoveBtn.className = "bottleRemoveBtn";
        bottleName.textContent = item.name;
        bottleVolume.textContent = item.volume;
        bottleLabel.id = item.id;
        bottleImage.src =
          "https://lh3.googleusercontent.com/hI9mHWFQU9Fr3CnSOW_WeuUZaLM9HFjU63hx3tC0qVRTOboRxwFlFAgJKAGIw5Qei0f10YzB7j-QUUzJJKe4uyJqRqVVzxJaWUxdN1c=w600";
        bottleUpdateBtn.textContent = "Update Volume";
        bottleRemoveBtn.textContent = "Remove";
        //appending
        cabinetBottle.append(bottleImage, bottleLabel);
        bottleLabel.append(
          bottleName,
          bottleVolume,
          bottleRemoveBtn,
          bottleUpdateBtn
        );
        cabinet.appendChild(cabinetBottle);
        //Event Listeners for each remove button
        bottleRemoveBtn.addEventListener("click", () => {
          const id = bottleLabel.id;
          axios
            .delete(`/api/cabinet/${id}`)
            .then(() => {
              alert("Liquor deleted");
              renderCabinetView();
            })
            .catch((err) => (page.textContent = err));
        });
        bottleUpdateBtn.addEventListener("click", () => {
          console.log("bottleUpdateBtn");
        });
      });
    })
    .catch(
      (err) =>
        (page.textContent =
          "Something went wrong (cabinetPopulate): " + err.message)
    );

  divMain.appendChild(cabinet);
  // appending page
  page.replaceChildren(divMain);

  // Event Listener ----------------------------
  buttonSearch.addEventListener("click", renderCocktailView);
  buttonAddCabinet.addEventListener("click", addToCabinetRender);
};
