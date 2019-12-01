
let ui = ['ac', '+/-', '%', '÷', 7, 8, 9, '×', 4, 5, 6, '-', 1, 2, 3, '+', 0, ',', '=']

let appNode = document.getElementById('app')
let inputNode = document.getElementById('result')

let result = 0
let intermediate = 0

let last = 0

let update = () => {
	inputNode.value = result
}

let init = () => {
	
	ui.map(el => {

		let button = document.createElement('button')
		button.value = el
		button.innerHTML = el

		if (el === 0) button.classList.add('wide')

		if (['ac', '+/-', '%'].includes(el)) button.classList.add('faded')
		if (['÷', '×', '-', '+', '='].includes(el)) button.classList.add('accent')

		button.addEventListener('click', () => {
			
			if (isNaN(+el)) { // operators

				intermediate = result

				// console.log(intermediate)

			} else { // digits

				// if (intermediate) result = 0
				if (intermediate) {
					result = 0
				

				}

				
				result = parseInt(result + '' + el)
				// console.log(result)

				update()
			}
		})

		appNode.appendChild(button)
	})

	update()
}

export default init


