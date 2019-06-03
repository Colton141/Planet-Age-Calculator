import { Age } from '../src/functions';

describe('Age', function() {
  test('output age on earth from constructor', function() {
    let expectedAge = 21;
    let inputAge = new Age(1998);
    expect(expectedAge).toEqual(inputAge.earthAge);
  });
});

describe('Age', function() {
  test('output age on Mercury from constructor', function() {
    let expectedAge = 87;
    let inputAge = new Age(1998);
    expect(expectedAge).toEqual(inputAge.mercuryAge);
  });
});

describe('Age', function() {
  test('output age on venus from constructor', function() {
    let expectedAge = 32;
    let inputAge = new Age(1998);
    expect(expectedAge).toEqual(inputAge.venusAge);
  });
});

describe('Age', function() {
  test('output age on mars from constructor', function() {
    let expectedAge = 11;
    let inputAge = new Age(1998);
    expect(expectedAge).toEqual(inputAge.marsAge);
  });
});

describe('Age', function() {
  test('output age on jupiter from constructor', function() {
    let expectedAge = 1;
    let inputAge = new Age(1998);
    expect(expectedAge).toEqual(inputAge.jupiterAge);
  });
});

describe('Age', function() {
  test('output the number of yesrs left on mercury for a male', function() {
    let expectedYear = 238;
    let inputAge = new Age(1998);
    expect(expectedYear).toEqual(inputAge.maleYearsMercury);
  });
});

describe('Age', function() {
  test('output the number of yesrs left on mercury for a female', function() {
    let expectedYear = 258;
    let inputAge = new Age(1998);
    expect(expectedYear).toEqual(inputAge.femaleYearsMercury);
  });
});

describe('Age', function() {
  test('output the number of yesrs left on venus for a male', function() {
    let expectedYear = 89;
    let inputAge = new Age(1998);
    expect(expectedYear).toEqual(inputAge.maleYearsVenus);
  });
});

describe('Age', function() {
  test('output the number of yesrs left on venus for a female', function() {
    let expectedYear = 97;
    let inputAge = new Age(1998);
    expect(expectedYear).toEqual(inputAge.femaleYearsVenus);
  });
});

describe('Age', function() {
  test('output the number of yesrs left on Mars for a male', function() {
    let expectedYear = 30;
    let inputAge = new Age(1998);
    expect(expectedYear).toEqual(inputAge.maleYearMars);
  });
});

describe('Age', function() {
  test('output the number of yesrs left on Mars for a female', function() {
    let expectedYear = 33;
    let inputAge = new Age(1998);
    expect(expectedYear).toEqual(inputAge.femaleYearMars);
  });
});

describe('Age', function() {
  test('output the number of yesrs left on Jupiter for a male', function() {
    let expectedYear = 5;
    let inputAge = new Age(1998);
    expect(expectedYear).toEqual(inputAge.maleYearJupiter);
  });
});

describe('Age', function() {
  test('output the number of yesrs left on Jupiter for a female', function() {
    let expectedYear = 6;
    let inputAge = new Age(1998);
    expect(expectedYear).toEqual(inputAge.femaleYearJupiter);
  });
});
