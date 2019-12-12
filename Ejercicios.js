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

function loveVsFriendship(words) {
    let result = 1;
    for (let letter of words) {
        for (let alpha of alphabet) {
            if (letter === alpha) {
                result += (words.indexOf(letter) + (alphabet.indexOf(alpha)));
                console.log('result: ' + result + ' words.indexOf(letter): ' + words.indexOf(letter) + ' alphabet.indexOf(alpha): ' + alphabet.indexOf(alpha));
            }
        }
    }
    return result;
}
console.log(loveVsFriendship('dd'));