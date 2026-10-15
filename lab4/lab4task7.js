'use strict';

function ages(age) {
    const res = {};
    for(const ag in age){
        const person = age[ag];
        res[ag] = person.died - person.born;
    }
    return res;
}
const persons = {
  gandhi: { born: 1869, died: 1948 },
  Mydrui: { born: 983, died: 1054 },
};
console.log(ages(persons));
