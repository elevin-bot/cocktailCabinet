// called by GET ME DRUNK




// view cocktail recipes - calls API
export const renderCocktailView = () => {
    const page = document.querySelector("#page");

    axios.get("api/cocktails")
    .then((response) => {
        const recipeArray = response.data;

        const recipeBook = document.createElement("div")
        recipeBook.className = "recipeBook"

        const returnButton = document.createElement("button")
        returnButton.className = returnButton;
        returnButton.textContent = "Cancel"
        
        recipeBook.append(returnButton);
    
        
        recipeArray.forEach((recipe) => {
            const recipePage = document.createElement("div");
            recipePage.className = "recipePage";

            const recipeTitle = document.createElement("div")
            const selectCocktailBtn = document.createElement("button")

            const recipeDescription = document.createElement("div");
            const recipeProcedure = document.createElement("div");

            recipeDescription.className = "recipeDescription";
            recipeProcedure.className = "recipeProcedure"

            recipeTitle.className = "recipeTitle";
            selectCocktailBtn.className = "selectCocktailBtn";

            selectCocktailBtn.textContent = "Select Cocktail"
            recipeTitle.textContent = recipe.name;
            recipeTitle.id = recipe.id;
            recipeDescription.textContent = recipe.description;
            recipeProcedure.textContent = recipe.procedure;
            
            recipePage.append(recipeTitle, recipeDescription,recipeProcedure, selectCocktailBtn);
            recipeBook.append(recipePage);            

            selectCocktailBtn.addEventListener("click", () => {
                // 8. Update volumes in cabinet for the chosen recipe and get recipe procedure
                axios.patch(`/api/cabinet/${recipe.id}`)    
                    .then((response) => {
                        console.log(response.data[0].name)
                        console.log(response.data[0].description)
                        console.log(response.data[0].procedure)
                    }).catch(err => page.textContent = 'Something went wrong (cocktailSelect): ' + err.message)
            })            
               
        });
     
        page.append(recipeBook);

        returnButton.addEventListener("click", renderCabinetView );

    }).catch(err => page.textContent = 'Something went wrong (cocktail view): ' + err.message);
    
    // const recipeBookTest = document.getElementsByClassName("recipeBook")
    // page.append(recipeBookTest);
    
    
};



// select cocktail recipe

