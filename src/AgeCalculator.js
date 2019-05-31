export Date(year, month, day){
  Year = year;
  Month = month;
  Day = day;
}

export function ageMercury(age) {
  let ageInYears = parseInt(age);
  let newAge = (ageInYears * .24);

    return newAge;
};

export function ageVenus(age) {
  let ageInYears = parseInt(age);
  let newAge = (ageInYears * .64);

  return newAge;
};

export function ageMars(age) {
  let ageInYears = parseInt(age);
  let newAge = (ageInYears * 1.88);

  return newAge;
};

export function agejupiter(age) {
  let ageInYears = parseInt(age);
  let newAge = (ageInYears * 11.86);

  return newAge;
};
