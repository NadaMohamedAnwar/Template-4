let allproduct=document.querySelector(".products")
let selectchoise=document.querySelector("#category")
let inputSearch=document.querySelector("#inputSearch")
let addedItems=localStorage.getItem("itemsInCart") ? JSON.parse(localStorage.getItem("itemsInCart")) : [] ;
let favItems=localStorage.getItem("itemsInFav") ? JSON.parse(localStorage.getItem("itemsInFav")) : [] ;
let categoryProduct;
selectchoise.addEventListener("change",changeChoise)
function changeChoise(){
    draw_items(selectchoise.value)
}
inputSearch.addEventListener("change",cgangeSearch)
function cgangeSearch(){
    draw_items(inputSearch.value)
}
let products=[
    {
    id:2,
    title:"Black Suit",
    price:600,
    imageUrl:"imgs/forma2.webp",
    category:"Formal",
    num:0
    },
    {
    id:20,
    title:"Baby Dress",
    price:780,
    imageUrl:"imgs/children1.jpg",
    category:"Children",
    num:0
    },
    {
    id:11,
    title:"D&R Dress",
    price:980,
    imageUrl:"imgs/dress4.jpg",
    category:"Dress",
    num:0
    },
    {
    id:21,
    title:"Pink Suit",
    price:430,
    imageUrl:"imgs/children2.jpg",
    category:"Children",
    num:0
    },
    {
    id:15,
    title:"Beige Suit",
    price:340,
    imageUrl:"imgs/casual2.jpg",
    category:"Casual",
    num:0
    },
    {
    id:22,
    title:"Cyan Suit",
    price:250,
    imageUrl:"imgs/children3.jpg",
    category:"Children",
    num:0
    },
    {
    id:3,
    title:"Brown Suit",
    price:750,
    imageUrl:"imgs/formal3.webp",
    category:"Formal",
    num:0
    },
    {
    id:4,
    title:"Black B Suit",
    price:700,
    imageUrl:"imgs/formal4.webp",
    category:"Formal",
    num:0
    },
    {
    id:23,
    title:"Black Suit",
    price:350,
    imageUrl:"imgs/children4.jpg",
    category:"Children",
    num:0
    },
    {
    id:10,
    title:"Purple Dress",
    price:600,
    imageUrl:"imgs/dress3.webp",
    category:"Dress",
    num:0
    },
    {
    id:16,
    title:"Man Suit",
    price:380,
    imageUrl:"imgs/casual3.jpg",
    category:"Casual",
    num:0
    },
    {
    id:24,
    title:"Striped Suit",
    price:380,
    imageUrl:"imgs/children5.jpg",
    category:"Children",
    num:0
    },
    {
    id:12,
    title:"Cyan Dress",
    price:840,
    imageUrl:"imgs/dress5.jpg",
    category:"Dress",
    num:0
    },
    {
    id:25,
    title:"Cyan & Navy",
    price:380,
    imageUrl:"imgs/children6.jpg",
    category:"Children",
    num:0
    },
    {
    id:5,
    title:"Gray Suit",
    price:700,
    imageUrl:"imgs/formal5.jpg",
    category:"Formal",
    num:0
    },
    {
    id:6,
    title:"Checks Suit",
    price:700,
    imageUrl:"imgs/formal6.jpg",
    category:"Formal",
    num:0
    },
    {
    id:26,
    title:"White & Gray",
    price:400,
    imageUrl:"imgs/children7.jpg",
    category:"Children",
    num:0
    },
    {
    id:17,
    title:"Black & Jeans",
    price:570,
    imageUrl:"imgs/casual6.jpg",
    category:"Casual",
    num:0
    },
    {
    id:1,
    title:"Blacl Suit",
    price:500,
    imageUrl:"imgs/formal1.webp",
    category:"Formal",
    num:0
    },
    {
    id:18,
    title:"Striped & Jeans",
    price:280,
    imageUrl:"imgs/casual7.webp",
    category:"Casual",
    num:0
    },
    {
    id:7,
    title:"Pink Suit",
    price:700,
    imageUrl:"imgs/formal7.webp",
    category:"Formal",
    num:0
    },
    {
    id:8,
    title:"Gray Dress",
    price:400,
    imageUrl:"imgs/dress1.webp",
    category:"Dress",
    num:0
    },
    {
    id:19,
    title:"White & Jeans",
    price:200,
    imageUrl:"imgs/casual8.jpg",
    category:"Casual",
    num:0
    },
    {
    id:9,
    title:"Red Dress",
    price:540,
    imageUrl:"imgs/dress2.jpg",
    category:"Dress",
    num:0
    },
   
    {
    id:13,
    title:"Navy Dress",
    price:400,
    imageUrl:"imgs/dress6.jpg",
    category:"Dress",
    num:0
    },
    {
    id:14,
    title:"Casual Suit",
    price:540,
    imageUrl:"imgs/casual1.webp",
    category:"Casual",
    num:0
    },
]
function draw_items(c){
    let y;
    if(c==="All"){
        categoryProduct =products;
    }else{
        categoryProduct=products.filter((item)=>(item.category.slice(0,c.length)).toLowerCase()===c.toLowerCase())
    }
    if(!localStorage.getItem("username")){
       y=categoryProduct.map(function(item){
            return `
            <div class="shopping-product">
                <img src="${item.imageUrl}" alt="">
                <div class="shopping_item_desc">
                    <h3>Product Name : <span>${item.title}</span></h2>     
                    <h3>Category: <span>${item.category}</span></h2>     
                    <h3>Price :   <span>${item.price} $</span></h3>  
                </div>
                <div class="product_item_action">
                <button onclick="addToCart(this,${item.id})">Add To Cart</button>
                <i class="fas fa-heart redheart" id="icon_action"  onclick="addToFav(this,${item.id})"></i>
                </div>
            </div>`

        })
    }else{
        y=categoryProduct.map(function(item){
            if(addedItems.find((x)=>x.id===item.id)){
                return `
                <div class="shopping-product" id=${item.id}>
                    <img src="${item.imageUrl}" alt="">
                    <div class="shopping_item_desc">
                        <h3>Product Name : <span>${item.title}</span></h2>     
                        <h3>Category: <span>${item.category}</span></h2>     
                        <h3>Price :   <span>${item.price} $</span></h3>  
                    </div>
                    <div class="product_item_action">
                    <button onclick="addToCart(this,${item.id})">Remove From Cart</button>
                    <i class="fas fa-heart redheart" id="icon_action"  onclick="addToFav(this,${item.id})"></i>
                    </div>
                </div>`
            }
            else{
                return `
                <div class="shopping-product" id=${item.id}>
                    <img src="${item.imageUrl}" alt="">
                    <div class="shopping_item_desc">
                        <h3>Product Name : <span>${item.title}</span></h2>     
                        <h3>Category: <span>${item.category}</span></h2>     
                        <h3>Price :   <span>${item.price} $</span></h3>  
                    </div>
                    <div class="product_item_action">
                        <button onclick="addToCart(this,${item.id})">Add To Cart</button>
                        <i class="fas fa-heart redheart" id="icon_action"  onclick="addToFav(this,${item.id})"></i>
                    </div>
                </div>`
            }
            

        })
    }
    allproduct.innerHTML=y;
}
draw_items("All")
// ============================================================
let CartProductDiv=document.querySelector(".cart_products div");
let badge=document.querySelector(".badge");

shortViewItems()
function shortViewItems(){
    if(addedItems){
        addedItems.map(item=>{
            CartProductDiv.innerHTML+=`<div class="managecartProduct" id=${item.id}>
            <span>${item.title}</span>
            <span>${item.num}</span>
            <i class="fas fa-plus" onclick="inc(${item.id})"></i>
            <i class="fas fa-minus" onclick="dec(${item.id})"></i>
            </div>`;
    
        })
        
        badge.style.display="block";
        badge.innerHTML=addedItems.length;
    }
}
function addToCart(b,id){
    if(localStorage.getItem("username")){
        let chosenItem=products.find((item)=>item.id===id)
        console.log(chosenItem.num)

        if(chosenItem.num===0 && !(addedItems.find((i)=>i.id===chosenItem.id))){
            chosenItem.num=1
            addedItems=[...addedItems,chosenItem]
            localStorage.setItem("itemsInCart",JSON.stringify(addedItems))
            console.log(addedItems)
            CartProductDiv.innerHTML=""
            shortViewItems()
            b.innerHTML="Remove From Cart";
        

        }else{
            console.log(id)
            addedItems=addedItems.filter((item)=>item.id!==id);
            localStorage.setItem("itemsInCart",JSON.stringify(addedItems))
            console.log(addedItems)
            CartProductDiv.innerHTML=""
            shortViewItems()
            b.innerHTML="Add To Cart"
        }
    
    }else{
        window.location="Login.html"
    }
    
}


function inc(id){
    let divProds=document.querySelectorAll(".managecartProduct")
    let index=addedItems.findIndex((item=>item.id==id))
    addedItems[index].num +=1; 
    console.log("after"+addedItems[index].num)
    localStorage.setItem("itemsInCart",JSON.stringify(addedItems))
    divProds[index].children[1].innerHTML=addedItems[index].num;
    console.log(divProds[index].children[1].innerHTML)
    
}
function dec(id){
    let divProds=document.querySelectorAll(".managecartProduct")
    let index=addedItems.findIndex((item=>item.id==id))
    if(addedItems[index].num===1){
        addedItems=addedItems.filter((item)=>item.id!==id);
        localStorage.setItem("itemsInCart",JSON.stringify(addedItems))
        console.log(addedItems)
        let prods= document.querySelectorAll(".shopping-product")
        prods.forEach((elem1,ind)=>{
            if(elem1.id == id){
                console.log(prods[ind].childNodes[5].childNodes[1].innerHTML)
                prods[ind].childNodes[5].childNodes[1].innerHTML = "Add To Cart"
            }
        })
        CartProductDiv.innerHTML=""
        shortViewItems()
    }else{
        addedItems[index].num -=1; 
        console.log("after"+addedItems[index].num)
        localStorage.setItem("itemsInCart",JSON.stringify(addedItems))
        divProds[index].children[1].innerHTML=addedItems[index].num;
    }
   
}
// ============================================================================================
let cart=document.querySelector(".shopping_cart")
let cartProducts=document.querySelector(".cart_products")
cart.addEventListener("click",displayItems)
function displayItems(){
    if(CartProductDiv!=""){
        if(cartProducts.style.display==="none"){
            cartProducts.style.display="block"
        }else{
            cartProducts.style.display="none"
        }
    }
}
// =================================================
let LodOutBtn=document.querySelector("#logout")
LodOutBtn.addEventListener("click",function(){
    localStorage.clear()
    setTimeout(()=>{
        window.location="login.html";
    },1000)

})
// ===========================================================

function addToFav(i,id){
    if(localStorage.getItem("username")){
        let fav=categoryProduct.find((item)=>item.id===id)
        if(favItems.find((item)=>item.id===id)){
            favItems=favItems.filter((item)=>item.id!==id);
            localStorage.setItem("itemsInFav",JSON.stringify(favItems))
            i.style.color = "gray"; 
        }else{
            favItems=[...favItems,fav]
            i.style.color = "red"; 
            localStorage.setItem("itemsInFav",JSON.stringify(favItems))
        }
       
    }else{
        window.location="Login.html"
    }
    
    
   
}
let prods = document.querySelectorAll(".shopping-product")
if(favItems.length != 0){
   prods.forEach((elem1,ind)=>{
    favItems.forEach((elem2)=>{
        if(elem1.id == elem2.id){
            prods[ind].childNodes[5].childNodes[3].style.color = "red"
        }
    })
   })
}



    

// ==============================================================================================