/^[a-z]{3,10}_[a-z]{3,10}(-\d{4})?@([a-z\d]+[-\.])?[a-z\d]{2,20}\.com$/i.test('name_surname-1234@gmail.com');


function validate(pattern){
  var regExp = /^(8|(\+?375))[\-]?[0]?(29|25|44|33|17)[\-]?[^0]\d{2}[\-]?\d{2}[\-]?\d{2}$/;
  return regExp.test(pattern);
}

validate('375299999999');


function countVowels(str){
  var reg = /[eyuioaаеиоуюяыёэ]/igm;
  	if(str.match(reg) == null){
    	console.log(0); 
  	} else {
   		console.log(str.match(reg).length);
 	}
}

countVowels('aaaaa');