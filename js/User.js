// Model User

class User {
  constructor() {
    this.users = this.getUsers() || [];
  }

  saveUser(data) {
    const newUser = {
      id: Date.now(),
      ...data,
    };

    this.users.push(newUser);
    localStorage.setItem("users", JSON.stringify(this.users));
    return {
      success: true,
    };
  }

  signIn(username) {
    // pemeriksaan
    const userExist = this.users.some(user => user.username.toLowerCase() === username.toLowerCase());

    if(userExist){
        // proses pengembalian data ke signIn.js controller
        return {
          success: true,
          username,
        };
    }else{
        return {
            success: false,
            message : "Maaf, data tidak ditemukan!",
          };
    }
  }

  getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
  }
}
