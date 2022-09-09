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
  const spanError = document.createElement("span");
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
  inputName.name = "name";
  inputEmail.placeholder = "Email Address";
  inputEmail.name = "email";
  inputPassword.placeholder = "Password";
  inputPassword.name = "password";
  inputPassword.type = "password";
  inputPasswordCheck.placeholder = "Enter your password again";
  inputPasswordCheck.type = "password";
  buttonGetCabinet.textContent = "Get me a cabinet";
  buttonGetCabinet.disabled = true;
  spanError.className = "error";

  // setting div right
  divRight.className = "signUpDivRight";
  p.textContent = "Already have a cabinet? Sign in to unlock it";
  buttonUnlock.textContent = "Unlock your cabinet";

  //appending-----------------------

  // appending divLeft
  divLeft.appendChild(h3);
  form.appendChild(inputName);
  form.appendChild(inputEmail);
  form.appendChild(inputPassword);
  form.appendChild(inputPasswordCheck);
  form.appendChild(buttonGetCabinet);
  divLeft.appendChild(form);
  divLeft.appendChild(spanError);

  // appending divRight
  divRight.appendChild(p);
  divRight.appendChild(buttonUnlock);

  // appending main div
  divMain.appendChild(divLeft);
  divMain.appendChild(divRight);
  // appending page
  page.replaceChildren(divMain);

  //Event Listener ------------------------

  // fetching data using AXIOS
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    //   API access
    axios
      .post("/api/signup", data)
      .then((response) => {
        alert(response.data.message);
        renderSignupLoader(data);
      })
      .catch((error) => {
        console.log(error);

        if (error.response.status === 500) {
          alert("Oops, failed to sign up. Please try again.");
        } else {
          alert(error.response.data.message);
        }
      });
  });

  //validating EMAIL - using class ValidateEmail()
  inputEmail.addEventListener("focusout", (e) => {
    const inputEmailValue = e.target.value;
    if (validateEmail(inputEmailValue)) {
      spanError.innerText = "";
    } else {
      spanError.innerText = "email is not valid";
    }
  });

  //validating PASSWORD - using class validatePasswordFormat()
  inputPassword.addEventListener("input", (e) => {
    const inputPasswordValue = e.target.value;
    const arrayErrors = validatePasswordFormat(inputPasswordValue);
    if (inputPasswordValue) {
      if (arrayErrors.length === 0) {
        spanError.innerText = "diferent passwords";
      } else {
        spanError.innerText = arrayErrors[0];
      }
    } else {
      spanError.innerText = "";
    }
  });
  //validating PASSWORD CHECK
  inputPasswordCheck.addEventListener("input", (e) => {
    const inputPasswordValue = e.target.value;

    if (inputPasswordValue) {
      if (inputPassword.value !== inputPasswordCheck.value) {
        spanError.innerText = "diferent passwords";
      } else if (inputPassword.value === inputPasswordCheck.value) {
        spanError.innerText = "";
      }
      if (
        inputName.value != "" &&
        inputEmail.value != "" &&
        inputPassword.value != "" &&
        inputPasswordCheck.value != "" &&
        spanError.textContent == ""
      ) {
        buttonGetCabinet.disabled = false;
      }
      divLeft.appendChild(spanError);
    }
  });

  //redirect to Login
  buttonUnlock.addEventListener("click", () => {
    renderLogin();
  });
};

//------------------------ULTIL-------------------------
//------------------------ULTIL-------------------------
//------------------------ULTIL-------------------------

function validatePasswordFormat(password_input) {
  const errors = [];
  if (password_input.length < 8) {
    errors.push("Your password must be at least 8 characters");
  }
  if (password_input.search(/[a-z]/i) < 0) {
    errors.push("Your password must contain at least one letter.");
  }
  if (password_input.search(/[0-9]/) < 0) {
    errors.push("Your password must contain at least one digit.");
  }

  return errors;
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
