// 5. Liquor list dropdown
export const liquorList = () => {
const liquorList = () => {
    const page = document.querySelector("#page");
    const h3 = document.createElement("h3");
    h3.textContent = 'Add alcohol to your cabinet'
    const form = document.createElement("form");
    const select = document.createElement("select");
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

    page.append(h3, form, select)
}

// 8. Update volumes in cabinet for the chosen recipe

// 9a. Add to cabinet

// 9b. Update cabinet

// 9c. Remove from cabinet

// 9d. Delete cabinet