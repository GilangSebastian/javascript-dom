let btnLogin = document.getElementById("buttonLogin")

let authentication = () => {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    if (username == "admin" && password == "user") {
        alert(`Selamat Datang ${username}`)
    } else {
        alert("Username atau password yang ada masukkan salah")
    }
}

btnLogin.addEventListener("click", authentication)