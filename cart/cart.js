
let items = JSON.parse(localStorage.getItem("cart"));

let bigDiv = document.querySelector(".products")

let quantity= document.querySelector(".product-quantity")
let totalPrice= document.querySelector(".total-price")
console.log(totalPrice)
let totalAmount= document.querySelector(".total-amount")
for(let i =0 ;i < items.length ; i++){
    displayCart(i)
}
// function for display items in cart
function displayCart(index){
    const div =document.createElement("div")
    div.classList.add("product")
    bigDiv.appendChild(div)
    const img = document.createElement("img")
    img.setAttribute("src",`${items[index]["img"]}`)
    div.appendChild(img)
    const div2 =document.createElement("div")
    div2.classList.add("product-info")
    div.appendChild(div2)
    const h3= document.createElement("h3")
    h3.classList.add("product-name")
    h3.textContent= items[index]["name"]
    const h4= document.createElement("h4")
    h4.classList.add("product-price")
    h4.textContent =items[index]["price"]
    const h42= document.createElement("h")
    h42.classList.add("data")
    h42.textContent =`Category: ${items[index]["category"]}`
    const div3= document.createElement("div")
    div3.classList.add("qun")
    div2.appendChild(h3)
    div2.appendChild(h4)
    div2.appendChild(h42)
    div2.appendChild(div3)

    const plusIcon = document.createElement("ion-icon")
    plusIcon.classList.add("plus")
    plusIcon.setAttribute("name", "add-circle-outline")
    plusIcon.setAttribute("data-id",items[index]["id"])
    plusIcon.addEventListener("click",()=> increaseAmounts(items[index],itemAmount,items[index].price,items));

    const itemAmount = document.createElement("p")
    itemAmount.classList.add("item-amount")
    itemAmount.textContent=items[index]["amount"]
    const minusIcon = document.createElement("ion-icon")
    minusIcon.classList.add("minus")
    minusIcon.setAttribute("name", "remove-circle-outline")
    minusIcon.setAttribute("data-id",items[index]["id"])
    minusIcon.addEventListener("click",()=>  decreaseAmounts(items[index],itemAmount,items[index].price,items));
div3.appendChild(plusIcon)
div3.appendChild(itemAmount)
div3.appendChild(minusIcon)
const removeBtn =document.createElement("p")
removeBtn.classList.add("product-remove")
removeBtn.classList.add("remove")
removeBtn.setAttribute("data-id",items[index]["id"])
const span= document.createElement("span")
span.setAttribute("data-id",items[index]["id"])
removeBtn.appendChild(span)
span.textContent="Remove"
div2.appendChild(removeBtn)
removeBtn.addEventListener("click", ()=> {
console.log(items[index]);

if(items.length>1){
    
    items=items.filter(ele=> ele.id!= items[index].id )

}else{
    items=[]
}
div.remove()

totalPrice.textContent = +(totalPrice.textContent)-(h4.textContent*itemAmount.textContent)
totalAmount.textContent = +(totalAmount.textContent)-(itemAmount.textContent)

localStorage.setItem('cart',JSON.stringify(items))
})
}