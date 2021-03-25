const BAKING_TEMPERATURES = {
    cake: { low: 180, high: 250 },
    bread: { low: 150, high: 220 },
    pie: { low: 200, high: 230 }
};

function main(baking) {
    //Only change below
    const { bread: { low: lowBread, high: highBread } } = BAKING_TEMPERATURES;
    //Only change above
    return { lowBread, highBread };

}
console.log(main(BAKING_TEMPERATURES));
module.exports = main;