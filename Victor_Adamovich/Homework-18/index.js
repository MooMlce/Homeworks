//Задание 1
var regex1 = /^[a-z]{3,10}_[a-z]{3,10}(-\d{4})?@[a-z\d]{1,10}[.-]?[a-z\d]{1,10}\.com$/i;


//Задание 2
function valid (pattern){
    var regex2 = new RegExp('/^(\\+?375-?|8-?0)(25|29|33|44|17)-?([1-9]\d{2})(-?\d{2}){2}$/')
   return regex2.test(pattern);
}
valid('+375-25-777-77-77');


//Задание 3
function counterVowels(text) {
    var vowels = text.match(/[аеёиоуыэюя]/gi)

    return vowels ? vowels.length : 0;
}

console.log(counterVowels('я думал он будет оном а она ононом'));

