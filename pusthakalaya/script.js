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
const banners = document.querySelector('.banners')
banners.style.backgroundColor = 'red'
banners.scroll({
    left=0
}
)