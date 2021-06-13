//---------------------------------------------------------------------------------------------------------------------------------------
// task #4
// Создать массив с именем и возрастом.
// Передать его в функцию. Функция должна принять его как два отдельных параметра name и age и вернуть строку вида:
// 	"Hello, I'm (имя) and I'm (возраст) years old."
// Не использовать деструктуризацию.

// SOLUTION
function presentMe(name, age) {
	return `Hello, I'm ${name} and I'm ${age} years old.`;
}

const user1 = ['Polly', 28];
presentMe(...user1);

// SOLUTION // arrow function
const presentMe = ((name, age) => `Hello, I'm ${name} and I'm ${age} years old.`),
	user1 = ['Polly', 28];

presentMe(...user1);
//---------------------------------------------------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------------------------------------------------
// task #5
// Написать функцию, принимающую массив чисел. При вызове числа передаются в функцию отдельными параметрами, не массивом.
// Вывести в консоль числа последовательно.

// SOLUTION
function showNumbersSequentially(...numbers) {
	for (let number of numbers) {
		console.log(number);
	}
}

showNumbersSequentially(1, 3, 5, 7, 9);

// SOLUTION // arrow function
const showNumbersSequentially = (...numbers) => {
	for (let number of numbers) {
		console.log(number);
	}
};

showNumbersSequentially(1, 3, 5, 7, 9);
//---------------------------------------------------------------------------------------------------------------------------------------