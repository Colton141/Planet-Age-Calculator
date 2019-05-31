import { add } from '../src/functions';
import { Date } from '../src/functions';

test('date object should build', () => {
  epect (Date(2019, 10, 28).toBe(Date.year))
})
test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('adds 5 + 5 to equal 10', () => {
    expect(add(5, 5)).toBe(10);
});
