// const inputName = document.querySelector('.name_input')
// const inputYear = document.querySelector('.year_input')
// const inputTown = document.querySelector('.town_input')

// const nameInBtn = document.querySelector('#nameInBtn')
// const yearInBtn = document.querySelector('#yearInBtn')
// const townInBtn = document.querySelector('#townInBtn')

// nameInBtn.addEventListener('click', () => {
//     inputName.dataset.active = "0"
//     inputYear.dataset.active = "1"
// })
// yearInBtn.addEventListener('click', () => {
//     inputYear.dataset.active = "0"
//     inputTown.dataset.active = "1"
// })
// townInBtn.addEventListener('click', () => {
//     inputTown.dataset.active = "0"
//     inputName.dataset.active = "1"
// })

const elements = document.querySelector('.input_section').children
const recordList = document.querySelector('.records')

for(let e = 0; e < elements.length; e++){
    console.log(e)
    var record = document.createElement('div')
    
    elements[e].children[1].addEventListener('click', () => {
        if (elements[0].children[0].value != 0 && e == 0){
            // const record = document.createElement('div')
            recordList.append(record)
            const name = document.createElement('span')
            name.textContent = elements[0].children[0].value
            record.append(name)
            record.style.display = 'grid'
            record.style.gridTemplateColumns = 'repeat(4, 1fr)'
            name.style.gridColumn = 'span 2'
            name.style.justifySelf = 'center'
        }
        if(e == 1){
            const year = document.createElement('span')
            year.textContent = elements[1].children[0].value
            record.append(year)
            year.style.justifySelf = 'center'
        } 
        if(e == 2){
            const town = document.createElement('span')
            town.textContent = elements[2].children[0].value
            record.append(town)
            record.style.display = 'grid'
            record.style.gridTemplateColumns = 'repeat(4, 1fr)'
            town.style.justifySelf = 'center'            
        }
    })

    elements[e].children[1].addEventListener('click', () => {
        if(elements[0].children[0].value != 0){
            elements[e].dataset.active = "0"
            e == elements.length-1? elements[e-2].dataset.active = "1" : elements[e+1].dataset.active = "1" 
        }
    })        
}

