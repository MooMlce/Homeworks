// дз1
/^[a-z]{3,10}_[a-z]{3,10}(-\d{4})?@[a-z\d]{1,10}(\.|-)?[a-z\d]{1,10}.com$/i.test('aaaa_adw-1233@A.A.com');

//ретроспективные проверки(увы не работает)

/^[a-z]{3,10}_[a-z]{3,10}(-\d{4})?@([a-z\d]((\.|-)?)+(?<=[a-z\d])(?=[a-z\d])){2,20}.com$/i.test('aaaa_adw-1233@A.A.com')

// дз2
//только вот не понял почему нудно ставить двойное экранирование перед плюсом, потому что с одним не работает, а это увидел в статье в инете.(обычная работает в консоле хорошо с однтм '\')
var phone = '+375-29-555-29-78';
var pattern = '^((\\+?)375|8(-?)0)-?(25|29|33|44|17)-?[1-9]{3}-?[1-9]{2}-?[1-9]{2}$';
function numberСheck(pattern) {
	var regExp = new RegExp(pattern);
	return regExp.test(phone);
}
numberСheck(pattern);


//дз3 ошибка у консоли если нет гласных
var text = 'привет';
function numberOfVowels() {
	var quantity = text.match(/[аеёиоуыэюя]/ig);
	return alert(quantity.length);
}

numberOfVowels();