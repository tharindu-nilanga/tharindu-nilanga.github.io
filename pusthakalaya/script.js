
const banners = document.querySelector('.banner_scroll')
const rightArrow = document.querySelector('.right_arrow')
const leftArrow = document.querySelector('.left_arrow')

banners.scroll(0,0)

let scrollPosition = 0
function updateSize(){
    let viewportWidth = window.innerWidth;
    return viewportWidth;
}
updateSize()
function scrollLeft(){
    scrollPosition -= updateSize();
    banners.scroll(scrollPosition,0 )
}
leftArrow.addEventListener('click', scrollLeft)
function scrollRight(){
    scrollPosition += updateSize();
    banners.scroll(scrollPosition,0)
}
rightArrow.addEventListener('click', scrollRight)


window.addEventListener("resize", updateSize);       
console.log(updateSize())