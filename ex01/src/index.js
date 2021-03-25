const array1 =['MON', 'TUE', 'WED', 'THU','FRI'];
function main(arr){
    // ONly change below
    let array2=[...arr] // Change this
    // ONly change above
    return array2;
}
console.log(main(array1));
module.exports=main;