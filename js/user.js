let notLogin1=document.querySelector("#notLogin1")
let notLogin2=document.querySelector("#notLogin2")
let notLogin3=document.querySelector("#notloginhome")
let notLogin4=document.querySelector("#notloginfav")
let notLogin5=document.querySelector(".shopping_cart")
let userdata=document.querySelector("#user")
let links1=document.querySelector("#links1")
let links2=document.querySelector("#links2")
if(localStorage.getItem("username")){
    links1.remove()
    notLogin1.style.display="block"
    links2.remove()
    notLogin2.style.display="block"
    notLogin3.style.display="block"
    notLogin4.style.display="block"
    notLogin5.style.display="block"
    userdata.innerHTML=localStorage.getItem("username").trim();

}