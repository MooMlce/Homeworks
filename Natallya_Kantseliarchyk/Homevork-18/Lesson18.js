
/^[a-z]{3,10}_[a-z]{3,10}(-\d{4})?@[a-z\d]{1,10}[-.]?[a-z\d]{1,10}\.com$/i.test('name_surname-1234@gmail.com');
/^[a-z]{3,10}_[a-z]{3,10}(-\d{4})?@(?:[a-z\d]{2,20}-?)[-.]?[a-z\d]+\.com$/i.test('name_surname-1234@gmail.com');

// Написать функцию, которая с помощью регулярного выражения будет тестировать на соответствие строки вида:
function testNumber(number) {
  return /^(\+?375-?|8-?0)(25|29|33|44|17)-?[1-9]\d{2}(-?\d{2}){2}$/.test(number);
}
testNumber('375299999999');

// Переписать решение задачи с поиском гласных
function textString(str) {
  var count = 0;

  str.toLowerCase().split('').forEach(function(letter) {
    if ( /[яиюэаыйе]/.test(letter)) {
      count++;
    }
  });

  return count
}
textString('яспареоил');

function textString(str) {
  var letter = str.match(/[aeiou]/gi);
  return letter === null ? 0 : letter.length;
}
textString('aewtklo')