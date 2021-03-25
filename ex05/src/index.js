let foo=12, boo=45;
function main(foo,boo){
    // Only change below
    [foo,boo]=[boo,foo];
    // Only change above
    return{foo, boo};
}
console.log(main(foo,boo));
module.exports=main;
