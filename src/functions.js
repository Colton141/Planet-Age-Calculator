class Age {
  constructor(birthDay) {
    this.birthDay = birthDay;
  }

  get earthAge() {
    return this.ageOnEarth();
  }

  get mercuryAge() {
    return this.ageOnMercury();
  }

  get venusAge() {
    return this.ageOnVenus();
  }

  get marsAge() {
    return this.ageOnMars();
  }

  get jupiterAge() {
    return this.ageOnJupiter();

  }

  get maleYearsMercury() {
    return this.maleLifeExpectancyMercury();
  }

  get femaleYearsMercury() {
    return this.femaleLifeExpectancyMercury();
  }

  get maleYearsVenus() {
    return this.maleLifeExpectancyVenus();
  }

  get femaleYearsVenus() {
    return this.femaleLifeExpectancyVenus();
  }

  get maleYearMars() {
    return this.maleLifeExpectancyMars();
  }

  get femaleYearMars() {
    return this.femaleLifeExpectancyMars();
  }

  get maleYearJupiter() {
    return this.maleLifeExpectancyJupiter();
  }

  get femaleYearJupiter() {
    return this.femaleLifeExpectancyJupiter();
  }

   ageOnEarth() {
    let date = new Date();
    let dateYear = date.getFullYear();
    let age = (dateYear - this.birthDay);
    return (age);
  };

   ageOnMercury() {
    let ageEarth = this.ageOnEarth();
    let ageMercury = Math.floor(ageEarth / .24);

    return (ageMercury);
  };

   ageOnVenus() {
    let ageEarth = this.ageOnEarth();
    let ageVenus = Math.floor(ageEarth / .64);

    return ageVenus;
  };

   ageOnMars() {
    let ageEarth = this.ageOnEarth();
    let ageMars = Math.floor(ageEarth / 1.88);

    return ageMars;
  };

   ageOnJupiter() {
    let ageEarth = this.ageOnEarth();
    let ageJupiter = Math.floor(ageEarth / 11.86);

    return ageJupiter;
  };

   maleLifeExpectancyMercury() {
    let mercuryLife = 325;
    let ageM = this.ageOnMercury();
    if (mercuryLife > ageM) {
      return (mercuryLife - ageM);
    } else {
      return (ageM - mercuryLife);
    }
  };

   femaleLifeExpectancyMercury() {
    let mercuryLife = 345;
    let ageM = this.ageOnMercury();
    if (mercuryLife > ageM) {
      return (mercuryLife - ageM);
    } else {
      return (ageM - mercuryLife);
    }
  };

   maleLifeExpectancyVenus() {
    let venusLife = 121;
    let ageV = this.ageOnVenus();
    if (venusLife > ageV) {
      return (venusLife - ageV);
    } else {
      return (ageV - venusLife);
    }
  };

   femaleLifeExpectancyVenus() {
    let venusLife = 129;
    let ageV = this.ageOnVenus();
    if (venusLife > ageV) {
      return (venusLife - ageV);
    } else {
      return (ageV - venusLife);
    }
  };

   maleLifeExpectancyMars() {
    let marsLife = 41;
    let agem = this.ageOnMars();
    if (marsLife > agem) {
      return (marsLife - agem);
    } else {
      return (agem - marsLife);
    }
  };

   femaleLifeExpectancyMars() {
    let marsLife = 44;
    let agem = this.ageOnMars();
    if (marsLife > agem) {
      return (marsLife - agem);
    } else {
      return (agem - marsLife);
    }
  };

   maleLifeExpectancyJupiter() {
    let jupiterLife = 6;
    let ageJ = this.ageOnJupiter();
    if (jupiterLife > ageJ) {
      return (jupiterLife - ageJ);
    } else {
      return (ageJ - jupiterLife);
    }
  };

   femaleLifeExpectancyJupiter() {
    let jupiterLife = 7;
    let ageJ = this.ageOnJupiter();
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
