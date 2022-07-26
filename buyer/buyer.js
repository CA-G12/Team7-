const container = document.querySelector('.container')

let items = [
  {
    name: 'dog',
    price: '25$',
    description: 'this is dog',
    img: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg',
    category: 'anemil',
  },
  {
    name: 'dog',
    price: '25$',
    description: 'this is dog',
    img: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg',
    category: 'anemil',
  },
]
items.forEach((item) => {
  let card = document.createElement('figure')
  card.setAttribute('class', 'card')
  container.appendChild(card)
  let img = document.createElement('img')
  img.setAttribute('src', item.img)
  let cart = document.createElement('i')
  cart.setAttribute('class', 'fa-solid fa-cart-plus')
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
