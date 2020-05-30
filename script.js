const numbers = document.querySelectorAll('.number')
const calcScreen = document.querySelector('.calculator-screen')
const operators = document.querySelectorAll('.operator')
const equalSign = document.querySelector('.equal-sign')
console.log(equalSign)

let curr_number = '0'
let prev_number = "0"
let curr_operator = ''


const updateScreen = ((number) => {
    calcScreen.value = number


})

const inputNumber = (number) =>
{
    if(curr_number == 0)
    {
         curr_number = number
    }
    else
    {
        curr_number += number
    }
}


numbers.forEach((number) => {
    number.addEventListener('click',(event) => {
        inputNumber(event.target.value)
        updateScreen(curr_number)
    })

})

const inputOperator = (operator) => {
    prev_number = curr_number
    curr_operator = operator
    curr_number = '0'

}
operators.forEach((operator) => {
    operator.addEventListener('click',(event) => {
        inputOperator(event.target.value)
        
    })

})

const calculate = () => {
    let result = 0
    let cn = parseInt(curr_number)
    let pn = parseInt(prev_number)
    switch(curr_operator)
    {
        case '+':result = cn + pn
                break
        case '-': result = pn - cn
                break
        case '*': result = pn*cn
                break
        case '/': result = pn/cn
                break
    }
    curr_number = result.toString()
    curr_operator = ''
}

equalSign.addEventListener('click',() =>{
    calculate()
    updateScreen(curr_number)
})
