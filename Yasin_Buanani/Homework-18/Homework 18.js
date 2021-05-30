'Use Strict';

// Задание 1

/^[a-z]{3,10}_[a-z]{3,10}(-[0-9]{4})?@[a-z0-9]{1,10}(\.|-)?[a-z0-9]{1,10}\.com$/i.test('hcn_bvk-1234@gmail.com');

// Задание 2

function validatePhoneNumber(num) {
    var val = /^(\+?375-?(25|29|33|44|17)-?[1-9]{1}\d{2}-?\d{2}-?\d{2})$|^(8-?0(25|29|33|44|17)-?[1-9]{1}\d{2}-?\d{2}-?\d{2})$/i.test(num);

    return val;
}
console.log(validatePhoneNumber('8-044-144-44-44'));

// Задание 3

function countVowels(str) {
    var vowels = str.match(/[аеёиоуыэюяaeiouy]/ig);

    if (vowels && (vowels.length > 0)) {
        console.log("The number of vowels is:" + vowels.length);
    }
    else {
        console.log("No vowels in the word");
    }
}
console.log(countVowels('ПрИвет'));


function vowelCount(str) {
    var vowels = str.replace(/[^аеёиоуыэюяaeiouy]/ig, '');

    if (vowels.length > 0) {
        console.log("The number of vowels is:" + vowels.length);
    }
    else {
        console.log("No vowels in the word");
    }
}
console.log(vowelCount('hEllo'));
