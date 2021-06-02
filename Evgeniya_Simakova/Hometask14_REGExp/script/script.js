//Task 1 проверка имейла
var mail = 'zheneva_evg@yahoo.com';
var testMail = /^([a-z]{3,10}_[a-z]{3,10}(-\d{4})?@([a-z\d]+[-.]?[a-z\d]+)(?<=(@[a-z\d.-]{2,20})).com)$/i      

console.log(testMail.test(mail));

//Task2 проверка формата телефона

function checkIfPhoneNumber(phoneNumInput) {
  var phoneNumregExp = /^(\+?375-?|8-?0)(25|29|33|44|17)-?[1-9]\d{2}(-?\d{2}){2}$/;
  
  return phoneNumregExp.test(phoneNumInput);
}
checkIfPhoneNumber('+375-25-777-77-77');

//Task3 Подсчет кол-ва гласных в тексте 
function countVowelLetters(text) {
  var vowelLetters = new RegExp (/[аяыиоёуюэеaeiouy]/gi);
  var result = text.match(vowelLetters);

  if (result !== null) {
    return result.length;
  } else {
    alert('No vowels in the text')
  }
}

countVowelLetters('Шла Саша по шоссе И сосала сУшку'); 
