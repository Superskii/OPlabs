'use strict';
function range(start, end){
    let masyv = [];
    let len = Math.abs(start - end);
    let Vyvid = "";
    if(start > end){    
        for(let i = start; i >= end; i--){   
            masyv.push(i);
        }
    }  
    
    else if(start < end){       
        for(let i = start; i <= end; i++){    
            masyv.push(i);
        }
    }
    else{
        masyv[0] = start;
    }
    for(let x of masyv){
        Vyvid += x + " ";
    }
    return Vyvid;
}
console.dir(range(15, 30));
console.dir(range(30, 15));
console.dir(range(15, 15));