export Date(year, month, day){
  Year = year;
  Month = month;
  Day = day;
}

export function ageMercury(age) {
  let ageInYears = parseInt(age);
  let newAge = (ageInYears * .24);

    return newAge;
}
