function difference(array1, array2) {
    const res = [];
    for (const arr of array1) {
        if (!array2.includes(arr)) {
            res.push(arr);
        }
    }
    return res;
}
const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const result = difference(array1, array2);
console.log(result);
// Результат: [7, -2, 5]