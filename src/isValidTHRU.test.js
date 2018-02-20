import { isValidTHRU } from './helpers';

test('Checks if 12/22  is correct THRU code', function() {
  expect(isValidTHRU('12/22')).toBeTruthy();
});

test('Checks if 12/22  is not correct THRU code', function() {
  expect(isValidTHRU('13/22')).toBeFalsy();
});

test('Checks if 1299/22  is not correct THRU code', function() {
  expect(isValidTHRU('1299/22')).toBeFalsy();
});

test('Checks if 1222  is not correct THRU code', function() {
  expect(isValidTHRU('1222')).toBeFalsy();
});