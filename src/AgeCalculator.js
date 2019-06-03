class Age {
  constructor(birthDay) {
    this.birthDay = birthDay;
  }


  function ageOnEarth() {
    let date = new Date();
    let dateYear = date.getFullYear();
    let age = (dateyear - this.birthday);
    return age;
  };

  function ageOnMercury() {
    let ageEarth = this.ageOnEarth;
    let ageMercury = Math.floor(ageEarth / .24);

    return ageMercury;
  };

  function ageOnVenus() {
    let ageEarth = this.ageOnEarth;
    let ageVenus = Math.floor(ageEarth / .64);

    return ageVenus;
  };

  function ageOnMars() {
    let ageEarth = this.ageOnEarth;
    let ageMars = Math.floor(ageEarth / 1.88);

    return ageMars;
  };

  function ageOnJupiter() {
    let ageEarth = this.ageOnEarth;
    let ageJupiter = Math.floor(ageEarth / 11.86);

    return ageJupiter;
  };

  function maleLifeExpectancyMercury() {
    let mercuryLife = 325;
    let ageM = this.ageOnMercury;
    if (mercuryLife > age) {
      return (mercuryLife - ageM);
    } else {
      return (ageM - mercuryLife);
    }
  };

  function femaleLifeExpectancyMercury() {
    let mercuryLife = 345;
    let ageM = this.ageOnMercury;
    if (mercuryLife > age) {
      return (mercuryLife - ageM);
    } else {
      return (ageM - mercuryLife);
    }
  };

  function maleLifeExpectancyVenus() {
    let venusLife = 121;
    let ageV = this.ageOnVenus;
    if (venusLife > age) {
      return (venusLife - ageV);
    } else {
      return (ageV - venusLife);
    }
  };

  function femaleLifeExpectancyVenus() {
    let venusLife = 129;
    let ageV = this.ageOnVenus;
    if (venusLife > age) {
      return (venusLife - ageV);
    } else {
      return (ageV - venusLife);
    }
  };

  function maleLifeExpectancyMars() {
    let marsLife = 41;
    let agem = this.ageOnMars;
    if (marsLife > agem) {
      return (marsLife - agem);
    } else {
      return (agem - marsLife);
    }
  };

  function femaleLifeExpectancyMars() {
    let marsLife = 44;
    let agem = this.ageOnMars;
    if (marsLife > agem) {
      return (marsLife - agem);
    } else {
      return (agem - marsLife);
    }
  };

  function maleLifeExpectancyJupiter() {
    let jupiterLife = 6;
    let ageJ = this.ageOnJupiter;
    if (jupiterLife > ageJ) {
      return (jupiterLife - ageJ);
    } else {
      return (ageJ - jupiterLife);
    }
  };

  function femaleLifeExpectancyJupiter() {
    let jupiterLife = 7;
    let ageJ = this.ageOnJupiter;
    if (jupiterLife > ageJ) {
      return (jupiterLife - ageJ);
    } else {
      return (ageJ - jupiterLife);
    }
  };




}
module.exports = {
  Age: Age
}
