function search(array, value) {
  let newArr = array.filter((item) =>
    item.name.toLowerCase().trim().includes(value.toLowerCase().trim()),
  )
  return newArr
}
function filterCategory(array, value) {
  return array.filter((item) => item.category === value)
}
function sorting(array) {
  if(array.length>1)
{  return array.sort((a, b) => a.price - b.price)
}}
module.exports={search,filterCategory,sorting}
