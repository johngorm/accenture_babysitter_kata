import calculateBabysittingFee from './calculateBabysittingFee.mjs';
const args = process.argv.slice(2);
const payment = calculateBabysittingFee(...args);
console.log(`Babysitter is owed: ${payment}`);

