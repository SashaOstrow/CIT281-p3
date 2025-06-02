function coinCombo(amount){
    //defining each charater with its value in an array using const
    const coinValues = [
    {name: 'dollars', value: 100},
    {name: 'halves', value: 50},
    {name: 'quarters', value: 25},
    {name: 'dimes', value: 10},
    {name: 'nickels', value: 5},
    {name: 'pennies', value: 1},
    ];

    //empty array to hold the array of defininations
    const combinations = [];
    //for let loop that takes the inputted amount and divide it by 100 to find how many pennies can be counted
    //"d" stands for dollars
    for (let d = 0; d <= Math.floor(amount / 100); d++){
    //for let loop that takes the inputted amount and uses the left over from dollars to find how how many halves to count
    //"h" stands for halves
    for (let h = 0; h <= Math.floor(amount / 100) / 50; h++){
    //for let loop that takes the inputted amount and uses the left over from dollar and halves to find how many quarters to count
    // "q" stands for quarters
    for (let q = 0; q <= Math.floor((amount - d * 100 - h * 50) / 25); q++){
    //for let loop that tkaes the inputted amount and uses the left over from dollar, halves and quarts to find how many dimes to count
    //"di" stands for dimes
    for(let di = 0; di <= Math.floor((amount - d * 100 - h * 50 - q *25)/ 10); di++){
    //for let loop that tkaes the inputted amount and uses the left over from dollar, halves, quarts and dimes to find how many nickels to count
    // "n" stands for nickels
    for (let n = 0; n <= Math.floor((amount - d * 100 - h * 50 - q * 25 - di * 10) / 5); n++){
    //accounting for any left over amounts by counting the pennies
    //"p" stands for pennies
    let p = amount - d * 100 - h * 50 - q * 25 - di * 10 - n * 5;

    //keeps track of the different kind of combinations of change you can do through the number you inputted
    combinations.push({
        pennies: p,
        nickels: n,
        dimes: di,
        quartners: q,
        halves: h, 
        dollars: d
    });
                    }
                }
            }
        }
    }
    


    return {
        amount: amount,
        combinations: combinations,
        totalCombiantions: combinations.length
    };


    }

function coinValue(coinCounts){
    //array list of change
    const { pennies = 0, nickels = 0, dimes = 0, quarters = 0, halves = 0, dollars = 0} = coinCounts;

    //do the math to find what the output needs to be
    const totalCents = 
        pennies * 1 +
        nickels * 5 +
        dimes * 10 +
        quarters * 25 +
        halves * 50 +
        dollars * 100;



    return {
        coins: {pennies, nickels, dimes, quarters, halves, dollars},
        totalCents: totalCents,
        totalDollars: Number ((totalCents / 100).toFixed(2))
    };
}
    


// ----------------------------
// Manual Test Cases
// ----------------------------
if (require.main === module) {

    console.log('\n===== Manual Tests for coinCombo() =====');
    const testCombo1 = coinCombo(5);
    console.log(`Test 1 - coinCombo(5)`);
    console.log(`Expected combinations > 0, Actual: ${testCombo1.totalCombinations}`);
    console.log('Sample:', testCombo1.combinations.slice(0, 3));
  
    const testCombo2 = coinCombo(0);
    console.log(`\nTest 2 - coinCombo(0)`);
    console.log(`Expected: 1 combination with all zeros`);
    console.log('Actual:', testCombo2.combinations);
  
    const testCombo3 = coinCombo(-5);
    console.log(`\nTest 3 - coinCombo(-5)`);
    console.log(`Expected: 0 combinations`);
    console.log('Actual:', testCombo3.totalCombinations);
  
    console.log('\n===== Manual Tests for coinValue() =====');
    const testValue1 = coinValue({ pennies: 4, nickels: 1, dimes: 2, quarters: 1, halves: 0, dollars: 1 });
    console.log(`Test 1 - coinValue({4p,1n,2d,1q,0h,1$})`);
    console.log(`Expected cents: 4 + 5 + 20 + 25 + 0 + 100 = 154`);
    console.log('Actual:', testValue1.totalCents, `($${testValue1.totalDollars})`);
  
    const testValue2 = coinValue({});
    console.log(`\nTest 2 - coinValue({})`);
    console.log(`Expected: 0 cents`);
    console.log('Actual:', testValue2.totalCents, `($${testValue2.totalDollars})`);
  
    const testValue3 = coinValue({ pennies: '10', nickels: '2', dollars: '1' });
    console.log(`\nTest 3 - coinValue(string inputs)`);
    console.log(`Expected: 10 + 10 + 100 = 120`);
    console.log('Actual:', testValue3.totalCents, `($${testValue3.totalDollars})`);
  }

  module.exports = {
    coinCombo,
    coinValue
  };
  
