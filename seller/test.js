const {checkFormData,convertItemToObject} = require('./logic')

// Test  Check Form Data
describe("Test  Check Form Data", () => {
    test("Check Form Data is Valid Or NotValid", () => {
      expect(checkFormData("name", "price", "category", "image")).toBeTruthy();
      expect(checkFormData("name", "price", "category", "")).toBeFalsy();
      expect(checkFormData("name", "price", "", "image")).toBeFalsy();
      expect(checkFormData("name", "", "category", "image")).toBeFalsy();
      expect(checkFormData("", "price", "category", "image")).toBeFalsy();
      expect(checkFormData("", "", "", "")).toBeFalsy();
    });
  });