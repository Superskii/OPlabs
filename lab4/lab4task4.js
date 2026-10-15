function sum(...args) {
    let res = 0;
    if (args.length === 0) { return 0; }
    else {
        do { res += args.pop() }
        while (args.length > 0);
        return res;
    };
}
console.log(sum());