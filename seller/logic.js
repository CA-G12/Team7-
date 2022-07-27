let products = [];

if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify(products));
}

function getFromLocal() {
  return JSON.parse(localStorage.getItem("products"));
}

function updateProduct(newProducts) {
  localStorage.setItem("products", JSON.stringify(newProducts));
}

function createProduct(_name, price, description, imgLink, category) {
  let id = parseInt(Math.random() * 1000000);
  let product = {
    _name,
    price,
    description,
    imgLink,
    category,
    id,
  };

  addProduct(product);
}

function addProduct(product) {
  let arrOfProducts = getFromLocal();

  arrOfProducts.push(product);
  updateProduct(arrOfProducts);
}

function editProduct(id, editedKeys) {
  let arrOfProducts = getFromLocal();

  for (let i = 0; i < arrOfProducts.length; i++) {
    if (arrOfProducts[i].id === id) {
      for (let key in editedKeys) {
        arrOfProducts[i][key] = editedKeys[key];
      }
    }
  }
  updateProduct(arrOfProducts);
}

function deleteProduct(id) {
  let arrOfProducts = getFromLocal();

  for (let i = 0; i < arrOfProducts.length; i++) {
    if (arrOfProducts[i].id === id) {
      arrOfProducts.splice(i, 1);
    }
  }
  updateProduct(arrOfProducts);
}

/*
let _name = document.getElementById("_name");
let price = document.getElementById("price");
let description = document.getElementById("description");
let imgLink = document.getElementById("imgLink");
let category = document.getElementById("category");
let id = document.getElementById("id");


document.getElementById("add").addEventListener("click", () => {
  createProduct(
    _name.value,
    price.value,
    description.value,
    imgLink.value,
    category.value
  );
});

document.getElementById("delete").addEventListener("click", () => {
  deleteProduct(359457);
});

document.getElementById("edit").addEventListener("click", () => {
  
  editProduct(853347);
});
*/
