import calculateBabysittingFee from './src/calculateBabysittingFee';
const args = process.argv.slice(2);
try {
  const payment = calculateBabysittingFee(...args);
  console.log(`Babysitter is owed: $${payment}`);
} catch (e) {
  console.error(e);
}