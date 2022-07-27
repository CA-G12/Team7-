function search(array, value) {
  let newArr = array.filter((item) => item.name.includes(value))
  return newArr
}
