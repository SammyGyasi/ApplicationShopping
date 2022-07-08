const displayScreen = document.querySelector('.displayScreen')
const controlButtons = document.querySelector('.controls').children
const allOperands = ['+', '-', 'x', '÷', '%', 'C', '=']


let firstValue = ''
let secondValue = ''
let operand = ''
let result = ''

const calculate = () => {
    firstValue = parseFloat(firstValue)
    secondValue = parseFloat(secondValue)

    if (operand === '+') { result = firstValue + secondValue }
    if (operand === '-') { result = firstValue - secondValue }
    if (operand === 'x') { result = firstValue * secondValue }
    if (operand === '÷') { result = firstValue / secondValue }
    if (operand === '%') { result = firstValue % secondValue }



    displayScreen.innerText = result
    firstValue = result
    secondValue = ''

}

/*
for (let button of controlButtons) {
    button.addEventListener('click', () => {
        const { innerText: btnValue } = button

        const buttonValueIsOperand = allOperands.includes(btnValue)

        if (firstValue && buttonValueIsOperand) {
            secondValue && calculate()
            operand = btnValue
        }

        else if (!operand) { firstValue += btnValue }
        else if (operand) { secondValue += btnValue }

        if (btnValue !== '=') { displayScreen.innerText += btnValue }

        //displayScreen.innerText += button.innerText
    })
} */

for (let button of controlButtons) {
    button.addEventListener('click', () => {

        const buttonValueIsOperand = allOperands.includes(button.innerText)


        if (button.innerText === 'Clc') {
            firstValue = secondValue = operand = ''
            return displayScreen.innerText = ''
        }

        if (button.innerText === 'Del') {
            displayScreen.innerText = displayScreen.innerText.slice(0, -1)
            return displayScreen.innerText
        }




        if (!secondValue && button.innerText === '=') {
            return null
        }

        if (firstValue && buttonValueIsOperand) {
            secondValue && calculate()
            operand = button.innerText
        }

        else if (!operand) { firstValue += button.innerText }
        else if (operand) { secondValue += button.innerText }

        if (button.innerText !== '=') { displayScreen.innerText += button.innerText }

        //displayScreen.innerText += button.innerText
    })
}









