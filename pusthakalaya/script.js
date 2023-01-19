// const body = document.querySelector('body')
// const container = document.querySelector('nav')
// const doc = document.documentElement

// function changeSibling(className){
//     const element = document.querySelector(className);
//     if(element.nextElementSibling == null){
//         container.children[0].style.backgroundColor = 'var(--eggplant)'
//     }else{
//         element.nextElementSibling.style.backgroundColor = 'var(--eggplant)'

//     }
// }
const banners = document.querySelector('.banner_scroll')

banners.scroll({
    left: 325
}
)
function scrollRight(){
    banners.scroll({
        right:10
    })
}
function scrollLeft(){
    banners.scroll({
        left:10
    })
}
const scrollPosition = banners.getBoundingClientRect()
console.log(scrollPosition)