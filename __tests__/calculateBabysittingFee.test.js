import { expect } from '@jest/globals';
import calculateBabysittingFee from '../src/calculateBabysittingFee'
describe('calculateBabysittingFee', () => {
  test('should exist', () => {
    expect(calculateBabysittingFee).toBeDefined();
  });

  test('returns a number', () => {
    const output = calculateBabysittingFee('6:00PM', '10:00PM', 'buzz');
    expect(typeof output).toEqual('number');
  });

  test('function throws error if missing any of the three required inputs', () => {
    expect.assertions(1);
    try {
      calculateBabysittingFee();
    } catch (e) {
      expect(e.message).toEqual('Error: 3 arguments required, start time, end time and family code letter');
    }
  });

  test('function throws error if startTime can not be parsed as appropriate format (hh:mmA)', () => {
    expect.assertions(1);
    try {
      calculateBabysittingFee("asdf", "4:00PM", 'A');
    } catch (e) {
      expect(e.message).toEqual('Error: start time must be a time string of hours and minutes and ante or post meridiem');
    }
  });

  test('function throws error if endTime can not be parsed as appropriate format (hh:mmA)', () => {
    expect.assertions(1);
    try {
      calculateBabysittingFee("6:30PM", 'asdf', 'B');
    } catch (e) {
      expect(e.message).toEqual('Error: end time must be a time string of hours and minutes and ante or post meridiem');
    }
  });
});