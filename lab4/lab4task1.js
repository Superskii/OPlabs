const sum = (...args) => {
    let summa = 0;
    for (let i = 0; i < args.length; i++) {
        summa += args[i];
    }
    return summa;
}
const res = sum(1, 2, 3);
console.log(res);