// Task 1
/^[a-z]{3,10}_[a-z]{3,10}(-\d{4})?@[a-z\d]{1,10}(\-|\.)?[a-z\d]{1,10}.com$/i.test('abcd_aaa-7778@gmail.com');

// Task 2
function numberCheck(number) {
  return /^(\+?(375(\-)?)|8(\-)?0)(25|29|33|44|17)(\-)?)[1-9]{1}([\d]{2}(\-)?){3}$/i.test(number);
}
numberCheck('8-029-555-55-54');

// Task 3
function vowelQuantity(string) {
  var check = string.match(/[уеыаоэёяию]/ig);

  if (!check) {
    console.log('Гласных не найдено');
  } else {
      return check.length;
    }
}
vowelQuantity('кофемашина');


function vowelQuantity(string) {
  try {
    return string.match(/[уеыаоэёяию]/ig).length;
  }
  catch {
    console.log('Гласных не найдено');
  }
}
vowelQuantity('кофемашина');
