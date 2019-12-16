// Ejercicio 1
console.log('Ejercicio 1:');
const hola = 'h o l a';
const pruebaDeCosas = 'pru e bad ecosas';

const joinFunction = value => value.replace(/\s/g, '');

console.log(joinFunction(hola));
console.log(joinFunction(pruebaDeCosas));

console.log('--------------------------');
// Ejercicio 2
console.log('Ejercicio 2:');

const arrayFunction = (array) => {
    let total = 0;
    for (const value of array) {
        if (typeof value === 'number') {
            total += value;
        } else {
            total -= value;
        }
    }
    return total;
}
console.log(arrayFunction([1, 2, 3, '4']));

console.log('--------------------------');
// Ejercicio 3
console.log('Ejercicio 3:');

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const loveVsFriendship = words => {
  let result = 0;
  for (let letter of words) {
      for (let alpha of alphabet) {
          if (letter === alpha) {
              result += alphabet.indexOf(alpha) + 1;
          }
      }
  }
  return result;
}
console.log(loveVsFriendship('cca'));

console.log('--------------------------');
// Ejercicio 4
console.log('Ejercicio 4:');

class PasswordChecker {
  constructor() {
    this.SPECIAL_CHARACTERS = ['.', '/', '%', '$'];
  }
  isStrong(password) {
    return this.strength(password) >= 5;
  }
  isMedium(password) {
    const strength = this.strength(password);
    return strength > 3 && strength < 5;
  }
  isWeak(password) {
    return this.strength(password) <= 3;
  }
  strength(password) {
    let strength = 0;
    if (this.hasLowerCases(password)) strength++;
    if (this.hasUpperCases(password)) strength++;
    if (this.hasSpecialCharacters(password)) strength += 2;
    if (this.hasBlanks(password)) strength++;
    return strength;
  }
  hasLowerCases(password) {
    return password.split('').some(char => char.toLowerCase() === char);
  }
  hasUpperCases(password) {
    return password.split('').some(char => char.toUpperCase() === char);
  }
  hasSpecialCharacters(password) {
    return password
      .split('')
      .some(char => this.SPECIAL_CHARACTERS.includes(char));
  }
  hasBlanks(password) {
    return password.split('').some(char => char === ' ');
  }
}
const checker = new PasswordChecker();
console.log(checker.isStrong('PruebaConcepto'));
console.log(checker.isStrong('Prueba.Concepto'));
console.log(checker.isStrong('PruebaC% oncepto'));
console.log(checker.isStrong('Prueb4.% Concepto'));

console.log('--------------------------');
// Ejercicio 5
console.log('Ejercicio 5:');

const file_1 = {"name": "alien", "size_GB": 38, "speed_Mbps": 38};
const file_2 = {"name": "predator", "size_GB": 38, "speed_Mbps": 2};
const file_3 = {"name": "terminator", "size_GB": 5, "speed_Mbps": 25};

const downloadSpeed = file => {
  
}
