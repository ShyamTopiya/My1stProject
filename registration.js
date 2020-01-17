var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
function registrationDetail()
{
    
    var inputdata = document.getElementById('registrationform');
    var useremail = document.getElementById('useremail');
    for(i=0;i<inputdata.length-2;i++)
    {
        if(inputdata[i].value == "")
        {
            alert("please fill the form first");
            break;
        }
            if(useremail == mailformat)
        {
            alert("please input valid email address");
            break;
            
        }
        else
        {
            console.log(inputdata[i].value);
        }
        }
    
            
    if(document.getElementById("check").checked == true)
    {
        window.location.href = "dashboard.html";
    }
    else
    {
        alert("please tick the checkbox");
    }
    pushdata();
}

