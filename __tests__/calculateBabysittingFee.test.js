import { expect, test } from "@jest/globals"
import calculateBabysittingFee from '../src/calculateBabysittingFee'
describe('calculateBabysittingFee', () => {
  test('should exist', () => {
    expect(calculateBabysittingFee).toBeDefined();
  });
});