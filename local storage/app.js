
const createAccount = () => {
    console.log(username.value)

    console.log(email.value)

    console.log(password.value)

    const userObj = {
        username: username.value,
        email: email.value,
        password: password.value,
    }

    const user = JSON.parse(localStorage.getItem("users")) || []
    console.log(user)

    const userIndex = user.findIndex((value, ind) => {
        return value.email === userObj.email
    })
    console.log(userIndex);
    if (userIndex === -1) {
        user.push(userObj)
        localStorage.setItem("users", JSON.stringify(user))
        alert("successfully createAccount ")
        window.location.assign("./login.html")
    } else {
        alert("email already exists")
    }
}


const login = () => {
 const email = document.getElementById("email")
 const password = document.getElementById("password")
 const userData = JSON.parse(localStorage.getItem("users"))
  console.log(userData)
 const checkUser = userData.find((value) => {
     return value.email === email.value && value.password === password.value
    })

    console.log(checkUser);
    if (checkUser) {
        localStorage.setItem("currentUser", JSON.stringify(checkUser))
        alert("successfully login")
    } else {
        alert("unkown user")
    }

}