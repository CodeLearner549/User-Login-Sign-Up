// USER LOGIN / SIGNUP

// HTML VARIABLES
let signInBtn = document.getElementById("sign-in-btn");
let signUpBtn = document.getElementById("sign-up-btn");
let usernameInput = document.getElementById("textid");
let passwordInput = document.getElementById("passwordid");
let usernameInput2 = document.getElementById("textid2");
let passwordInput2 = document.getElementById("passwordid2");

// SIGN UP BTN CLICKED
signUpBtn.addEventListener("click", signUpHandler);

function signUpHandler() {
  let username = usernameInput.value;
  let password = passwordInput.value;
  if (usernameCheck(username) !== -1) {
    //matches
    alert("Username Already In-Use");
  } else {
    users.push(newUser(username, password));
    saveUsers();
    alert("Sign Up Successful");
  }
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener("click", signInHandler);

function signInHandler() {
  let username = usernameInput2.value;
  let password = passwordInput2.value;
  if (usernameCheck(username) === -1) {
    //doesn't match
    alert("Invalid Login");
  } else if (passwordCheck(password) === -1) {
    //doesn't match
    alert("Invalid Login");
  } else alert("Login Successful");
}

//Initialize Array
let users = loadUsers();

//Returns arguements to be stored in array
function newUser(desc1, desc2) {
  return {
    username: desc1,
    password: desc2,
  };
}

//Saves to local storage
function saveUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}

//Converts JSON text form object to Javascript object
function loadUsers() {
  let usersStr = localStorage.getItem("users");
  return JSON.parse(usersStr) ?? [];
}

//Checks
function usernameCheck(input) {
  for (let i = 0; i < users.length; i++) {
    if (input === users[i].username) {
      return i;
    }
  }
  return -1;
}

function passwordCheck(input) {
  for (let i = 0; i < users.length; i++) {
    if (input === users[i].password) {
      return i;
    }
  }
  return -1;
}
