//Task 1 проверка имейла
var mail = 'zheneva_evg@yahoo.com';
var testMail = /^([a-zA-Z]{3,10}_[a-zA-Z]{3,10}(-[0-9]{4})?@([a-zA-Z0-9]+[-.]?[a-zA-Z0-9]+)(?<=(@[a-zA-Z0-9.-]{2,20})).com)$/ig       

console.log(testMail.test(mail));

//Task2 проверка формата телефона

function checkIfPhoneNumber(phoneNumInput) {
  var phoneNumregExp = /^(\+?375-?|80|8-0)(25|29|33|44|17)(-?)([1-9])(\d){2}(-?)(\d){2}(-?)(\d){2}$/;
  
  return phoneNumregExp.test(phoneNumInput);
}
checkIfPhoneNumber('+375-25-777-77-77');

//Task3 Подсчет кол-ва гласных в тексте 
function countVowelLetters(text) {
  var vowelLetters = new RegExp (/[аяыиоёуюэеaeiouy]/gi);
  var result = text.match(vowelLetters);

  return result.length;
}

countVowelLetters('Шла Саша по шоссе И сосала сУшку'); 
