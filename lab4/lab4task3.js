function sum(...args) {
    let res = 0;
    while (args.length > 0) {
        res += args.pop();
    }
    return res;
}
console.log(sum(1, 2, 3));