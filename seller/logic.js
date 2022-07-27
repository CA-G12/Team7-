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

if (typeof module !== "undefined") {
  module.exports = {
    checkFormData,
    convertItemToObject,
  };
}
