//log variables
let color = '0'
let wheels = '0'
let power = '0'
let seats = '0'

let log = []

//color
const colorItems = document.querySelector('#color').children[1]

colorItems.children[0].addEventListener('click', () => {
    colorItems.children[0].classList.toggle('on')
    colorItems.children[1].classList.remove('on')
    colorItems.children[2].classList.remove('on')
    colorItems.children[3].classList.remove('on')
    color = '0'
})
colorItems.children[1].addEventListener('click', () => {
    colorItems.children[0].classList.remove('on')
    colorItems.children[1].classList.toggle('on')
    colorItems.children[2].classList.remove('on')
    colorItems.children[3].classList.remove('on')
    color = '1'
})
colorItems.children[2].addEventListener('click', () => {
    colorItems.children[0].classList.remove('on')
    colorItems.children[1].classList.remove('on')
    colorItems.children[2].classList.toggle('on')
    colorItems.children[3].classList.remove('on')
    color = '2'
})
colorItems.children[3].addEventListener('click', () => {
    colorItems.children[0].classList.remove('on')
    colorItems.children[1].classList.remove('on')
    colorItems.children[2].classList.remove('on')
    colorItems.children[3].classList.toggle('on')
    color = '3'
})

//wheels
const wheelItems = document.querySelector('#wheels').children[1]

wheelItems.children[0].addEventListener('click', () => {
    wheelItems.children[0].classList.toggle('on')
    wheelItems.children[1].classList.remove('on')
    wheelItems.children[2].classList.remove('on')
    wheelItems.children[3].classList.remove('on')
    wheels = '0'
})
wheelItems.children[1].addEventListener('click', () => {
    wheelItems.children[0].classList.remove('on')
    wheelItems.children[1].classList.toggle('on')
    wheelItems.children[2].classList.remove('on')
    wheelItems.children[3].classList.remove('on')
    wheels = '1'
})
wheelItems.children[2].addEventListener('click', () => {
    wheelItems.children[0].classList.remove('on')
    wheelItems.children[1].classList.remove('on')
    wheelItems.children[2].classList.toggle('on')
    wheelItems.children[3].classList.remove('on')
    wheels = '2'
})
wheelItems.children[3].addEventListener('click', () => {
    wheelItems.children[0].classList.remove('on')
    wheelItems.children[1].classList.remove('on')
    wheelItems.children[2].classList.remove('on')
    wheelItems.children[3].classList.toggle('on')
    wheels = '3'
})

//power
const powerItems = document.querySelector('#power').children[1]

powerItems.children[0].addEventListener('click', () => {
    powerItems.children[0].classList.toggle('on')
    powerItems.children[1].classList.remove('on')
    powerItems.children[2].classList.remove('on')
    powerItems.children[3].classList.remove('on')
    power = '0'
})
powerItems.children[1].addEventListener('click', () => {
    powerItems.children[0].classList.remove('on')
    powerItems.children[1].classList.toggle('on')
    powerItems.children[2].classList.remove('on')
    powerItems.children[3].classList.remove('on')
    power = '1'
})
powerItems.children[2].addEventListener('click', () => {
    powerItems.children[0].classList.remove('on')
    powerItems.children[1].classList.remove('on')
    powerItems.children[2].classList.toggle('on')
    powerItems.children[3].classList.remove('on')
    power = '2'
})
powerItems.children[3].addEventListener('click', () => {
    powerItems.children[0].classList.remove('on')
    powerItems.children[1].classList.remove('on')
    powerItems.children[2].classList.remove('on')
    powerItems.children[3].classList.toggle('on')
    power = '3'
})

//seats
const seatItems = document.querySelector('#seats').children[1]

seatItems.children[0].addEventListener('click', () => {
    seatItems.children[0].classList.toggle('on')
    seatItems.children[1].classList.remove('on')
    seatItems.children[2].classList.remove('on')
    seatItems.children[3].classList.remove('on')
    seats = '0'
})
seatItems.children[1].addEventListener('click', () => {
    seatItems.children[0].classList.remove('on')
    seatItems.children[1].classList.toggle('on')
    seatItems.children[2].classList.remove('on')
    seatItems.children[3].classList.remove('on')
    seats = '1'
})
seatItems.children[2].addEventListener('click', () => {
    seatItems.children[0].classList.remove('on')
    seatItems.children[1].classList.remove('on')
    seatItems.children[2].classList.toggle('on')
    seatItems.children[3].classList.remove('on')
    seats = '2'
})
seatItems.children[3].addEventListener('click', () => {
    seatItems.children[0].classList.remove('on')
    seatItems.children[1].classList.remove('on')
    seatItems.children[2].classList.remove('on')
    seatItems.children[3].classList.toggle('on')
    seats = '3'
})
//log display
const logBtn = document.querySelector('#logBtn')
const logs = document.querySelector('#logs')
const ol = document.querySelector('ol')

logBtn.addEventListener('click', () => {
    logs.classList.toggle('on')
})

//submit
const submitBtn = document.querySelector('#submit')
submitBtn.addEventListener('click', () => {
    console.log(color + wheels + power + seats)
    log.push(color + wheels + power + seats)

    const li = document.createElement('li')
    li.textContent = color + wheels + power + seats
    ol.appendChild(li)
})

