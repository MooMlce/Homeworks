//-------------------------------Task 1-------------------------------
{
const newObj = {a: 1, b: 2, c: 3, d: 4};
let {a,b,...obj} = newObj;
console.log(a,b,obj);
}
//-------------------------------Task 2-------------------------------
{
//let name = prompt('Enter your name');
const obj = {name:`${name}`,
             sayHi: ()=>{
               return `Hi, ${obj.name}!`;
             }};
console.log(obj.sayHi());
}
//-------------------------------Task 3-------------------------------
{
function getResult([{x,y},z=1]){
  return (x**y)*z;
}
console.log(getResult([{x: 2, y: 3},2]));
}
//-------------------------------Task 4-------------------------------
{
  const arr =['Vasya',35];
  function sayName(name,age){
    return `Hello, I'm ${name} and I'm ${age} years old.`
  }
  console.log(sayName(...arr));
}
//-------------------------------Task 5-------------------------------
{
  function getNumber(...arr){
    arr.sort();

    for (let value of arr) {
      console.log(value);
    }
  }
  getNumber(1,2,42,1,3,4,2);
}
//-------------------------------Task 6-------------------------------
{
  const countVowelLetters = (text) => {
    let counter = 0;
    const vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'];
    const arr = [...text.toLowerCase()];

    for (let value of arr) {
       if (vowelLetters.includes(value)){
         counter++;
       } 
    }
    return counter;
  }
  console.log(countVowelLetters('Шла Саша по шоссе И сосала сУшку'));
}
