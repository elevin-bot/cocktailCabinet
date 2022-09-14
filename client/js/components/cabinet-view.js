export const renderCabinetView = () => {
  //accessing page
  const page = document.querySelector("#page");

  //creating-----------------------------------
  const divMain = document.createElement("div");
  const cabinet = document.createElement("div");
  const buttonSearch = document.createElement("button");
  const buttonAddCabinet = document.createElement("button");
  const buttonDeleteCabinet = document.createElement("button");
  const buttonHeader = document.createElement("div");

  //setting------------------------------------
  divMain.className = "searchDivMain";
  cabinet.id = "cabinet";
  buttonHeader.id = "buttonHeader";
  buttonSearch.id = "buttonSearch";
  buttonSearch.textContent = "Get me drunk";
  buttonAddCabinet.id = "buttonAddCabinet";
  buttonAddCabinet.textContent = "Add to cabinet";
  buttonDeleteCabinet.id = "buttonDeleteCabinet";
  buttonDeleteCabinet.textContent = "Delete cabinet and unregister";
  cabinet.id = "cabinet";

  //API access
  axios
    .get("api/cabinet")
    .then((response) => {
      const cabinetArray = response.data;
      cabinetArray.forEach((item) => {
        const cabinetBottle = document.createElement("div");
        cabinetBottle.className = "cabinetBottle";
        //creating
        const bottleName = document.createElement("div");
        const bottleVolume = document.createElement("input");
        const bottleLabel = document.createElement("div");
        const bottleUpdateBtn = document.createElement("button");
        const bottleImage = document.createElement("img");
        const bottleRemoveBtn = document.createElement("button");
        //setting
        bottleUpdateBtn.className = "bottleUpdateBtn";
        bottleLabel.className = "bottleLabel";
        bottleName.className = "bottleName";
        bottleVolume.className = "bottleVolume";
        bottleVolume.placeholder = "Enter volume (ml)";
        bottleImage.className = "bottleImage";
        bottleRemoveBtn.className = "bottleRemoveBtn";
        bottleName.textContent = item.name;
        bottleVolume.textContent = item.volume + "ml";
        bottleVolume.value = item.volume + "ml";
        bottleLabel.id = item.id;
        bottleImage.src = item.image;
        bottleUpdateBtn.textContent = "Update Volume";
        bottleRemoveBtn.textContent = "Remove";
        //appending
        cabinetBottle.append(bottleImage, bottleLabel);
        bottleLabel.append(
          bottleName,
          bottleVolume,
          bottleUpdateBtn,
          bottleRemoveBtn
        );
        cabinet.appendChild(cabinetBottle);

        //Event Listeners for each liquor on the cabinet
        bottleRemoveBtn.addEventListener("click", () => {
          const id = bottleLabel.id;
          axios
            .delete(`/api/cabinet/${id}`)
            .then(() => {
              renderCabinetView();
            })
            .catch((err) => (page.textContent = err));
        });
        bottleUpdateBtn.addEventListener("click", () => {
          // Validate volume (strip ml first)
          let volume = bottleVolume.value.replace("ml", "");
          if (!volume || volume == 0 || isNaN(volume)) {
            bottleVolume.value = "";
            return;
          }
          const data = {
            liquor_id: bottleLabel.id,
            volume: volume,
          };
          axios
            .put("/api/cabinet/", data)
            .then(() => {
              bottleVolume.value = volume + "ml";
            })
            .catch((err) => (page.textContent = err));
        });
      });
    })
    .catch(
      (err) =>
        (page.textContent =
          "Something went wrong (cabinetPopulate): " + err.message)
    );

  //appending----------------------------------
  buttonHeader.append(buttonAddCabinet, buttonSearch, buttonDeleteCabinet);
  divMain.append(buttonHeader);
  divMain.appendChild(cabinet);
  // appending page
  page.replaceChildren(divMain);

  // Event Listeners ----------------------------
  buttonSearch.addEventListener("click", renderCocktailView);
  buttonAddCabinet.addEventListener("click", addToCabinetRender);
  buttonDeleteCabinet.addEventListener("click", deleteCabinetWarning);
};
