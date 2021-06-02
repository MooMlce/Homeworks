
//------------------------------Task 1------------------------------
/^[a-z]{3,10}_[a-z]{3,10}(-\d{4})?\@[a-z\d]{1,10}[\.-]?[a-z\d]{1,10}\.com$/

//------------------------------Task 2------------------------------
function isPhoneNumber(phone){
    return /^(\+?375-?|8-?0)(25|29|33|44|17)(-?)[1-9]{1}(\d{2}-?){3}$/.test(phone);
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




