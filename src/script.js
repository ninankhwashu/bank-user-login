let container = document.getElementById("container");
let registerButton = document.getElementById("register");
let loginButton = document.getElementById("login");

registerButton.addEventListener("click", () => {
  container.classList.add("active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("active");
});

let forgotPasswordLink = document.querySelector(".sign-in a");
let resetFormContainer = document.querySelector(".reset-password");
let cancelResetButton = document.getElementById("cancelButton");

forgotPasswordLink.addEventListener("click", function (e) {
  e.preventDefault();
  resetFormContainer.style.left = "0%";
  resetFormContainer.style.opacity = "1";
  container.classList.add("show-reset");
});

cancelResetButton.addEventListener("click", function () {
  resetFormContainer.style.left = "100%";
  resetFormContainer.style.opacity = "0";
  container.classList.remove("show-reset");
});
