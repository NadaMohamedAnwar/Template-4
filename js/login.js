let username=document.querySelector("#username")
let email=document.querySelector("#email")
let password=document.querySelector("#password")
let sign_in=document.querySelector("#Sign_in");
let span=document.querySelector("#span");
let storage_email=localStorage.getItem("email")
let storage_pass=localStorage.getItem("password")
sign_in.addEventListener("click",function(e){
    e.preventDefault();
    if(email.value==="" || password.value===""){
        span.innerHTML="Please Fill All Fields"
    }else{
        if(email.value.trim()===storage_email.trim() && password.value.trim()===storage_pass.trim()){
            setTimeout(function(){
                window.location="index.html"
            },1000)
        }else{
            span.innerHTML="Invail email or password"
        }
    }
})