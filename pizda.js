// function mpow(a, b) {
// 	if (a > b) {
// 		return a
// 	} else {
// 		return b
// 	}
// }


// let a = prompt('введите первое число', 0)
// let b = prompt('введите второе число', 0)

// function pow(x, n) {
// 	return x ** n 
// }

// let answer = pow(a, b)

// alert( answer )


// let user = {}

// user.name = 'John'
	
// user.surname = 'Smith'

// user.name = 'Pete'

// delete user.name

// let salaries = {
// 	John: 100,
// 	Ann: 160,
// 	Pete: 130
// }

// let sum = 0 
// for (let key in salaries) {
// 	sum += salaries[key]
// }

// // до вызова функции
// let menu = {
// 	width: 200,
// 	height: 300,
// 	title: "My menu"
// };
  
// function multiplyNumeric(obj) {
// 	for (let key in obj)  {
// 		if (typeof obj[key] == 'number') { 
// 		obj.[key] *= 2
// 		}
// 	}
// }
// multiplyNumeric(menu);
 

//  // после вызова функции
// menu = {
// 	width: 400,
// 	height: 600,
// 	title: "My menu"
// };


// let user = {
// 	name: 'kisik',
// 	age: 30,
// }

// user.say = function () {
// 	alert('hello!')
// }
// user.say()

// let user = {
// 	name: 'kisik',
// 	age: 30,

// 	say() {
// 		alert(this.name)
// 	}
// }


// let user = {
// 	name: 'kisik',
// 	hi() {
// 		alert(this.name)
// 	}
// }

// let hi = user.hi
// hi()


  


// function Accumulator(startingValue) {
// 	this.value = startingValue;

// 	this.read = function() {
// 		this.value += +prompt('вводи число педик', 0)
// 	}
// }

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value); // выведет сумму этих значений





// let calculator = {
// 	sum() {
// 		return this.a + this.b
// 	},

// 	mul() {
// 		return this.a * this.b
// 	},

// 	read() {
// 		this.a = +prompt('a', 0);
// 		this.b = +prompt('b', 0)
// 		}
//  };
  
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );





// function Calculator () {
// 	this.read = function() {
// 		this.a = +prompt('a', 0),
// 		this.b = +prompt('b', 0)
// 	}
// 	this.sum = function() {
// 		return	this.a + this.b;
// 	}

// 	this.mul = function() {
// 		return	this.a * this.b
// 	}

// }

// let calculator = new Calculator();

// calculator.read();
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );


// function random(min, max) {
// 	return min + Math.random() * (max - min);
//   }
  


// function Calculator() {

// 	this.methods = {
// 	  "-": (a, b) => a - b,
// 	  "+": (a, b) => a + b
// 	};
  
// 	this.calculate = function(str) {
  
// 	  let split = str.split(' '),
// 		a = +split[0],
// 		op = split[1],
// 		b = +split[2]
  
// 	  if (!this.methods[op] || isNaN(a) || isNaN(b)) {
// 		return NaN;
// 	  }
  
// 	  return this.methods[op](a, b);
// 	}
  
// 	this.addMethod = function(name, func) {
// 	  this.methods[name] = func;
// 	};
//   }

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10