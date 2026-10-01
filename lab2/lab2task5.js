'use strict';
function rangeOdd(start, end){
    let masyv = [];
    let len = Math.abs(start - end);
    let Vyvid = "";
    if(start > end){
        if(start % 2 == 1) {
        for(let i = start; i >= end; i -= 2){   
            masyv.push(i);
        }
    }
        else{
            start = start - 1;
            for(let i = start; i >= end; i -= 2){   
            masyv.push(i);
        }
    }  
}
    
    else if(start < end){     
        if(start % 2 == 1){
        for(let i = start; i <= end; i += 2){    
            masyv.push(i);
        }
    }
    else {
        start = start + 1
            for(let i = start; i <= end; i += 2){    
                masyv.push(i);
    }
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
console.dir(rangeOdd(15, 30));
console.dir(rangeOdd(30, 15));