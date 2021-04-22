import calculateBabysittingFee from '../src/calculateBabysittingFee'
describe('calculateBabysittingFee', () => {
  test('should exist', () => {
    expect(calculateBabysittingFee).toBeDefined();
  });

  test('returns a number', () => {
    const output = calculateBabysittingFee('6:00PM', 'fiz', 'buzz');
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

  test('functions throws error if startTime can not be parsed as appropriate format (HH:MMAM/PM)', () => {
    expect.assertions(1);
    try {
      calculateBabysittingFee("asdf", "4:00PM", 'A');
    } catch (e) {
      expect(e.message).toEqual('Error: start time must be a time string of hours and minutes and ante or post meridiem')
    }
  });
});