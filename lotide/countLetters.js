// Assertion Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const countLetters = function(string){
  const object = {};
  for (let letter of string) {
    if (letter !== ' ') {
      if (object[letter]) {
        object[letter] += 1;
      } else {
        object[letter] = 1;
      }
    }
  }
  return object;
}

console.log(countLetters("lighthouse in the house"));

assertEqual({ l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }, {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
});