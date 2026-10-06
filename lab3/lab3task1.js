'use strict';

function random(min, max){
    if(max === undefined){
        max = min;
        min = 0;
    }
    let round = max + 1 - min;
    return Math.floor(Math.random() * round) + min;
}
console.log(random(10));
console.log(random(-2, 5));
console.log(random(15, 242));