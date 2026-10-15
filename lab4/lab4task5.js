function sum(...args) {
    const summa = (total, value) => total + value;
    let res = args.reduce(summa);

    
    return res;
}
console.log(sum(1, 2, 3));