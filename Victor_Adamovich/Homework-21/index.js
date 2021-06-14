// Задание 1
{
    const {a, b, ...obj} = {a: 1, b: 2, c: 3, d: 4};
    console.log(a, b, obj);
}
// Задание 2
{
    let name = prompt();
    const obj = {
        name,
        sayHi() {
            console.log(`Hi, ${name}!`);
        }
    };

    obj.sayHi();
}
// Задание 3
{
    const func = ({a: x, b: y}, z = 1) => {
        return (
            (x ** y) * z
        );
    }
    console.log(func({a: 2, b: 3}, 2));
}

// Задание 4
{
    let person = ['Victor', 22];

    const sayHi = (name, age) => `Hello, I'm ${name} and I'm ${age} years old.`;

    sayHi(...person);
}
// Задание 5
{
    let arr = [2, 3, 4, 5, 6, 7, 8, 9]

    const returnNumb = (...arr) => {
        for (let num of arr) {
            console.log(num)
        }
    }
    returnNumb(...arr);
}

// Задание 6
{
    const countVowelLetters = text => {
        const vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'];

        return [...text.toLowerCase()].filter(letter => vowelLetters.includes(letter)).length;
    }

    countVowelLetters('Simple dimple Маленький красивый А Pop it большой и милый Simple dimple он простой');//25
}

