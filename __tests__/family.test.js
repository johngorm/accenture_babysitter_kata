import { expect } from '@jest/globals';
import familyRates from '../src/families';
describe('familyRates', () => {
  test('should return family rates for family A,B, and C', () => {
    expect(familyRates.A.length).toEqual(2);
    expect(familyRates.B.length).toEqual(3);
    expect(familyRates.C.length).toEqual(2);
  });
})