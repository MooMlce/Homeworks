/^([a-z]{3,10}_[a-z]{3,10})-?([0-9]{4})?@([a-z]{1,10}([.-])?[a-z]{1,10}).com$/i.test(
  'name_surname-1234@gmail.com'
);

function validate(strings) {
  var pattern =
    /^((\+?375\-?)|(8\-?0))(25|29|33|44|17)\-?[1-9]{1}\d{2}(-?\d{2}){2}$/;
  var regex = new RegExp(pattern, 'i');
  return regex.test(strings);
}
validate('+375-25-777-77-77');

function getVowels(str) {
  var vowels = str.match(/[aeiouёуеыаоэяию]/gi);
  if (vowels == null) {
    return 0;
  } else {
    return vowels.length;
  }
}
getVowels('Привет друг, сколько тут гласных?');