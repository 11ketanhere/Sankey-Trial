
function welcome() {
    var user = document.getElementById("uname");
    var pass = document.getElementById("pass");
    if(user.value==""){
        document.getElementById("h3login").innerHTML="Enter username/email";
        return false;
    } 
    else if(pass.value==""){
        document.getElementById("h3login").innerHTML="Enter password";
        return false;
    }
    else if(user.value !="sankey901@solution.com"){
        document.getElementById("h3login").innerHTML="Invalid username/email";
        return false;
        // alert("Invalid username/email");
     }
     else if( pass.value!="mindset"){
        document.getElementById("h3login").innerHTML="Invalid password";
        // alert("Invalid password");
        return false;
     }
     else{
        document.getElementById("h3login").innerHTML="username and password is matching";
        return true;
     }
    
}