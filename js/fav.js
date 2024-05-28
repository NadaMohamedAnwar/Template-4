let FavProducts=localStorage.getItem("itemsInFav")
let allproduct=document.querySelector(".products")
let items;
if(FavProducts){
    items=JSON.parse(FavProducts);
    drawItemProductFav(items)
}
function drawItemProductFav(products) {
    let z = products.map(function(item) {
        return `
        <div class="product_item">
            <img src="${item.imageUrl}" alt="">
            <div class="product_item_desc">
                <h2>${item.title}</h2>
                <p>good product recommended to you</p>
                <h3>${item.price} $</h3>
            </div>
            <div class="fav_action">
            <button onclick="RemoveFromFav(${item.id})">Remove From Favorite</button>
            </div>
        </div>`
    })
    
        allproduct.innerHTML = z;
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
function RemoveFromFav(id){
    console.log(id)
    console.log(items)
    items=items.filter((item)=>item.id!==id);
    console.log(items)
    localStorage.setItem("itemsInFav",JSON.stringify(items))
    allproduct.innerHTML="";
    drawItemProductFav(items)
}