const MY_CAR = {
    wheels: 4,
    cylinders: 4,
    size: 2.2
};

function main(myCar) {
    //Only change below
    const { cylinders, size } = MY_CAR;
    //Only change above
    return {cylinders, size}

}
console.log(main(MY_CAR));
module.exports = main;