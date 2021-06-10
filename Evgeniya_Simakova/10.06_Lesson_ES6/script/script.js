// Task 4
{
const arr = ['Jane', 32];

function f (...a) {
    console.log (`Hello, I'm ${a[0]} and I'm ${a[1]} years old.`);
}
f(...arr);
}

// Task 5

{
const arr = [1, 5, 8, 9];

function f() {
    for (let value of arr) {
        console.log(value);
    }
}
f(...arr);
}

// Task 6

{const countVowelLetters = text => 
    
    [...text.toLowerCase()].filter(letter => 'уеыаоэяиюёeuioya'.includes(letter)).length;

countVowelLetters('Шла Саша по шоссе И сосала сУшку');
}

