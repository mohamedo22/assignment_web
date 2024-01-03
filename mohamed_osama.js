let login_Users = [
    {
    "username": "user1", "pass": "pass123", "age": 25, "gender": "male", "phone": "123-456-7890"
    },
    {
    "username": "user2", "pass": "abc456", "age": 30, "gender": "female", "phone": "987-654-3210"
    }
   ];
function move_to_sign_up()
{
    let form_of_signin = document.getElementById("signin");
    form_of_signin.style.transform = "translateX(400px)";
    let cont_of_navigatbtn = document.getElementById("navigate_con");
    cont_of_navigatbtn.style.left = "24vw";
    let sign_up_form = document.getElementById("signup-form");
    sign_up_form.style.left = "5vw";
}
function move_to_sign_in()
{
    let form_of_signin = document.getElementById("signin");
    form_of_signin.style.transform = "";
    let cont_of_navigatbtn = document.getElementById("navigate_con");
    cont_of_navigatbtn.style.left = "";
    let sign_up_form = document.getElementById("signup-form");
    sign_up_form.style.left = "";
}
function move_to_forget_page()
{
    let form_of_signin = document.getElementById("signin");
    form_of_signin.style.transform = "translateX(-150px)";
    let cont_of_navigatbtn = document.getElementById("navigate_con");
    cont_of_navigatbtn.style.left = "-30vw";
    let sign_up_form = document.getElementById("signup-form");
    sign_up_form.style.left = "";
    let forget_form = document.getElementById("forget_pass");
    forget_form.style.left = "15vw";
}
function goback_to_forget_page()
{
    let form_of_signin = document.getElementById("signin");
    form_of_signin.style.transform = "";
    let cont_of_navigatbtn = document.getElementById("navigate_con");
    cont_of_navigatbtn.style.left = "";
    let sign_up_form = document.getElementById("signup-form");
    sign_up_form.style.left = "";
    let forget_form = document.getElementById("forget_pass");
    forget_form.style.left = "";
}
function adduser()
{
    let look_for_sp = false;
    let regeex = /[!@#$%^&*()]/
    let value_of_gender = "";
    let look =false;
    let look_ofchars = false;
    let look_of_numbers = false;
    let username = document.getElementById("username_textinput_of_signup");
    let password = document.getElementById("password_signup");
    let age = document.getElementById("age");
    let gender = document.querySelectorAll(".gender");
    let phone = document.getElementById("phone_number");
    if(phone.value.length == 11)
    {
        gender.forEach((x)=>{
            if(x.checked)
            {
                look = true;
                value_of_gender = x.value;
            }
        })
        if(look)
        {
            if(password.value.length >= 8 )
            {
                console.log(`${look_of_numbers} ${look_ofchars}`);
                for(let i=0 ; i<password.value.length ; i++)
                {
                    if((password.value[i] >= 'a' && password.value[i] >= 'z') || (password.value[i] >= 'A' && password.value[i] >= 'Z'))
                    {
                        look_ofchars = true;
                    }
                    if(!isNaN(password.value[i]))
                    {
                        look_of_numbers = true;
                    } 
                    if(regeex.test(password.value[i]))
                    {
                        look_for_sp = true;
                    }
                }
          
            if(look_ofchars  && look_of_numbers  && look_for_sp )
            {
                if(age.value >= 18 && age.value <= 60)
                {
                    let user = {
                        "username": username.value,
                        "pass": password.value,
                        "age": age.value,
                        "gender": value_of_gender,
                        "phone": phone.value
                        };
                        login_Users.push(user);
                        alert(`the user has been added 
                        "username": ${username.value},
                        "pass": ${password.value},
                        "age": ${age.value},
                        "gender": ${value_of_gender},
                        "phone": ${phone.value}`);
                }
                else{ alert("your age is not meet the target");}
            }
            else
            {
                alert("plz enter a strong password")
            }
           }
           else
           {
            alert("plz enter 8 chars or more")
           }
            
        }
        else{alert("plz choose your gender")}
    }
    else
    {
        alert("enter valied phone plz");
    }
}
function login()
{
    let username_text = document.getElementById("username_textinput");
    let pass_text = document.getElementById("password_login");
    let check = false;
     for(let i = 0 ; i<login_Users.length ; i++ )
    {
        if(login_Users[i].username == username_text.value && login_Users[i].pass == pass_text.value)
        {
            check =  true;
        }
    };



    if(check == true)
    {
        alert("welcome again");
        window.location.href = "Feed_back.html"
    }
    else
    {
        alert("this is not user");
    }
}
function reset_pass()
{
    let look_ofchars = false;
    let look_of_numbers = false;
    let username = document.getElementById("username_textinput_forget");
    let password = document.getElementById("p_username_forget");
    let con_pass = document.getElementById("con_password_forget");
    let check_user = false;
    let index_of_user = 0;
    for(let i =0 ; i<login_Users.length ; i++)
    {
        if(login_Users[i].username == username.value)
        {
            check_user = true;
            index_of_user = login_Users.indexOf(login_Users[i]);
        }
    }
    if(check_user)
    {
        if(password.value == con_pass.value)
        {
            if(password.value.length >= 8 )
            {
                for(let i=0 ; i<password.value.length ; i++)
                {
                    if((password.value[i] >= 'a' && password.value[i] >= 'z') || (password.value[i] >= 'A' && password.value[i] >= 'Z'))
                    {
                        look_ofchars = true;
                    }
                    if(password.value[i] >= '0' && password.value[i] >= '9')
                    {
                        look_of_numbers = true;
                    } 
                }
          
            if(look_ofchars && look_of_numbers)
            {
                    login_Users[index_of_user].pass = password.value;
                    alert(`password has been chenged the new password is ${login_Users[index_of_user].pass}`)
            }
            else
            {
                alert("plz enter a strong password")
            }
           }
           else
           {
            alert("plz enter 8 chars or more")
           }
            
        }
        else{alert("the password not match")}
    }
    else
    {
        alert("this is not user");
    }
}