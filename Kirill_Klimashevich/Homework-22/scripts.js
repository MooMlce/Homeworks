// Задание 1:
let {a, b, ...obj} = {a: 1, b: 2, c: 3, d: 4};
console.log(a, b, obj);

// Задание 2:
let name = prompt();
const obj = {
    name,
    sayHi () {
        console.log(`Hi, ${name}!`);
    }
};

obj.sayHi();

// Задание 3:
function fun({a: x, b: y}, z = 1) {
    return (x ** y)*z;
}

console.log(fun({a: 2, b: 3}, 2));

// Задание 4:
const arrUser = ['Vasya', '20'];

funHello(...arrUser);

function funHello(name, age) {
    console.log(`Hello, I'm ${name} and I'm ${age} years old.`);
}

// Задание 5:
funNumber(1, 2, 3, 4, 5);

function funNumber(...arrNumbers) {
    for (let value of arrNumbers) {
        console.log(value);
    }
}

// Задание 6:
    countVowelLetters = (text) => {
    text = [...text.toLowerCase()];
    const vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'];
    let counter = 0;

        vowelLetters.forEach(i => {
            text.filter(el => {el === i && counter++})
        });

    return counter;
}

console.log(countVowelLetters('Шла Саша по шоссе И сосала сУшку')); // 12