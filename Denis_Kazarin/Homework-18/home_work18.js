  /^[a-z]{3,10}_[a-z]{3,10}(-\d{4})?@[a-z\d]{1,10}(\-|\.)?[a-z\d]{1,10}.com$/i.test('abcd_aaa-7778@gmail.com');


    function numberCheck(number) {
        return /^\+?([375]{3}(\-)?|[8]{1}(\-)?[0]{1})([25]{2}(\-)?|[29]{2}(\-)?|[33]{2}(\-)?|[44]{2}(\-)?|[17]{2}(\-)?)[1-9]{1}[\d]{2}(\-)?[\d]{2}(\-)?[\d]{2}(\-)?$/i.test(number);
      }
      numberCheck('8-029-555-55-54');



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
