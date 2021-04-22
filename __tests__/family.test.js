import familyRateTimeBlocks from '../src/families';
describe('familyRates', () => {
  test('should have correct number of rates based on time blocks for family A,B, and C', () => {
    expect(Object.keys(familyRateTimeBlocks.A).length).toEqual(2);
    expect(Object.keys(familyRateTimeBlocks.B).length).toEqual(3);
    expect(Object.keys(familyRateTimeBlocks.C).length).toEqual(2);
  });

  test('each family start time should have a numerical rate', () => {
    Object.keys(familyRateTimeBlocks.A).forEach(startTime => {
      expect(typeof familyRateTimeBlocks.A[startTime]).toEqual('number');
    });
    Object.keys(familyRateTimeBlocks.B).forEach(startTime => {
      expect(typeof familyRateTimeBlocks.B[startTime]).toEqual('number');
    });
    Object.keys(familyRateTimeBlocks.C).forEach(startTime => {
      expect(typeof familyRateTimeBlocks.C[startTime]).toEqual('number');
    });
  });
});