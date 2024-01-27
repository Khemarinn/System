const password = document.getElementById("password");
const eyeslashIcon = document.getElementById("eye-slash-icon");

eyeslashIcon.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";
    eyeslashIcon.classList = "fa-solid fa-eye";
  } else {
    password.type = "password";
    eyeslashIcon.classList = "fa-solid fa-eye-slash";
  }
});
