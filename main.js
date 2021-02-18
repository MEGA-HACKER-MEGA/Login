var username="Fun";
var password="1123456771";
var user;
var pass;
function validate() {
    var user=document.getElementById("username").value;
    var pass=document.getElementById("password").value;
    if(user==username && pass==password)
    window.location="file:///Users/aaravkucheria/Google%20Drive/Visual%20Studio/Login/when.html";
    else{
        alert("Wrong username or password");
    }
    }