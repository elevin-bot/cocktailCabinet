// 8. Update volumes in cabinet for the chosen recipe
const cocktailSelect = (cocktail_id) => {
    axios.patch(`/api/cabinet/${cocktail_id}`)    
        .then((response) => {
            // Return to parent page (Cabinet list page)
        }).catch(err => page.textContent = 'Something went wrong (cocktailSelect): ' + err.message)
}

// 9a. Add to cabinet
// export const addToCabinetRender = () => {
const addToCabinetRender = () => {
    const page = document.querySelector("#page");
    const h3 = document.createElement("h3");
    h3.textContent = 'Add alcohol to your cabinet'
    const form = document.createElement("form");
    const select = document.createElement("select");
    select.id = 'selectAlcohol'

    // 5. Populate select (drop dpown) with liquor list
    axios.get("api/liquor")
    .then((response) => {
        const list = response.data;
        list.forEach((item) => {
            const option = document.createElement('option');
            option.text = item.name;
            option.value = item.id;
            select.appendChild(option);
        });            
    }).catch(err => page.textContent = 'Something went wrong (liquorList): ' + err.message)

    const cancelBtn = document.createElement("button");
    cancelBtn.id = 'cancel'
    cancelBtn.textContent = 'Cancel'
    const addBtn = document.createElement("button");
    addBtn.id = 'Add'
    addBtn.textContent = 'Add'
    const inputVolume = document.createElement("input");
    inputVolume.placeholder = "Bottle volume";
    inputVolume.setAttribute('required', '')
    form.append(h3, select, inputVolume, addBtn)
    page.append(form, cancelBtn)

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const data = {
          liquor_id: select.options[select.selectedIndex].value,
          volume: inputVolume.value
        }

        // API call
        axios.post("api/cabinet", data)
        .then(() => {
            // Return to parent page (Cabinet list page)
        }).catch(err => page.textContent = 'Something went wrong (addToCabinetRender): ' + err.message)
    
    })
}

// 9b. Update cabinet
const updateCabinet = (liquor_id, volume) => {
    const data = {liquor_id, volume}    
    axios.put("/api/cabinet", data)    
        .then((response) => {
            // Return to parent page (Cabinet list page)
        }).catch(err => page.textContent = 'Something went wrong (updateCabinet): ' + err.message)
}

// 9c. Remove from cabinet
const removeCabinet = (liquor_id) => {
    axios.delete(`/api/cabinet/${liquor_id}`)    
        .then((response) => {
            // Return to parent page (Cabinet list page)
        }).catch(err => page.textContent = 'Something went wrong (removeCabinet): ' + err.message)
}

// 9d. Delete cabinet
const removeUserCabinet = () => {
    axios.delete("/api/user_cabinet")    
        .then((response) => {
            // Return to parent page (Cabinet list page)
        }).catch(err => page.textContent = 'Something went wrong (removeCabinet): ' + err.message)
}
