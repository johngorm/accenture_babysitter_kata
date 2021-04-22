import { expect } from '@jest/globals';
import calculateBabysittingFee from '../src/calculateBabysittingFee'
describe('calculateBabysittingFee', () => {
  test('should exist', () => {
    expect(calculateBabysittingFee).toBeDefined();
  });

  test('returns a number', () => {
    const output = calculateBabysittingFee('foo', 'fiz', 'buzz');
    expect(typeof output).toEqual('number');
  });

  test('function requires 3 string parameters', () => {
    expect.assertions(1);
    try {
      calculateBabysittingFee();
    } catch (e) {
      expect(e.message).toEqual('Error: 3 arguments required, start time, end time and family code letter');
    }
  })
});