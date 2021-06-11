// Задание 4:
  //   Создать массив с именем и возрастом. Передать его в функцию. Функция должна принять его как два отдельных параметра name и age и вернуть строку вида:
  //     "Hello, I'm (имя) and I'm (возраст) years old."
  //   Не использовать деструктуризацию.
{
let persone = ['Anna', 6];

let sayHello = (name, age) => `Hello, I'm ${name} and I'm ${age} years old.`;

sayHello(...persone);
}
    
    // Задание 5:
    //   Написать функцию, принимающую массив чисел. При вызове числа передаются в функцию отдельными параметрами, не массивом.
    //   Вывести в консоль числа последовательно.

{
let numbers = [1,3,5,7,11];

let showNumb = (...numbers) => {
for (let numb of numbers) {
    console.log(numb);  
    }
};
showNumb(...numbers);
}
    
// Задание 6:
//   Переписать решение задачи с поиском гласных на новый синтаксис. Использовать перебирающий метод массива и поиск элемента в массиве.

//     function countVowelLetters(text) {
//         text = text.toLowerCase().split('');
//         var vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'],
//             counter = 0;
//         for (var i = 0; i < vowelLetters.length; i++) {
//             for (var j = 0; j < text.length; j++) {
//                 vowelLetters[i] === text[j] && counter++;
//             }
//         }
//         return counter;
//     } countVowelLetters('Шла Саша по шоссе И сосала сУшку'); // 12

//Вариант 1
{
const countVowelLetters = text => {
    lettersArr = [...text.toLowerCase()];
    const vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'];

    return  lettersArr.filter(letter => vowelLetters.includes(letter)).length;
}; 

countVowelLetters('Шла Саша по шоссе И сосала сУшку');   
}


//Вариант 2  
function countVowelLetters (text) {
    text = text.toLowerCase();
    lettersArr = [...text];
    const vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'];
    let counter = 0;

    for (let letter of lettersArr) {
        if (vowelLetters.includes(letter))
        counter++;
    }

    return counter;
} 

countVowelLetters('Шла Саша по шоссе И сосала сУшку'); 

