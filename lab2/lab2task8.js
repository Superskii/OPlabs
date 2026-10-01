'use strict';
let user = {};
function createUser(name, city){
    user.name = name;
    user.city = city;
    return user;
}
console.dir(createUser("Bluege", "Kyiv"));