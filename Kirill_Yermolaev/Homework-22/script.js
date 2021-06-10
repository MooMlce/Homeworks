//////Задание 4
const mass = ['Vasya', 20];

function sayHi (name, age) {
    return `Hello, I'm ${name} and I'm ${age} years old.`;
};

console.log(sayHi(...mass));

//////Задание 5
const numberArr = [1, 2, 3, 4, 5, 6];

function numbers(arr) {
    for (let value of arr) {
        console.log(value);
    };
};

numbers([...numberArr]);

//////Задание 6
function countVowelLetters(text) {
    let counter = 0;
    const vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'];

    [...text.toLowerCase()].forEach(item => vowelLetters.find(vowel => vowel === item && counter++));

    return counter;
};
console.log(countVowelLetters('Шла Саша по шоссе И сосала сУшку')); // 12