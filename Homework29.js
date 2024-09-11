// Exercitiu
// BMI - body mass index
// MBI = masă / înălțime ** 2 = masă / (înălțime * înălțime). (masa in kg si inaltimea in metri)
person1 = {
  name: "Mark Ganea",
  masa: 78,
  inaltimea: 1.69,
  calcBMI() {
    return this.masa / this.inaltimea ** 2;
  },
};
// to calculate MBI
let bmi1 = Math.floor(person1.calcBMI()); //Math.floor, function pentru a primi numar intreg
console.log(`BMI a lui Mark Ganea este ${bmi1}`);

person2 = {
  name: "Vasile Cibotaru",
  masa: 92,
  inaltimea: 1.95,
  calcBMI() {
    return this.masa / this.inaltimea ** 2;
  },
};
// to calculate MBI
let bmi2 = Math.floor(person2.calcBMI());
console.log(`BMI a lui Vasile Cibotaru este ${bmi2}`);

const verificaEgalitatetea = () => {
  if (bmi1 > bmi2) {
    console.log(
      `BMI lui ${person1.name}(${bmi1}) este mai mare decat BMI lui ${person2.name}(${bmi2}).`
    );
  } else if (bmi2 > bmi1) {
    console.log(
      `BMI lui ${person2.name}(${bmi2}) este mai mare decat BMI lui ${person1.name}(${bmi1}) .`
    );
  }
};

verificaEgalitatetea();
