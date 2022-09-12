// called by GET ME DRUNK

// view cocktail recipes - calls API
export const renderCocktailView = () => {
  const page = document.querySelector("#page");

  axios
    .get("api/cocktails")
    .then((response) => {
      const recipeArray = response.data;

      //creating -------------------------------------
      const containerPopup = document.createElement("div");
      const recipeBook = document.createElement("div");
      const returnButton = document.createElement("button");

      //setting-------------------------------------
      containerPopup.className = "containerPopup";
      recipeBook.className = "recipeBook";
      returnButton.className = "returnButton";
      returnButton.textContent = "Cancel";

      //appending-------------------------------------
      recipeBook.append(returnButton);
      //for each recipe
      recipeArray.forEach((recipe) => {
        //creating
        const recipePage = document.createElement("div");
        const recipeTitle = document.createElement("div");
        const selectCocktailBtn = document.createElement("button");
        const recipeDescription = document.createElement("div");
        const recipeProcedure = document.createElement("div");
        //setting
        recipePage.className = "recipePage";
        recipeDescription.className = "recipeDescription";
        recipeProcedure.className = "recipeProcedure";
        recipeTitle.className = "recipeTitle";
        selectCocktailBtn.className = "selectCocktailBtn";
        selectCocktailBtn.textContent = "Select Cocktail";
        recipeTitle.textContent = recipe.name;
        recipeTitle.id = recipe.id;
        recipeDescription.textContent = recipe.description;
        recipeProcedure.textContent = recipe.procedure;
        //appending
        recipePage.append(
          recipeTitle,
          recipeDescription,
          recipeProcedure,
          selectCocktailBtn
        );
        recipeBook.append(recipePage);
        //Event listener - each recipe
        selectCocktailBtn.addEventListener("click", () => {
          // 8. Update volumes in cabinet for the chosen recipe and get recipe procedure
          axios
            .patch(`/api/cabinet/${recipe.id}`)
            .then((response) => {
              console.log(response.data[0].name);
              console.log(response.data[0].description);
              console.log(response.data[0].procedure);
            })
            .catch(
              (err) =>
                (page.textContent =
                  "Something went wrong (cocktailSelect): " + err.message)
            );
        });
      });

      //appending to page
      document.body.append(containerPopup);
      document.body.append(recipeBook);

      //Event listener - for divMain -----------
      //cancel popup
      returnButton.addEventListener("click", () => {
        recipeBook.remove();
        containerPopup.remove();
      });
      //cancel popup clicking on black screen
      containerPopup.addEventListener("click", () => {
        recipeBook.remove();
        containerPopup.remove();
      });
    })
    .catch(
      (err) =>
        (page.textContent =
          "Something went wrong (cocktail view): " + err.message)
    );
};

// select cocktail recipe
