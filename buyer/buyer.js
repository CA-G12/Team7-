const container = document.querySelector('.container')
const inputSearch = document.querySelector('.search-input')
const cata = document.querySelector('.cata')
const sortBtn = document.querySelector('.sorting')
const cart = JSON.parse(localStorage.getItem('cart')) || []
let items = JSON.parse(localStorage.getItem('products')) || [
  { name: 'aa', detail: 'aaa ', category: 'cats', price: '0.01', image: 'ccc' },
]
function createItem(items) {
  items.forEach((item) => {
    let card = document.createElement('figure')
    card.setAttribute('class', 'card')
    container.appendChild(card)
    let img = document.createElement('img')
    img.setAttribute('src', item.image)
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
    description.textContent = `description : ${item.detail}`
    figcaption.appendChild(description)
  })
}
createItem(items)

function addToCart(item) {
  cart.push({ ...item, amount: 1 })
 edit-link-img
  localStorage.setItem('cart', JSON.stringify(cart))
}

inputSearch.addEventListener('keyup', () => {
  container.textContent = ''
  if (!inputSearch.value) {
    createItem(items)
  } else {
    createItem(search(items, inputSearch.value))
  }
})
cata.addEventListener('click', () => {
  container.textContent = ''
  if (cata.value === 'all') {
    createItem(items)
  } else {
    createItem(filterCategory(items, cata.value))
  }
})
let isSort = true


sortBtn.addEventListener('click', () => {
  container.textContent = ''
  if (isSort == true) {
    createItem(sorting(items))
    isSort = false
  } else {
    createItem(sorting(items).reverse())
    isSort = true
  }
})
