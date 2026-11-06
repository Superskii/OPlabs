function removeElement(array, item) {
   if (array.indexOf(item) >= 0) array.splice(array.indexOf(item), 1);
   return array;
}
const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]