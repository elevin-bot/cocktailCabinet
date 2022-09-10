// called by GET ME DRUNK




// view cocktail recipes - calls API
export const renderCocktailView = () => {
    const page = document.querySelector("#page");
    

    axios.get("api/cocktails")
    .then((response) => {
        const recipeArray = response.data;

        const recipeBook = document.createElement("div")
        recipeBook.className = "recipeBook"
        
        recipeArray.forEach((recipe) => {
            const recipePage = document.createElement("div");
            recipePage.className = "recipePage";

            const recipeTitle = document.createElement("div")
            const selectCocktailBtn = document.createElement("button")

            recipeTitle.className = "recipeTitle";
            selectCocktailBtn.className = "selectCocktailBtn";


            selectCocktailBtn.textContent = "Make this drink"
            recipeTitle.textContent = recipe.name;
            recipeTitle.id = recipe.id;
            
            recipePage.append(recipeTitle, selectCocktailBtn);
            recipeBook.append(recipePage);

            selectCocktailBtn.addEventListener("click", () => {
                console.log(cocktailData);
                const cocktailData = cocktailSelect(recipe.id);
                
            });

            


            
        });
        
        page.replaceChildren(recipeBook);

    }).catch(err => page.textContent = 'Something went wrong (cocktail view): ' + err.message);

    
};



// select cocktail recipe

