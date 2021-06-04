// zadanie 1
    /^[a-z]{3,10}_[a-z]{3,10}(-\d{4})?@[a-z\d]{1,10}[.-]?[a-z\d]{1,10}\.com$/i.test('name_surname-1234@gmail.com');
    
// zadanie 2

function phone(e){
    var res = new RegExp('/^(\\+?375-?|8-?0)(25|29|33|44|17)-?([1-9]\d{2})(-?\d{2}){2}$/');
    return res.test(e);
}

phone('8-044-444-44-44');


//Задание 3
function text(e) {
    var res = e.match(/[аеёиоуыэюя]/gi)

    return res ? res.length : 0;
}
text('привет');

function text(e) {
    return (e.match(/[аеёиоуыэюя]/gi)||[]).length;
    }
    text('привет');

