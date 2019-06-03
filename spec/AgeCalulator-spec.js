import { Age } from '../src/functions';

describe('Age', function() {
  it('output age on earth from constructor', function() {
    let expectedAge = 21;
    let inputAge = new Age(1998);
    expect(expectedAge).toEqual(inputAge.ageOnEarth);
  });
});

describe('Age', function() {
  it('output age on Mercury from constructor', function() {
    let expectedAge = 87;
    let inputAge = new Age(1998);
    expect(expectedAge).toEqual(inputAge.ageOnMercury);
  });
});

describe('Age', function() {
  it('output age on venus from constructor', function() {
    let expectedAge = 32;
    let inputAge = new Age(1998);
    expect(expectedAge).toEqual(inputAge.ageOnVenus);
  });
});

describe('Age', function() {
  it('output age on mars from constructor', function() {
    let expectedAge = 11;
    let inputAge = new Age(1998);
    expect(expectedAge).toEqual(inputAge.ageOnMars);
  });
});

describe('Age', function() {
  it('output age on jupiter from constructor', function() {
    let expectedAge = 1;
    let inputAge = new Age(1998);
    expect(expectedAge).toEqual(inputAge.ageOnJupiter);
  });
});

describe('Age', function() {
  it('output the number of yesrs left on mercury for a male', function() {
    let expectedYear = 238;
    let inputAge = new Age(1998);
    expect(expectedYears).toEqual(inputAge.maleLifeExpectancyMercury);
  });
});

describe('Age', function() {
  it('output the number of yesrs left on mercury for a female', function() {
    let expectedYear = 258;
    let inputAge = new Age(1998);
    expect(expectedYears).toEqual(inputAge.femaleLifeExpectancyMercury);
  });
});

describe('Age', function() {
  it('output the number of yesrs left on venus for a male', function() {
    let expectedYear = 89;
    let inputAge = new Age(1998);
    expect(expectedYears).toEqual(inputAge.maleLifeExpectancyVenus);
  });
});

describe('Age', function() {
  it('output the number of yesrs left on venus for a female', function() {
    let expectedYear = 97;
    let inputAge = new Age(1998);
    expect(expectedYears).toEqual(inputAge.femaleLifeExpectancyVenus);
  });
});

describe('Age', function() {
  it('output the number of yesrs left on Mars for a male', function() {
    let expectedYear = 30;
    let inputAge = new Age(1998);
    expect(expectedYears).toEqual(inputAge.maleLifeExpectancyMars);
  });
});

describe('Age', function() {
  it('output the number of yesrs left on Mars for a female', function() {
    let expectedYear = 33;
    let inputAge = new Age(1998);
    expect(expectedYears).toEqual(inputAge.femaleLifeExpectancyMars);
  });
});

describe('Age', function() {
  it('output the number of yesrs left on Jupiter for a male', function() {
    let expectedYear = 5;
    let inputAge = new Age(1998);
    expect(expectedYears).toEqual(inputAge.maleLifeExpectancyJupiter);
  });
});

describe('Age', function() {
  it('output the number of yesrs left on Jupiter for a female', function() {
    let expectedYear = 6;
    let inputAge = new Age(1998);
    expect(expectedYears).toEqual(inputAge.femaleLifeExpectancyJupiter);
  });
});
