const counter = document.querySelector('.counter')
let count = 0
let speed = 1
let number = counter.innerHTML[1]

setInterval(() => {
    counter.classList.toggle('on')
    count += 1
    counter.innerHTML = count
    setTimeout(()=> {
        counter.classList.toggle('on')
    }, speed/100*90)
}, speed)
