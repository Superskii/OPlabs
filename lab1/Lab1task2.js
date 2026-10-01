'use strict';
function inc(a){
   return a += 1;
}
const obj = {n: 0};
obj.n = inc(obj.n);
console.dir(obj.n);
