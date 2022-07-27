const container = document.querySelector('.container')
const inputSearch = document.querySelector('.search-input')
const cart = []
let items = JSON.parse(localStorage.getItem('products')) || [
  {
    name: 'aog',
    price: '25$',
    description: 'this is dog',
    img: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg',
    category: 'anemil',
    amount: 1,
  },
  {
    name: 'aohg',
    price: '25$',
    description: 'this is dog',
    img: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg',
    category: 'anemil',
    amount: 1,
  },
  {
    name: 'caog',
    price: '25$',
    description: 'this is dog',
    img: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg',
    category: 'anemil',
    amount: 1,
  },
  {
    name: 'dog',
    price: '25$',
    description: 'this is dog',
    img: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg',
    category: 'anemil',
    amount: 1,
  },
]
function createItem(items) {
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
}
createItem(items)

function addToCart(item) {
  cart.push(item)
  localStorage.setItem('cart', JSON.stringify(cart))
}

inputSearch.addEventListener('keyup', () => {
  let searchArr = search(items, inputSearch.value)
  container.textContent = ''
  if (!inputSearch.value) {
    createItem(items)
  } else {
    createItem(search(items, inputSearch.value))
  }
})
