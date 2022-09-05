export const renderSignup = () => {
  //accessing page
  const page = document.querySelector("#page");

  //creating------------------------

  // creating main div
  const divMain = document.createElement("div");
  // creating div left
  const divLeft = document.createElement("div");
  const form = document.createElement("form");
  const h3 = document.createElement("h3");
  const inputName = document.createElement("input");
  const inputEmail = document.createElement("input");
  const inputPassword = document.createElement("input");
  const inputPasswordCheck = document.createElement("input");
  const buttonGetCabinet = document.createElement("button");
  // creating div right
  const divRight = document.createElement("div");
  const p = document.createElement("p");
  const buttonUnlock = document.createElement("button");

  //setting----------------------
  // setting main div
  divMain.className = "signUpDivMain";
  // setting div left
  divLeft.className = "signUpDivLeft";
  h3.textContent = "Sign up to get your cabinet";
  inputName.placeholder = "Enter your name";
  inputEmail.placeholder = "Email Address";
  inputPassword.placeholder = "Password";
  inputPasswordCheck.placeholder = "Enter your password again";
  buttonGetCabinet.textContent = "Get me a cabinet";
  // setting div right
  divRight.className = "signUpDivRight";
  p.textContent = "Already have a cabinet? Sign in to unlock it";
  buttonUnlock.textContent = "Unlock your cabinet";

  //appending-----------------------

  // appending divLeft
  divLeft.appendChild(h3);
  divLeft.appendChild(inputName);
  divLeft.appendChild(inputEmail);
  divLeft.appendChild(inputPassword);
  divLeft.appendChild(inputPasswordCheck);
  divLeft.appendChild(buttonGetCabinet);
  // appending divRight
  divRight.appendChild(p);
  divRight.appendChild(buttonUnlock);

  // appending main div
  divMain.appendChild(divLeft);
  divMain.appendChild(divRight);
  // appending page
  page.appendChild(divMain);

  buttonUnlock.addEventListener("click", () => {
    renderLogin();
  });
};
