// дз1
/^[a-z]{3,10}_[a-z]{3,10}(-\d{4})?@[a-z\d]{1,10}(\.|-)?[a-z\d]{1,10}.com$/i.test('aaaa_adw-1233@A.A.com');

//ретроспективные проверки(увы не работает)

/^[a-z]{3,10}_[a-z]{3,10}(-\d{4})?@([a-z\d]((\.|-)?)+(?<=[a-z\d])(?=[a-z\d])){2,20}.com$/i.test('aaaa_adw-1233@A.A.com')

// дз2

var phone = '+375-29-555-29-78';
var pattern = '^([\+]?375-?|8(-?)0)(25|29|33|44|17)-?[1-9]([0-9]{2}-?){2}[0-9]{2}$';//исправлено двойное экранирование, 80- не можете сделать, код не дублирует, 0 не может быть только первая цифра номера
function numberСheck(pattern) {
	var regExp = new RegExp(pattern);
	return regExp.test(phone);
}
numberСheck(pattern);


//дз3 
var text = 'привет';
function numberOfVowels() {
	var quantity = text.match(/[аеёиоуыэюя]/ig);
	return alert(quantity.length);
}

numberOfVowels();

// если совпадений не будет то код будет приводиться к ошибке, так как метод match хоть и создает массив, но при отсутствии совпадений будет возращать null