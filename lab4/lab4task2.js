function sum(...args) {
    let res = 0;
    for (const arg of args) {
        res += arg;
    }
    return res;
}
console.log(sum(1, 2, 3));