
//------------------------------Task 1------------------------------
<<<<<<< HEAD
/^[a-z]{3,10}_[a-z]{3,10}(-\d{4})?\@[a-z\d]{1,10}[\.-]?[a-z\d]{1,10}\.com$/

//------------------------------Task 2------------------------------
function isPhoneNumber(phone){
    return /^(\+?375-?|8-?0)(25|29|33|44|17)(-?)[1-9]{1}(\d{2}-?){3}$/.test(phone);
=======
(\W|^)[a-z]{4,10}_[a-z]{4,10}(-[0-9]{4})?@[a-z0-9](([a-z0-9]{0}[-\.]{1}[a-z0-9]{0,17})|([a-z0-9]{0,1}[-\.]{1}[a-z0-9]{0,16})|([a-z0-9]{0,2}[-\.]{1}[a-z0-9]{0,15})|([a-z0-9]{0,3}[-\.]{1}[a-z0-9]{0,14})|([a-z0-9]{0,4}[-\.]{1}[a-z0-9]{0,13})|([a-z0-9]{0,5}[-\.]{1}[a-z0-9]{0,12})|([a-z0-9]{0,6}[-\.]{1}[a-z0-9]{0,11})|([a-z0-9]{0,7}[-\.]{1}[a-z0-9]{0,10})|([a-z0-9]{0,8}[-\.]{1}[a-z0-9]{0,9})|([a-z0-9]{0,9}[-\.]{1}[a-z0-9]{0,8})|([a-z0-9]{0,10}[-\.]{1}[a-z0-9]{0,7})|([a-z0-9]{0,11}[-\.]{1}[a-z0-9]{0,6})|([a-z0-9]{0,12}[-\.]{1}[a-z0-9]{0,5})|([a-z0-9]{0,13}[-\.]{1}[a-z0-9]{0,4})|([a-z0-9]{0,14}[-\.]{1}[a-z0-9]{0,3})|([a-z0-9]{0,15}[-\.]{1}[a-z0-9]{0,2})|([a-z0-9]{0,16}[-\.]{1}[a-z0-9]{0,1})|([a-z0-9]{0,17}[-\.]{1}[a-z0-9]{0})|([a-z0-9]{0,18}))(?=[a-z].com)[a-z0-9].com(\W|$)


//------------------------------Task 2------------------------------
function isPhoneNumber(phone){
    return /(\W|^)\+?(375|8(-?)0)(-?)(25|29|33|44|17)(-?)([1-9]{1}[0-9]{2}(-?)[0-9]{2}(-?)[0-9]{2})(\W|$)/.test(phone);
>>>>>>> A.Manzhurau_Homework-18
}
console.log(isPhoneNumber('+375-25-777-77-77'));


//------------------------------Task 3------------------------------
function countVowelLetters(text) {
    var regExp = /[аоуэиыеёюяaeiouy]/gi;
    var counter = text.match(regExp);
    if (counter == null) {
        return 0;
    } else {
        return counter.length;
    }
}
countVowelLetters('Шл'); 



function countVowelLetters(text) {
    var regExp =/[аоуэиыеёюяaeiouy]/gi;
    var counter=0;

    while (result = regExp.exec(text)) {
        counter++;
    }
    return counter;
}
countVowelLetters('Шл'); 




