const { checkFormData, convertItemToObject } = require("./logic.js");

describe("Test convert data product to object", () => {
  test("Product should be object", () => {
    let linkImg = "https://greenbackend.com/static/media/gbe-hero.54f456ed.png";
    let expected = {
      id: 10,
      name: "name",
      price: 1111,
      category: "cats",
      image: linkImg,
    };
    expect(convertItemToObject(10, "name", 1111, "cats", linkImg)).toEqual(
      expected
    );
  });
});
