let container = document.getElementById("container");
let registerButton = document.getElementById("register");
let loginButton = document.getElementById("login");

registerButton.addEventListener("click", () => {
  container.classList.add("active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("active");
});
