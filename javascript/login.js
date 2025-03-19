function data() {
    var a = document.getElementById("userid").value;
    var b = document.getElementById("contact").value;
    var c = document.getElementById("email").value;
    var d = document.getElementById("password").value;
    var e = document.getElementById("confirm_password").value;



    if (a == "" || b == "" || c == "" || d == "" || e == "") {
        alert("All field are mandatory");
        return false;
    }
    else if (b.length != 10) {
        alert("Number should be of 10 digit");
        return false;
    }
    else if (isNaN(b)) {
        alert("Only numbers are allowed");
        return false;
    }
    else if (!validateEmail(c)) {
        alert("Please enter valid email");
        return false;
    }
    else if (d.length < 8) {
        alert("password should be greater than 8 digit")
        return false;
    }
    else if (d != e) {
        alert("Password and confirm password should be same")
        return false
    }
    return true;
}
function validateEmail(email) {
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}