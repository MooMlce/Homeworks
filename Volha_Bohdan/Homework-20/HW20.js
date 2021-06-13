// Задание 1: 

let {a, b, ...obj} = {a: 1, b: 2, c: 3, d: 4};
 
//   Задание 2: 

let userName = prompt('Введите имя');
let obj = {
    name : userName,
    sayHi(){ return `Hi, ${this.name}`}
  };

//   Задание 3: 

function Exponentiation({a:x, b:y}, z = 1) {
  return (x**y)*z;
}

Exponentiation({a: 2, b: 3}, 5);

//   Задание 4: 

var arrayForm = ['Vasya', 30];

function printForm(name, age){
  return `Hello, I'm ${name} and I'm ${age} years old.`
}

printForm(...arrayForm);

//   Задание 5: 

function printNumbers(...numbers){
    for(item of numbers){
      console.log(item);
    }  
  }
  
  printNumbers([2,4,5,3,5,3,5,7]);

//   Задание 6: 

function countVowelLetters(text) {
    text = text.toLowerCase().split('');
  
    var vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'];
    return text.filter(a => vowelLetters.includes(a)).length;
  }