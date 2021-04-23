import calculateBabysittingFee from '../src/calculateBabysittingFee';
import families from '../src/families';
describe('calculateBabysittingFee', () => {
  test('should exist', () => {
    expect(calculateBabysittingFee).toBeDefined();
  });

  test('returns a number', () => {
    const output = calculateBabysittingFee('6:00PM', '10:00PM', 'A');
      expect(typeof output).toEqual('number');
  });

  test('returns dollar value for hours worked at family rate that does not cross time blocks', () => {
    const familyCode = 'A';
    const startTime = "6:00PM";
    const endTime = "9:00PM";
    const expectedPayment = 3 * families[familyCode][5];
    expect(calculateBabysittingFee(startTime, endTime, familyCode)).toEqual(expectedPayment);
  });

  test('returns dollar value for only whole hours worked', () => {
    const familyCode = 'A';
    const startTime = "7:30PM";
    const endTime = "8:29PM";
    const expectedPayment = 0;
    expect(calculateBabysittingFee(startTime, endTime, familyCode)).toEqual(expectedPayment);
  });

  test('returns dollar value for hours worked across multiple time blocks', () => {
    const familyCode = 'B';
    const startTime = "6:00PM";
    const endTime = "11:30PM";
    const expectedPayment = 12 * 4 + 8;
    expect(calculateBabysittingFee(startTime, endTime, familyCode)).toEqual(expectedPayment);
  });

  test('returns correct value for hours worked overnight into next day', () => {
    const familyCode = 'C';
    const startTime = "9:45PM";
    const endTime = "4:00AM";
    const expectedPayment = 15 * 6;
    expect(calculateBabysittingFee(startTime, endTime, familyCode)).toEqual(expectedPayment);
  });
 
  test('returns dollar value for hours worked if all after midnight', () => {
    const familyCode = 'B';
    const startTime = "1:00AM";
    const endTime = "2:45AM";
    const expectedPayment = 16;
    expect(calculateBabysittingFee(startTime, endTime, familyCode)).toEqual(expectedPayment);
  });

  describe('error handling', () => {
    test('function throws error if missing any of the three required inputs', () => {
      expect.assertions(1);
      try {
        calculateBabysittingFee();
      } catch (e) {
        expect(e.message).toEqual('Error: 3 arguments required, start time, end time and family code letter');
      }
    });
  
    test('function throws error if startTime can not be parsed as appropriate format (h:mmA)', () => {
      expect.assertions(1);
      try {
        calculateBabysittingFee("asdf", "4:00PM", 'A');
      } catch (e) {
        expect(e.message).toEqual('Error: start time must be a time string of hours and minutes and ante or post meridiem');
      }
    });
  
    test('function throws error if endTime can not be parsed as appropriate format (h:mmA)', () => {
      expect.assertions(1);
      try {
        calculateBabysittingFee("6:30PM", 'asdf', 'B');
      } catch (e) {
        expect(e.message).toEqual('Error: end time must be a time string of hours and minutes and ante or post meridiem');
      }
    });
  
    test('function throws error if familyCode is not valid', () => {
      expect.assertions(1);
      try {
        calculateBabysittingFee("7:00PM", "2:00AM", 'z');
      } catch (e) {
        expect(e.message).toEqual('Error: must enter valid family code (A, B, or C)');
      }
    });
    
    test('function throws error if startTime is not within valid timerange', () => {
      expect.assertions(1);
      try {
        calculateBabysittingFee("3:00PM", "12:00AM", 'A');
      } catch (e) {
        expect(e.message).toEqual('Error: time range must be between 5:00PM and 4:00AM');
      }
    });

    test('function throws error if endTime is not within valid timerange', () => {
      expect.assertions(1);
      try {
        calculateBabysittingFee("6:00PM", "5:00AM", 'B');
      } catch (e) {
        expect(e.message).toEqual('Error: time range must be between 5:00PM and 4:00AM')
      }
    });
    test('function throws error if endTime is before startTime', () => {
      expect.assertions(1);
      try {
        calculateBabysittingFee('7:00PM', '6:00PM',  'A');
      } catch (e) {
        expect(e.message).toEqual('Error: endTime cannot be before startTime');
      }
    });
  });
});