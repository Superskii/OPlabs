function removeElements(array, ...items) {
    for (const item of items) {
        if (array.indexOf(item) >= 0) array.splice(array.indexOf(item), 1);
    }
    return array;
}
const array = [1, 2, 3, 4, 5, 6, 7];
removeElements(array, 5, 1, 6);
console.log(array);
// Результат: [2, 3, 4, 7]