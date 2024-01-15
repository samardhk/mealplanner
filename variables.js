function redirect() {
    
    var username = document.getElementById("user").value;
    if (!username) {
        alert("Please Enter Username")
        return;
    }
    localStorage.setItem("user",username);
    window.location.href = "code.html";

}

function showusername()  {
    var username = localStorage.getItem("user")
    document.getElementById("displayuser").textContent = username;
}