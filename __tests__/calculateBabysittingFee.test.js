import calculateBabysittingFee from '../src/calculateBabysittingFee'
describe('calculateBabysittingFee', () => {
  test('should exist', () => {
    expect(calculateBabysittingFee).toBeDefined();
  });

  test('returns a number', () => {
    const output = calculateBabysittingFee();
    expect(typeof output).toEqual('number');
  })
});