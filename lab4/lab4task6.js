'use strict';

function max(args) {
    let maximum;
    for (const arg of args) {

        for (const ar of arg) {
    
            maximum = Math.max(ar);
        }
    }
    return maximum;
}
const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m); 