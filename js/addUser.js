// UserController

document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("userForm");
  const userModel = new User();

  userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userData = {
      username: document.getElementById("username").value,
    };
   
    const result = userModel.saveUser(userData);

    if (result.success) {
      return (window.location.href = "../signin.html");
    } else {
      console.log("proses simpan data gagal!");
    }
  });
});
