const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'ñ',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
const loveVsFriendship = words => {
  let result = 0;
  for (let letter of words) {
    result += alphabet.indexOf(letter) + 1;
  }
  return result;
};
console.log(loveVsFriendship('cca'));
