export const renderLogin = () => {
  //accessing page
  const page = document.querySelector("#page");

  //creating------------------------

  // creating main div
  const divMain = document.createElement("div");
  // creating div left
  const divLeft = document.createElement("div");
  const form = document.createElement("form");
  const h3 = document.createElement("h3");
  const inputEmail = document.createElement("input");
  const inputPassword = document.createElement("input");
  const buttonUnlockCabinet = document.createElement("button");
  // creating div right
  const divRight = document.createElement("div");
  const p = document.createElement("p");
  const buttonSignup = document.createElement("button");

  //setting----------------------

  // setting main div
  divMain.className = "loginDivMain";
  // setting div left
  divLeft.className = "loginDivLeft";
  h3.textContent = "Login to access your cabinet";
  inputEmail.placeholder = "Email Address";
  inputEmail.name = "email";
  inputPassword.placeholder = "Password";
  inputPassword.name = "password";
  inputPassword.type = "password";
  buttonUnlockCabinet.textContent = "Unlock your cabinet";
  // setting div right
  divRight.className = "loginDivRight";
  p.textContent = "Don't have a cabinet? Sign up now";
  buttonSignup.textContent = "Sign Up";

  //appending-----------------------

  // appending divLeft
  form.append(inputEmail, inputPassword, buttonUnlockCabinet);
  divLeft.append(h3, form);
  // appending divRight
  divRight.append(p, buttonSignup);

  // appending main div
  divMain.append(divLeft, divRight);
  // appending page
  page.replaceChildren(divMain);

  //Event Listeners ------------------------

  // fetching data using AXIOS
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    //API access
    axios
      .post("/api/session", data)
      .then((response) => {
        console.log(response);
        renderCabinetView();
        renderHeader();
      })
      .catch((error) => {
        if (error.response.status === 500) {
          alert("Oops, failed to sign up. Please try again.");
        } else {
          alert(error.response.data.message);
        }
      });
  });

  //redirect to Signup
  buttonSignup.addEventListener("click", () => {
    renderSignup();
  });
};
