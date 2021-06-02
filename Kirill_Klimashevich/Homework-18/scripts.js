//Задача 1
var userMail = 'name_surname-1234@gmail.com';
console.log(/^([a-z]{3,10}_[a-z]{3,10}(-\d{4})?@[a-z\d]{1,10}[-.]?[a-z\d]{1,10}\.com)$/i.test(userMail));

//Задача 2
function checkUserNumber(UserNumber) {
    return console.log(/^(((\+375)-(25|29|33|44|17))|((80|8-0)(25|29|33|44|17)))-?[1-9]((\d{6})|(\d{2}-\d{2}-\d{2}))$/.test(UserNumber));
}
checkUserNumber('8-044-244-44-44');
//     +375-25-777-77-77
//     375299999999
//     8-044-244-44-44
//     8033-6666666

//Задача 3
function countVowelLetters(text) {
    if (text.match(/[аяыиоеёуюэ]/ig)) {
        return text.match(/[аяыиоеёуюэ]/ig).length;
    }
    return 0;
}

console.log('Число гластных ' + countVowelLetters('Шла Саша по шоссе И сосала сушку'));
//Вариант 2
function countVowelLettersTwo(text) {
    var arrText = text.split('');
    var newArr = [];

    for (i = 0; i < arrText.length; i++) {
        if (arrText[i] !== ' ') {
            newArr.push(arrText[i]);
        }
    }
    var removedVowels = newArr.join('').replace(/[аяыиоеёуюэ]/ig, '');

    return newArr.length - removedVowels.length;
}

console.log('Число гластных ' + countVowelLettersTwo('Шла Саша по шоссе И сосала сушку'));