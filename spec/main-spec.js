import { add } from '../src/functions';
import { Date } from '../src/functions';

test('date object should build', () => {
  epect (Date(2019, 10, 28).toBe(Date.year))
})
test('should return age on mercury', () => {
    expect(agemercury(20)).toBe(47);
});

test('should return age on venus', () => {
    expect(ageVenus(15)).toBe(33);
});


test('adds 5 + 5 to equal 10', () => {
    expect(add(5, 5)).toBe(10);
});
