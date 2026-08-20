document.getElementById("btn-signup").addEventListener("click", function () {
    const Fullname = document.getElementById("name").value;
    const Email = document.getElementById("Email").value;
    const Username = document.getElementById("User Name").value;
    const password = document.getElementById("password").value;
})


const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
    "userId": 0,
    "userName": "Username",
    "emailId": "Email",
    "fullName": "Fullname",
    "role": "string",
    "createdDate": new Date().toISOString(),
    "password": "password",
    "projectName": "Metro service",
    "refreshToken": "string",
    "refreshTokenExpiryTime": new Date().toISOString()
});

const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
};

fetch("https://api.freeprojectapi.com/api/BusBooking/AddNewUser", requestOptions)
    .then((response) => response.text())
    .then(result => {
        console.log(result);

        if (result.result) {
            window.location.href = "home.html"
            alert("registation succeed")
        } else {
            alert("Invalid Caracter found")
        }
    });
