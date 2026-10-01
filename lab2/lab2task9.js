'use strict';
let information = [
    {name: 'Marcus Aurelius', phone: '+380445554433'},
    {name: 'Petro', phone: '+380123145141'},
    {name: 'Tarar Shevchenko', phone: '+3801212313'},
    {name: 'Yuliy Tzezar', phone: '+380113131414'},
    {name: 'Mykhailo Gryshevskuy', phone: '+38013344514'},
    {name: 'Tymon Kolasinsky', phone: '+380454353'},
    {name: 'Magnus Carlsen', phone: '+3806546545456'
    }
]
function findPhoneByName(name1){
    try{
    let Phone = '';
    for(let i = 0; i < information.length; i++){
        if(information[i].name == name1){
            Phone += information[i].phone;
        }
        
    }
    return Phone;
}
catch(error){
    console.log("Error")
}
}
console.log(findPhoneByName('Marcus Aurelius'));
console.log(findPhoneByName('Petro'));
console.log(findPhoneByName('Tarar Shevchenko'));
console.log(findPhoneByName('Yuliy Tzezar'));
console.log(findPhoneByName('Mykhailo Gryshevskuy'));
console.log(findPhoneByName('Tymon Kolasinsky'));
console.log(findPhoneByName('Magnus Carlsen'));
