import { test, expect } from '@playwright/test';
import cal1 from './calculator.js';

test('calculator add and subtract', async () => {
  expect(cal1.add(6, 9)).toBe(15);
  expect(cal1.subtract(22, 87)).toBe(-65);
});
