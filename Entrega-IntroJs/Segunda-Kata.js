const numberToRoman = number => {
  const romanValues = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  let result = "";

  for (let key in romanValues) {
    if (number >= romanValues[key]) {
      result += key.repeat(Math.trunc(number / romanValues[key]));
      number -= romanValues[key] * Math.trunc(number / romanValues[key]);
    }
  }

  return result;
};
const romanToNumber = romanNumber => {
  let romanValue = romanNumber.toUpperCase(),
    romanKeys = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 },
    number = 0,
    i = romanNumber.length;
  while (i--) {
    if (romanKeys[romanValue[i]] < romanKeys[romanValue[i + 1]]) {
      number -= romanKeys[romanValue[i]];
    } else {
      number += romanKeys[romanValue[i]];
    }
  }
  return number;
};

const romanString = numberToRoman(56);
console.log(romanString);
console.log('');
console.log(romanToNumber(romanString));
