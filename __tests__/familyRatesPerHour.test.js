import familyRatesPerHour from '../src/familyRatesPerHour';
describe('familyRates', () => {
  test('should have correct number of rates based on time blocks for family A,B, and C', () => {
    expect(Object.keys(familyRatesPerHour.A).length).toEqual(11);
    expect(Object.keys(familyRatesPerHour.B).length).toEqual(11);
    expect(Object.keys(familyRatesPerHour.C).length).toEqual(11);
  });

  test('each family start time should have a numerical rate', () => {
    Object.keys(familyRatesPerHour.A).forEach(startTime => {
      expect(typeof familyRatesPerHour.A[startTime]).toEqual('number');
    });
    Object.keys(familyRatesPerHour.B).forEach(startTime => {
      expect(typeof familyRatesPerHour.B[startTime]).toEqual('number');
    });
    Object.keys(familyRatesPerHour.C).forEach(startTime => {
      expect(typeof familyRatesPerHour.C[startTime]).toEqual('number');
    });
  });
});