// Check For Data
const checkFormData = (name, detail, price, category, image) => {
  let validItem = false;
  if (
    name === "" ||
    detail === "" ||
    category === "" ||
    price === "" ||
    image === ""
  ) {
    validItem = false;
  } else {
    validItem = true;
  }
  return validItem;
};

// Convert To Object
const convertItemToObject = (id, name, detail, category, price, image) => {
  return {
    id,
    name,
    detail,
    category,
    price,
    image,
  };
};

//logic for edit product
const editProduct = (i, editProduct) => {
  return products.map((product) => {
    if (product.id === i) {
      return { ...editProduct };
    } else {
      return product;
    }
  });
};

if (typeof module !== "undefined") {
  module.exports = {
    checkFormData,
    convertItemToObject,
    editProduct,
  };
}
