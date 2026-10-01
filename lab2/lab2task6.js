'use strict';
function average(a, b){
    return (a + b) / 2;
}
function square(a){
    return a * a;
}
function cube(a){
    return a**3;
}
function calculate(){
    let Array = [];
    let res;
for(let i = 0; i < 10; i++){
    res = average(square(i), cube(i))
    Array.push(res);
}
console.dir(Array);
}
calculate();