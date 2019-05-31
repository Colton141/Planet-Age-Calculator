import { add } from '../src/functions';
import { Date } from '../src/functions';
import { ageMars } from '../src/functions';
import { ageVenus } from '../src/functions';
import { agePluto } from '../src/functions';
import { ageSaturn } from '../src/functions';
import { ageUranus } from '../src/functions';
import { ageMercury } from '../src/functions';
import { ageNeptune } from '../src/functions';
import { ageJupiter } from '../src/functions';


test('date object should build', () => {
  epect (Date(2019, 10, 28).toBe(Date.year))
})
test('should return age on mercury', () => {
    expect(ageMercury(20)).toBe(47);
});

test('should return age on venus', () => {
    expect(ageVenus(15)).toBe(33);
});

test('should return age on mars x', () => {
    expect(ageMars(15)).toBe(33);
});

test('should return age on mars x', () => {
    expect(ageSaturn(15)).toBe(33);
});

test('should return age on mars x', () => {
    expect(ageUranus(15)).toBe(33);
});

test('should return age on mars x', () => {
    expect(ageJupiter(15)).toBe(33);
});

test('should return age on mars x', () => {
    expect(agePluto(15)).toBe(33);
});

test('should return age on mars x', () => {
    expect(ageNeptune(15)).toBe(33);
});

test('adds 5 + 5 to equal 10', () => {
    expect(add(5, 5)).toBe(10);
});
