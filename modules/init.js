
// let ui = ['ac', '+/-', '%', '÷', 7, 8, 9, '×', 4, 5, 6, '-', 1, 2, 3, '+', 0, ',', '=']

// let appNode = document.getElementById('app')
// let inputNode = document.getElementById('result')

// let result = 0
// let intermediate = 0

// let last = 0

// let update = () => {
// 	inputNode.value = result
// }

// let init = () => {
	
// 	ui.map(el => {

// 		let button = document.createElement('button')
// 		button.value = el
// 		button.innerHTML = el

// 		if (el === 0) button.classList.add('wide')

// 		if (['ac', '+/-', '%'].includes(el)) button.classList.add('faded')
// 		if (['÷', '×', '-', '+', '='].includes(el)) button.classList.add('accent')

// 		button.addEventListener('click', () => {
			
// 			if (isNaN(+el)) { // operators

// 				intermediate = result

// 				// console.log(intermediate)

// 			} else { // digits

// 				// if (intermediate) result = 0
// 				if (intermediate) {
// 					result = 0
				

// 				}

				
// 				result = parseInt(result + '' + el)
// 				// console.log(result)

// 				update()
// 			}
// 		})

// 		appNode.appendChild(button)
// 	})

// 	update()
// }

// export default init



// function checkSpam(str) {
// 	let lowerStr = str.toLowerCase();
  
// 	return lowerStr.includes('viagra') || lowerStr.includes('xxx');
//   }
  
//   alert( checkSpam('buy ViAgRA now') );
//   alert( checkSpam('free xxxxx') );
//   alert( checkSpam("innocent rabbit") );


// function truncate(str, maxlength) {
// 	return (str.length > maxlength) ?
// 	  str.slice(0, maxlength - 1) + '…' : str;
//  }

// alert( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) )

// alert( truncate("Всем привет!", 20) )

// function camelize(str) {
// 	return str
// 	.split('-')

// 	.map( (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))

// 	.join('')
// }


// function filterRange(arr, a, b) {
// 	return arr.filter(item => (a <= item && item <= b))
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)



// function filterRangeInPlace(arr, a, b) {
// 	for (let i = 0; i < arr.length; i++) {
// 		let val = arr[i]

// 		if (val < a || val > b) {
// 			arr.splice(i, 1);
// 			i--;
// 		}
// 	}
// }

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert( arr ); // [3, 1]



// function number (a,b) {
// 	if (a > b) return -1;
// 	if (a == b) return 0;
// 	if (a < b) return 1;
// }
// let arr = [5, 2, 1, -10, 8];
// arr.sort(number)
// alert(arr)  // 8, 5, 2, 1, -10


// function copySorted(arr) {
// 	return arr.slice().sort()

// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)




// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name)


// alert( names ); // Вася, Петя, Маша



let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(user => ({
// 	fullName: `${user.name} ${user.surname}`,
// 	id: user.id
//   }));
// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */
// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин




// function shuffle(array) {
    
// }

// let range = {
// 	from: 1,
// 	to: 5,
  
// 	[Symbol.iterator]() {
// 	  this.current = this.from;
// 	  return this;
// 	},
  
// 	next() {
// 	  if (this.current <= this.to) {
// 		return { done: false, value: this.current++ };
// 	  } else {
// 		return { done: true };
// 	  }
// 	}
//   };
  
//   for (let num of range) {
// 	alert(num); 
//   }


// function unique(arr) {
// 	return Array.from(new Set(arr));
//   }
  
//   let values = ["Hare", "Krishna", "Hare", "Krishna",
// 	"Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];
  
//   alert( unique(values) )


// function aclean(arr) {
// 	let map = new Map()
// 	for (let world of arr) {
// 		let sorted = word.toLowerCase().split("").sort().join("")
// 		map.set(sorted, word);
// 	}

// 	return Array.from(map.values());
// }


// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"


// function count(obj) {
// 	return Object.keys(obj).length
// }

// let user = {
// 	name: 'John',
// 	age: 30
//   };
  
//   alert( count(user) ); // 2


// function sumSalaries(salaries) {

// 	let sum = 0;
// 	for (let salary of Object.values(salaries)) {
// 	  sum += salary;
// 	}
  
// 	return sum; // 650
//   }

// let salaries = {
// 	"John": 100,
// 	"Pete": 300,
// 	"Mary": 250,
// };

// alert( sumSalaries(salaries) )

// let user = {
// 	name: "John",
// 	years: 30
//   };


//   let {name, years: age, isAdmin = false} = user

// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false

// function topSalary(salaries) {
// 	let max = 0;
//     let maxName = null;
  
//     for(const [name, salary] of Object.entries(salaries)) {
//       if (max < salary) {
//         max = salary;
//         maxName = name;
//       }
//     }
//     return maxName;
//   }

// let salaries = {
// 	"John": 100,
// 	"Pete": 300,
// 	"Mary": 250
//  };

// let d = new Date(2012, 1, 20, 3, 12);
// alert( d );

// function getWeekDay(date) {
//   let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

//   return days[date.getDay()];
// }

// let date = new Date(2014, 0, 3); // 3 января 2014 года
// alert( getWeekDay(date) ); // ПТ

// function getDateAgo(date, days) {
//   let dateCopy = new Date(date);

//   dateCopy.setDate(date.getDate() - days);
//   return dateCopy.getDate();
// }

// let date = new Date(2015, 0, 2);

// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

// function getLastDayOfMonth(year, month) {
//   let date = new Date(year, month + 1, 0);

//   return date.getDate()
// }

// let user = {
// 	name: "Василий Иванович",
// 	age: 35
//   };

// let us = JSON.stringify(user)
// alert( us )


// function sumTo(n) {
// 	// let sum = 0;
// 	// for(let i = 1; i <= n; i++) {
// 	// 	sum += i;
// 	// }
// 	// return sum;

// 	if (n == 1) {
// 		return n
// 	} else {
// 		return n + sumTo(n-1) 
// 	}
// }
// alert( sumTo(100) ); // 5050


// function factorial(n) {
// 	return (n != 1) ? n * factorial(n - 1) : 1
// }
// alert( factorial(5) ); // 120