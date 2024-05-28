let username=document.querySelector("#username")
let email=document.querySelector("#email")
let password=document.querySelector("#password")
let confirm_password=document.querySelector("#confirm_password")
let sign_up=document.querySelector("#Sign_up");
let span=document.querySelector("#span");


sign_up.addEventListener("click",function(e){
    e.preventDefault()
    if(username.value==="" ||password.value==="" ||email.value==="" ||confirm_password.value===""){
        span.innerHTML="Please Fill All Fields"
    }else{
        if(password.value!==confirm_password.value){
            span.innerHTML="password does not match"
        }else{
            span.innerHTML=""
            localStorage.setItem("username",username.value);
            localStorage.setItem("email",email.value);
            localStorage.setItem("password",password.value)
            setTimeout(function(){
                window.location="Login.html"
            },1000)
        }
    }

})