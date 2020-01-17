var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


function registrationCheck()
{
    var email = document.getElementById('loginemail').value;
    var password = document.getElementById('loginpassword').value;

    if(email && password != "")
    {
    if(email == mailformat)
    
    {
        alert("please Enter valid Email address");          
    }
    else
    {
        checkadmin();
        window.location.href = "registration.html";
    }
    }
    else
    {
        alert("please fill all fields");
    }
    


}
function checkadmin()
{
    
    var localid;
    var adminemail = document.getElementById('loginemail').value;
    var adminpassword = document.getElementById('loginpassword').value;
    
        data = JSON.parse(localStorage.getItem("userdata"));
        for(i=0;i<data.length;i++)
        {
            localid = data[i].id;
            localemail = data[i].email;
            localpassword = data[i].password;
        }
        
        
    if(adminemail == "admin@gmail.com" && adminpassword == "123")
    {
        document.getElementById("registrationbutton").style.visibility = "hidden";
    }
    else
    {
        document.getElementById("registrationbutton").style.visibility = "visible";
    }
}

