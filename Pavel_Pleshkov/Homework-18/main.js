// task1
var pattern = '^[a-z]{3,10}_[a-z]{3,10}(-\\d{4})?@[a-z\\d]{1,10}[\\.-]?[a-z\\d]{1,10}\\.com$';

var regexp = new RegExp(pattern, 'i');

var str = 'name_surname-1234@gmail.com';
str = 'name_surname-1234@gma2il.com';
str = 'name_surname-1234@g-mail.com';
console.log(regexp.test(str));



//task2
function validate(str, pattern) {
    var regexp = new RegExp(pattern);

    return regexp.test(str);
}

var pattern = '^((\\+?375-?)|(8-?0))(25|29|33|44|17)-?[1-9](\\d{2}-?){2}\\d{2}$';

console.log(validate('+375-25-777-77-77', pattern));
console.log(validate('375299999999', pattern));
console.log(validate('8-044-444-44-44', pattern));
console.log(validate('8033-6666666', pattern));
console.log(validate('8-0-33-6666666', pattern));//false
console.log(validate('80-33-6666666', pattern));//false
console.log(validate('-8033-6666666', pattern));//false
console.log(validate('8033-666666-6', pattern));//false
console.log(validate('8033-0666666', pattern));//false



//task3
// function getQuantityOfEngVowels(str) {
//     var vowels = ['e', 'y', 'u', 'i', 'o', 'a'];

//     return str.toLowerCase().split('').filter(function(item) {
//         return vowels.indexOf(item) != -1;
//     }).length;
// }
function getQuantityOfEngVowels(str) {
    var regexp = new RegExp('[eyuioa]', 'ig');
    try {
        return str.match(regexp).length;
    } catch {
        return 0;
    }
}

function getQuantityOfEngVowels(str) {
    var regexp = new RegExp('[^eyuioa]', 'ig');
    
    return str.split(regexp).join('').length;
}

var string = 'My nAme is ';
console.log(getQuantityOfEngVowels(string)); //4
string = 'qwrt';
console.log(getQuantityOfEngVowels(string)); //0