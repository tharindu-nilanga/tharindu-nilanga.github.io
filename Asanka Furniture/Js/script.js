class Element{
    constructor(color, round, border){
        this.color = color
        this.round = round
        this.border = border
    }
}

const body = document.body
const element = document.querySelector('#element')
const buttons = document.querySelectorAll('button')
const color = document.querySelector('#color')
const round = document.querySelector('#roundUp')
const border = document.querySelector('#border')
// const color = document.querySelector
// const color = document.querySelector
// const color = document.querySelector

const randomize = max => Math.floor(Math.random() * max + 1)
const BORDERS = ['solid', 'dashed', 'dotted', 'double', 'groove', 'none', 'hidden']

const object = new Element(`rgb(63, 111, 216)`)

setInterval(() => {
    element.style.setProperty('--color', object.color)
    element.style.setProperty('--round', object.round)
    element.style.setProperty('--border', object.border)
    
},100)


// console.log(buttons)

//animation
buttons.forEach((btn) => {
    let width = 0
    btn.onclick = (e) => {
        switch(e.target.id){
            case 'color':
                object.color = `rgb(${randomize(255)}, ${randomize(255)}, ${randomize(255)})`
                break

            case 'roundUp':
                object.round =`${randomize(5)}em`
                break

            case 'border':
                object.border = `${randomize(10)}px ${BORDERS[randomize(BORDERS.length)]} rgb(${randomize(255)}, ${randomize(255)}, ${randomize(255)})`
                break

            case 'move':
                element.dataset.method = 'move'
                break
            case 'rotate':
                element.dataset.method = "rotate"
                break
            case 'jump':
                element.dataset.method = 'jump'
                break
        }
        console.log('working')
        width += 20
        e.target.style.setProperty('--width', `${width}px`)

        setInterval(() => {
        width!=0?width-=1:width=width
        e.target.style.setProperty('--width', `${width}px`)
        },500)
    }
})