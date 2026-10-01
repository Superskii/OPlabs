'use strict';

const phonebook = new Map([
  ['Marcus', '+380445554433'],
  ['Timur', '+380661874632'],
  ["Олександр", "+380671234567"],
  ["Марія", "+380509876543"],
  ["Андрій", "+380931112233"],
  ["Олена", "+380634445566"],
  ["Дмитро", "+380977778899"],
]);


function findPhoneByName(name){
    if(phonebook.has(name)){
        return phonebook.get(name);
}
else {
    return "Такого контакту немає";
}
}
console.log(findPhoneByName("Олена"));