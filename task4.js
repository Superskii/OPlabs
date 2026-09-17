'use strict';
function check(Elements, Types){
for(let i = 0; i < Elements.length; i++){
    if(!Elements.isArray){
    let Type = typeof Elements[i];
    if(Type === "number"){
        Types.numbers = Types.numbers + 1;
    }
    else if(Type === "string"){
        Types.strings = Types.strings + 1;
    }
    else if(Type === "boolean"){
        Types.booleans = Types.booleans + 1;
    }
    
    }
    
    else {
        console.log("Помилка");
    }
    
    }
    console.dir(Types);
    
}
function Types(Elements, Types){
for(let i = 0; i < Elements.length; i++){
    if(!Elements.isArray){
    let Type = typeof Elements[i];
    if(Type === "number"){
        Types.numbers = 0;
    }
    else if(Type === "string"){
        Types.strings = 0;
    }
    else if(Type === "boolean"){
        Types.booleans = 0;
    }
    }
    else {
        console.log("Помилка");
    }
    }
}
let Collection = {};
let Collection2 = {};
let Masyv2 = [true, false, true];
let Masyv = [true, 'hello', 5,
    12, -200, false, 
    false, 'world',
    'word', true, 28,
    'you', 'Cube', 10,
    15, 13, 50, 2738,
    true, false

];
Types(Masyv, Collection);
Types(Masyv2, Collection2);
check(Masyv, Collection);
check(Masyv2, Collection2);