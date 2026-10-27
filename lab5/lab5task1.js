'use strict';

const seq = (f) => (g) => {
    if(typeof g === 'number') return f(g);
        return seq((x) => f(g(x)));
    
}
const a1 = seq(x => x + 7)(x => x * 2)(5);
const a2 = seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7)


console.log(a1);
console.log(a2);