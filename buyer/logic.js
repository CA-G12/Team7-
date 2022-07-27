function search(array, value) {
  let newArr = array.filter((item) =>
    item.name.toLowerCase().trim().includes(value.toLowerCase().trim()),
  )
  return newArr
}
