// called by GET ME DRUNK




// view cocktail recipes - calls API
export const renderCocktailView = () => {
    const page = document.querySelector("#page");
    console.log("bring me alcohol")
    

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
                
                const cocktailData = cocktailSelect(recipe.id);
                console.log(cocktailData);
            });

            

            
               
        });
     
        page.append(recipeBook);

        returnButton.addEventListener("click", renderCabinetView );

    }).catch(err => page.textContent = 'Something went wrong (cocktail view): ' + err.message);
    
    // const recipeBookTest = document.getElementsByClassName("recipeBook")
    // page.append(recipeBookTest);
    
    
};



// select cocktail recipe

