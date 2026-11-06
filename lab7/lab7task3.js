function unique(items) {
    const array1 = [];
    for (const item of items) {
        if (!array1.includes(item)) {
            array1.push(item);
        }
    }
    return array1;
}
const result = unique([2, 1, 1, 3, 2]);
console.log(JSON.stringify(result));
// Результат: [2, 1, 3]