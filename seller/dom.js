// NavBar
const btnSellerNavBar = document.querySelector(".btn-seller");
const btnBuyerNavBar = document.querySelector(".btn-buyer");
// let searchInput = document.getElementById("search-input");

// Main Container
const renderList = document.querySelector("#btnList");
const renderGrid = document.querySelector("#btnGrid");

// Add Product

// Title
const productTitle = document.getElementById("add-product-title");

// Input
const productName = document.getElementById("name");
const productDetail = document.getElementById("detail");
const productCategory = document.getElementById("category");
const productPrice = document.getElementById("product-price");
const productImageUrl = document.getElementById("image-url");

// Bumbit Button
const btnSubmitAddUpdatProduct = document.getElementById(
  "btn-submit-form-product"
);

// New Variables
let createProduct = true;
let indexProductId;
let idProduct;
let productsList;

// Go To Buyer's Page
btnBuyerNavBar.addEventListener("click", () => {
  window.location.href = "../buyer/buyer.html";
});

// Reload the seller's page
window.addEventListener("load", () => {
  btnSellerNavBar.classList.add("btn-active");
  productsList = getProducts("products");
  renderProductSellerPage(productsList);
});

// Add Product
btnSubmitAddUpdatProduct.addEventListener("click", () =>
  submitAddUpdatProductToLocalstorage()
);

// Add & Update Produnt on LocalStorage
const submitAddUpdatProductToLocalstorage = () => {
  if (
    checkFormData(
      productName.value,
      productDetail.value,
      productCategory.value,
      productPrice.value,
      productImageUrl.value
    )
  ) {
    let id = Math.floor(Math.random() * 999) && idProduct;
    let newProductObject = convertItemToObject(
      id,
      productName.value,
      productDetail.value,
      productCategory.value,
      productPrice.value,
      productImageUrl.value
    );
    if (createProduct) {
      productsList.push(newProductObject);
    } else {
      productsList[indexProductId] = newProductObject;
    }
    postProducts("products", productsList);
    let products = getProducts("products");
    cleanInputForm();
    renderProductSellerPage(products);
  } else {
    alert("Input is not Valid");
  }
};

// Insert To LocalStorage
function postProducts(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
  getProducts(key);
}

// Return data from
function getProducts(key) {
  data =
    localStorage.getItem(key) == undefined
      ? []
      : JSON.parse(localStorage.getItem(key));
  return data;
}

// Clean Input Form
const cleanInputForm = () => {
  productName.value = "";
  productDetail.value = "";
  productCategory.value = "";
  productPrice.value = "";
  productImageUrl.value = "";
};

// Return [true,false] =>> Has Product
function hasProductOnLocalStorage(productList) {
  if (productsList.length == 0 || productsList === undefined) {
    return false;
  }
  return true;
}

// Render Products on Main Section
function renderProductSellerPage(productList) {
  if (hasProductOnLocalStorage(productList)) {
    let listProducts = document.querySelector(".product-list");
    listProducts.innerHTML = "";

    productList.forEach((product, index) => {
      let list = document.createElement("li");
      let wrapImg = document.createElement("div");
      wrapImg.className = "wrap-img";

      let infoProduct = document.createElement("div");
      infoProduct.className = "info-product";

      let imgProduct = document.createElement("img");
      imgProduct.className = "img";
      imgProduct.setAttribute("src", product.image);

      let category = document.createElement("div");
      category.innerText = product.category;
      category.className = "category";

      let edit = document.createElement("div");
      let iconForEdit = document.createElement("i");
      edit.setAttribute("data-index", index);
      edit.className = "edit";

      // Edit Product from LocalStorage
      edit.addEventListener("click", () => editProductDom(product, index));
      iconForEdit.className = "fa fa-pencil";
      edit.appendChild(iconForEdit);
      wrapImg.appendChild(edit);

      let nameAndPrice = document.createElement("div");
      nameAndPrice.className = "name-price";

      let removeItem = document.createElement("div");
      removeItem.setAttribute("data-index", index);
      removeItem.className = "remove-item";

      // Delete product From LocalStorage
      let iconForAdd = document.createElement("i");
      removeItem.addEventListener("click", () => deleteProductDom(index));
      iconForAdd.className = "far fa-trash-alt";

      let name = document.createElement("h3");
      name.innerText = product.name;
      name.className = "name";
      let price = document.createElement("p");
      price.innerText = `$${product.price}`;
      price.className = "price";

      removeItem.appendChild(iconForAdd);
      nameAndPrice.appendChild(name);
      nameAndPrice.appendChild(price);
      wrapImg.appendChild(category);
      wrapImg.appendChild(imgProduct);
      infoProduct.appendChild(nameAndPrice);
      infoProduct.appendChild(removeItem);
      list.appendChild(wrapImg);
      list.appendChild(infoProduct);
      listProducts.insertBefore(list, listProducts.childNodes[0]);
    });
  }
}

// Delete Product From LocalStorage >>> [ indexProduct => id ]
function deleteProductDom(indexProduct) {
  productsList = getProducts("products");
  productsList.splice(indexProduct, 1);
  postProducts("products", productsList);
  let products = getProducts("products");
  renderProductSellerPage(products);
}

// Edit Product From LocalStorage
function editProductDom(
  { id, name, detail, category, price, image },
  indexProduct
) {
  createProduct = false;

  btnSubmitAddUpdatProduct.innerHTML = "Update Product";
  productTitle.innerHTML = "Update your product";

  idProduct = id;
  productName.value = name;
  productDetail.value = detail;
  productCategory.value = category;
  productPrice.value = price;
  productImageUrl.value = image;
  indexProductId = indexProduct;
}
