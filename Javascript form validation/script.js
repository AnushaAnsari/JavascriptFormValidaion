function registeration() {
    var Firstname = document.getElementById("t1").value;
    var Secondname = document.getElementById("t2").value;
    var email = document.getElementById("t3").value;
    var age = document.getElementById("t4").value;
    var address = document.getElementById("t5").value;
    var pwd = document.getElementById("t6").value;
    var cpwd = document.getElementById("t7").value;
}

if (Firstname == "") {
    alert("Please enter your name");
}
else if (email == '') {
    alert('Please enter your user email id');
}
else if (pwd == '') {
    alert('Please enter Password');
}
else if (pwd.length() < 6) {
    alert("Password is too short");
}
else if (pwd.length() > 12) {
    alert("Password is too long");
}
else if (cpwd == '') {
    alert('Enter Confirm Password');
}
else if (pwd != cpwd) {
    alert("Password not matched");
}
else {
    alert('Thank You for Login & You are Redirecting to our Website');
    window.location = "http://www.amazon.com";
}

function clearFunc()
	{
		document.getElementById("t1").value="";
		document.getElementById("t2").value="";
		document.getElementById("t3").value="";
		document.getElementById("t4").value="";
		document.getElementById("t5").value="";
        document.getElementById("t6").value="";
		document.getElementById("t7").value="";
	}