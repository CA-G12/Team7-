const container = document.querySelector('.container')
const cart = []
let items = JSON.parse(localStorage.getItem('products')) || []
items.forEach((item) => {
  let card = document.createElement('figure')
  card.setAttribute('class', 'card')
  container.appendChild(card)
  let img = document.createElement('img')
  img.setAttribute('src', item.img)
  let cart = document.createElement('i')
  cart.setAttribute('class', 'fa-solid fa-cart-plus')

  cart.addEventListener('click', () => {
    addToCart(item)
  })

  card.appendChild(cart)
  card.appendChild(img)
  let figcaption = document.createElement('figcaption')
  card.appendChild(figcaption)
  let name = document.createElement('h2')
  name.textContent = `Name : ${item.name}`
  figcaption.appendChild(name)
  let price = document.createElement('h3')
  figcaption.appendChild(price)
  price.textContent = `price : ${item.price}`
  let category = document.createElement('h3')
  category.textContent = `category : ${item.category}`
  figcaption.appendChild(category)
  let description = document.createElement('p')
  description.textContent = `description : ${item.description}`
  figcaption.appendChild(description)
})

function addToCart(item) {
  cart.push(item)
  localStorage.setItem('cart', JSON.stringify(cart))

  console.log(cart)
}
