/^[a-z]{3,10}_[a-z]{3,10}(-\d{4})?@[a-z\d]{1,10}[.-]?[a-z\d]{1,10}\.com$/i.test('name_surname-1234@gmai.l.com');


function validate(pattern) {
	var regExp = /^(8-?0|\+?375-?)(29|25|44|33|17)-?[1-9]\d{2}(-?\d{2}){2}$/;
	
	return regExp.test(pattern);
}

validate('375-0299999999');


function countVowels(str) {
	var reg = /[eyuioaаеиоуюяыёэ]/igm;
	if(str.match(reg) == null) {            
		console.log(0); 
  	} else {
   	 	console.log(str.match(reg).length);
 	}
}

countVowels('aaaaa');