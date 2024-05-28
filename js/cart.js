let allProducts=document.querySelector(".products")
let product_in_cart=localStorage.getItem("itemsInCart")
let total_price=document.querySelector(".Total h2 span")
if(product_in_cart){
items=JSON.parse(product_in_cart)
   DrawItemsInCart(items)
}
function DrawItemsInCart(products){
   let z=products.map(item=>{
        return `
        <div class="product_item">
            <img src="${item.imageUrl}" alt="">
            <div class="product_item_desc">
                <h2>${item.title}</h2>
                <p>good product recommended to you</p>
                <h3>${item.price} $</h3>
                <span>${item.num}</span>
                <span>
                <i class="fas fa-plus plus-minus" onclick="inc(${item.id})"></i>
                <i class="fas fa-minus plus-minus" onclick="dec(${item.id})"></i>
                </span>
                <button onclick="RemoveFromCart(${item.id})">Remove From Cart</button>
            </div>
            
        </div>`
   })
   allProducts.innerHTML=z;
   totalPrice()
   console.log(z)
}
// ============================================
function RemoveFromCart(id){
    items=items.filter((item)=>item.id!==id);
    localStorage.setItem("itemsInCart",JSON.stringify(items))
    allProducts.innerHTML="";
    DrawItemsInCart(items)
}
// =================================================
function inc(id){
    console.log("id"+id)
    console.log("item"+items[id])
    let index=items.findIndex((item=>item.id==id))
    console.log("index"+index)
    console.log("before"+items[index].num)
    items[index].num +=1; 
    console.log("after"+items[index].num)
    localStorage.setItem("itemsInCart",JSON.stringify(items))
    allProducts.innerHTML="";
    DrawItemsInCart(items)
}
function dec(id){
    console.log("id"+id)
    console.log("item"+items[id])
    let index=items.findIndex((item=>item.id==id))
    console.log("index"+index)
    console.log("before"+items[index].num)
    if(items[index].num===1){
        RemoveFromCart(id)
    }else{
        items[index].num -=1; 
        console.log("after"+items[index].num)
        localStorage.setItem("itemsInCart",JSON.stringify(items))
        allProducts.innerHTML="";
        DrawItemsInCart(items)

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

function totalPrice(){
    let total=0;
    items.forEach(element => {
        total+=element.num*element.price
    });
    total_price.innerHTML=total

}