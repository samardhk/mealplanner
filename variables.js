function variables() {

    let userinput;
    userinput = document.getElementById("user").value;

    let GFG_Var;
 
    userdisplay = (userinput);
    document.getElementById('result').innerHTML = `${userdisplay}` ;
    }

function redirect() {
    
    var username = document.getElementById("user").value;
    localStorage.setItem("user",username);
    window.location.href = "code.html";
}

function showusername()  {
    var username = localStorage.getItem("user")
    document.getElementById("displayuser").textContent = username;
}