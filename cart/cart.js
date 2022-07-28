let items = JSON.parse(localStorage.getItem('cart'))

let bigDiv = document.querySelector('.products')

let quantity = document.querySelector('.product-quantity')
let totalPrice = document.querySelector('.total-price')
console.log(totalPrice)
let totalAmount= document.querySelector(".total-amount")
if(items){
for(let i =0 ;i < items.length ; i++){
    displayCart(i)
}}


// function for display items in cart
function displayCart(index) {
  const div = document.createElement('div')
  div.classList.add('product')
  bigDiv.appendChild(div)
  const img = document.createElement('img')
  img.setAttribute('src', `${items[index]['image']}`)
  div.appendChild(img)
  const div2 = document.createElement('div')
  div2.classList.add('product-info')
  div.appendChild(div2)
  const h3 = document.createElement('h3')
  h3.classList.add('product-name')
  h3.textContent = items[index]['name']
  const h4 = document.createElement('h4')
  h4.classList.add('product-price')
  h4.textContent = items[index]['price']
  const h42 = document.createElement('h')
  h42.classList.add('data')
  h42.textContent = `Category: ${items[index]['category']}`
  const div3 = document.createElement('div')
  div3.classList.add('qun')
  div2.appendChild(h3)
  div2.appendChild(h4)
  div2.appendChild(h42)
  div2.appendChild(div3)

  const plusIcon = document.createElement('ion-icon')
  plusIcon.classList.add('plus')
  plusIcon.setAttribute('name', 'add-circle-outline')
  plusIcon.setAttribute('data-id', items[index]['id'])
  plusIcon.addEventListener('click', () =>
    increaseAmounts(items[index], itemAmount, items[index].price, items),
  )

  const itemAmount = document.createElement('p')
  itemAmount.classList.add('item-amount')
  itemAmount.textContent = items[index]['amount']
  const minusIcon = document.createElement('ion-icon')
  minusIcon.classList.add('minus')
  minusIcon.setAttribute('name', 'remove-circle-outline')
  minusIcon.setAttribute('data-id', items[index]['id'])
  minusIcon.addEventListener('click', () =>
    decreaseAmounts(items[index], itemAmount, items[index].price, items),
  )
  div3.appendChild(plusIcon)
  div3.appendChild(itemAmount)
  div3.appendChild(minusIcon)
  const removeBtn = document.createElement('p')
  removeBtn.classList.add('product-remove')
  removeBtn.classList.add('remove')
  removeBtn.setAttribute('data-id', items[index]['id'])
  const span = document.createElement('span')
  span.setAttribute('data-id', items[index]['id'])
  removeBtn.appendChild(span)
  span.textContent = 'Remove'
  div2.appendChild(removeBtn)
  removeBtn.addEventListener('click', () => {
    console.log(items[index])

    if (items.length > 1) {
      items = items.filter((ele) => ele.id != items[index].id)
    } else {
      items = []
    }
    div.remove()

    totalPrice.textContent =
      +totalPrice.textContent - h4.textContent * itemAmount.textContent
    totalAmount.textContent = +totalAmount.textContent - itemAmount.textContent

    localStorage.setItem('cart', JSON.stringify(items))
  })
}

let totalP= 0
if(items){
items.forEach((ele,i) => { 
            totalP += items[i]["price"] })
let totalA = items.length
totalPrice.textContent = totalP
totalAmount.textContent = totalA
}
//function for increasing
function increaseAmounts(ele, itemAmount, price, array) {
  console.log(itemAmount)
  itemAmount.textContent = +itemAmount.textContent + 1
  totalPrice.textContent = +totalPrice.textContent + price
  totalAmount.textContent = +totalAmount.textContent + 1
  const ar = incLogic(ele, array)
  localStorage.setItem('cart', JSON.stringify(ar))
}
//function for decreasing
function decreaseAmounts(ele, itemAmount, price, array) {
  itemAmount.textContent = +itemAmount.textContent - 1
  console.log(totalPrice.textContent)
  totalPrice.textContent = +totalPrice.textContent - price
  totalAmount.textContent = +totalAmount.textContent - 1
  const ar = decLogic(ele, array)
  localStorage.setItem('cart', JSON.stringify(ar))
}
