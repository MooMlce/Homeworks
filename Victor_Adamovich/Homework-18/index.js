//Задание 1

var regex1 = /^[a-zA-z]{3,10}_[a-zA-z]{3,10}(-\w{4})?@([a-zA-Z\d]+[-\.])?[a-zA-Z\d]{2,20}\.com$/;


//Задание 2

function valid (pattern){
    var regex2 = new RegExp('^\\+?(375|8)\\-?0?(25|29|33|44|17)[\\-]?[^0]\\d{2}[\\-]?\\d{2}[\\-]?\\d{2}$')
   return regex2.test(pattern);
}

valid('+375-25-777-77-77');


//Задание 3
function counterVowels(text) {
    var vowels = text.match(/[аеёиоуыэюя]/gi)

    return vowels ? vowels.length : 0;
}

console.log(counterVowels('я думал он будет оном а она ононом'));

