const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    "use strict";
    // Only change below
        const [,,...array2] = list;
    // Only change above
    return array2;
}
console.log(removeFirstTwo(array1));
module.exports = removeFirstTwo;