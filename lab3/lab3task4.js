"use strict";

function ifaceCheck(Checking){
    let names = [];
    const ckey = Object.keys(Checking);
    for(let i = 0; i < ckey.length; i++){
      ckey[i] = ckey[i].toString();

      names.push([ckey[i], Checking[ckey[i]].length]); 
    }
    console.log(JSON.stringify(names));

}
let iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3: function(x, y, z) {
    return [x, y, z];
  },
};
ifaceCheck(iface);