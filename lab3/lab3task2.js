'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
function random(min, max){
    if(max === undefined){
        max = min;
        min = 0;
    }
    let round = max - min;
    return Math.floor(Math.random() * round) + min;
}
function generateKey(length, character){
    let key = '';
    while(key.length <= length){
        key += character[random(character.length)].toString();
    }
    return key;
}
const generated = generateKey(16, characters);
console.log(generated);

