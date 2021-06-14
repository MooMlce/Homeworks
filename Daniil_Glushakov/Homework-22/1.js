function counting({ a: x, b: y }, z = 1) {
  return x ** y * z;
}
counting({ a: 2, b: 3 }, 2);

function output(...array) {
  for (let value of array) {
    console.log(value);
  }
}
output(1, 2, 3);

function getVowels(str) {
  let counter = 0,
    vowels = 'aeiouёуеыаоэяию';
  vowels = vowels.split('');

  for (let letters of str) {
    if (vowels.includes(letters)) {
      counter++;
    }
  }
  return counter;
}

console.log(getVowels('Привет друг, сколько тут гласных?'));
