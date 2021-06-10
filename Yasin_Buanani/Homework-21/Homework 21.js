'Use Strict';

// Задание 4

const arr = ['Alex', '30'];

function func(a ,b){
return `Hello, I'm ${a} and I'm ${b} years old.`;
}
func(...arr);

// Задание 5

function func(...rest) {
    for (let value of rest) {
        console.log(value);
    }
}
func(1, 2, 3, 4, 5);

// Задание 6

const countVowelLetters = text => {
    const vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'];

    return[...text].filter(t => vowelLetters.includes(t.toLowerCase())).length;
};

countVowelLetters('Шла Саша по шоссе И сосала сУшку'); 
