export const renderLogin = () => {
  //accessing page
  const page = document.querySelector("#page");

  //creating------------------------

  // creating main div
  const divMain = document.createElement("div");
  // creating div left
  const divLeft = document.createElement("div");
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
  inputPassword.placeholder = "Password";
  buttonUnlockCabinet.textContent = "Unlock your cabinet";
  // setting div right
  divRight.className = "loginDivRight";
  p.textContent = "Don't have a cabinet? Sign up now";
  buttonSignup.textContent = "Sign Up";

  //appending-----------------------

  // appending divLeft
  divLeft.appendChild(h3);
  divLeft.appendChild(inputEmail);
  divLeft.appendChild(inputPassword);
  divLeft.appendChild(buttonUnlockCabinet);
  // appending divRight
  divRight.appendChild(p);
  divRight.appendChild(buttonSignup);

  // appending main div
  divMain.appendChild(divLeft);
  divMain.appendChild(divRight);
  // appending page
  page.appendChild(divMain);
};
