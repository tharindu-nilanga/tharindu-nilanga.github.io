num1 = document.querySelector('#num1')
num2 = document.querySelector('#num2')
plusBtn = document.querySelector('#btn1')
minusBtn = document.querySelector('#btn2')
multiplyBtn = document.querySelector('#btn3')
devideBtn = document.querySelector('#btn4')
answer = document.querySelector('.answer')

plusBtn.addEventListener('click', () => {
    answer.innerText = parseInt(num1.value)+parseInt(num2.value)
})
minusBtn.addEventListener('click', () => {
    answer.innerText = parseInt(num1.value)-parseInt(num2.value)
})
multiplyBtn.addEventListener('click', () => {
    answer.innerText = parseInt(num1.value)*parseInt(num2.value)
})
devideBtn.addEventListener('click', () => {
    answer.innerText = parseInt(num1.value)/parseInt(num2.value)
})