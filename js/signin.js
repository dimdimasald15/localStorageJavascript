// UserController

document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("userForm");
  const userModel = new User();

  userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;

    const result = userModel.signIn(username);

    if (result.success) {
      localStorage.setItem("usernameLoggedIn", username);

      return (window.location.href = "../tasks.html");
    } else {
      alert(result.message);
    }
  });
});
