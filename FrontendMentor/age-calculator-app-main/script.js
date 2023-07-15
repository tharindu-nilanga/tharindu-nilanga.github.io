const dayInput = document.querySelector('#dayInput')
const monthInput =document.querySelector('#monthInput')
const yearInput = document.querySelector('#yearInput')
const dMSyntax = /\d{1,5}/
const submitBtn = document.querySelector('#submit')
const form = document.querySelector('#form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
})

const daysOfMonths = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
    s2: 29,
}
const date = new Date();
const currentYear = date.getFullYear()
const currentDay = date.getDate()
const currentMonth = date.getMonth() + 1

const validate = (day, month, year) => {
    if(year <= currentYear && year != 0){
        let monthIndex = month
        if(year % 4 == 0){
            monthIndex = 's2'
        }
        if(year == currentYear && month <= currentMonth && month != 0 && month <= 12){
            if(month == currentMonth && day <= currentDay && day != 0){
                if(day <= daysOfMonths[monthIndex]){
                    return true
                }
            }

        }
        if(month <= 12 && month != 0){
            if(day <= daysOfMonths[monthIndex] && day != 0){
                return true
            }
        }
    }
}

const dayCounter = (day, month, year) => {
    const daysOfMonthsCopy = {...daysOfMonths}
    delete daysOfMonthsCopy['s2']
    let dayCount = (currentYear - year) * 365
    let highYears = Math.floor((currentYear - year) / 4 )
    if(year % 4 == 0 && month <= 2){
        highYears += 1
    }
    dayCount -= highYears

    let daysToDecrement = day
    let daysToIncrement = currentDay

    for(let key=1; key<month; key++){
            daysToDecrement += daysOfMonthsCopy[`${key}`]
    }
    for(let key=1; key<currentMonth; key++){
            daysToIncrement += daysOfMonthsCopy[`${key}`]
    }

    dayCount -= daysToDecrement
    dayCount += daysToIncrement

    return dayCount
}
const countAge = (dayCount) => {
    const daysOfMonthsCopy = {...daysOfMonths}
    delete daysOfMonthsCopy['s2']

    let yearsCount = Math.floor(dayCount / 365)
    let monthsCount = 0
    let remainder = dayCount % 365
    for(let key=1; remainder > daysOfMonthsCopy[`${key}`]; key++){
        monthsCount++
        remainder -= daysOfMonthsCopy[`${key}`]     
    }
    let daysCount = remainder
    
    return [daysCount,monthsCount,yearsCount]
}

const day = document.querySelector('#day')
const month = document.querySelector('#month')
const year = document.querySelector('#year')

yearInput.setAttribute('max', `${currentYear}`)

submitBtn.onclick = () => {
    if(dMSyntax.test(dayInput.value) && dMSyntax.test(monthInput.value) && dMSyntax.test(yearInput.value)){
        if(validate(parseInt(dayInput.value), parseInt(monthInput.value), parseInt(yearInput.value))){
            const dayCount = dayCounter(parseInt(dayInput.value), parseInt(monthInput.value), parseInt(yearInput.value))
            const ageArr = countAge(dayCount)

            let yearTemp = 0
            const Interval = setInterval(()=>{
                yearTemp += 1
                year.textContent = yearTemp
                if(yearTemp == ageArr[2]){
                    clearInterval(Interval)
                }
            },100)
            let monthTemp = 0
            const Interval1 = setInterval(()=>{
                monthTemp += 1
                month.textContent = monthTemp
                if(monthTemp == ageArr[1]){
                    clearInterval(Interval1)
                }
            },100)
            let dayTemp = 0
            const Interval2 = setInterval(()=>{
                dayTemp += 1
                day.textContent = dayTemp
                if(dayTemp == ageArr[0]){
                    clearInterval(Interval2)
                }
            },100)
        }

    }
    
    
}