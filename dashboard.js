
var test="";
var data = new Array();
var store;
function adduser()
{
            var alldata = new Array();
            var test = "";
            
                
                var id = 1;
                 
                
                
                store = JSON.parse(localStorage.getItem("userdata"));
                if(store !== null)
                { 
                alldata = store; 
                id++;
                }
                var data = {

                    id:id,
                    username:document.getElementById('name').value,
                    email:document.getElementById('email').value,
                    password:Number(document.getElementById('password').value),
                    birthday:document.getElementById('dateofbirth').value,
                    
                };
                

                
                alldata.push(data);
                
                localStorage.setItem("userdata",JSON.stringify(alldata));
                test += "<tr><td>id</td><td>Username</td><td>Email</td><td>Password</td><td>Birthdate</td><td>age</td></tr>";
                document.getElementById("display_table").innerHTML = test;
                display(); 
            }


            
            function display()
            {
                
                var data = new Array();

                data = JSON.parse(localStorage.getItem("userdata"));
                
                
                
                 for(i=0;i<data.length;i++)
                 {
                     test += "<tr><td>"+(i+1)+"</td><td>"+data[i].username+"</td><td>"+data[i].email+"</td><td>"+data[i].password+"</td><td>"+data[i].birthday+"</td>";
                 }
                  test  += "</tr>";
                  
                 document.getElementById("display_table").innerHTML = test;
                test = ""; 

            }
