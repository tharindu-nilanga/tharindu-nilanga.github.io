
const banners = document.querySelector('.banner_scroll')
const rightArrow = document.querySelector('.right_arrow')
const leftArrow = document.querySelector('.left_arrow')

let scrollPosition = 0
function updateSize(){
    let viewportWidth = window.innerWidth;
    return viewportWidth;
}
updateSize()
function defaultScrollPosition(){
    scrollPosition = updateSize()/100*91;
    banners.scroll([updateSize()/100*91],0)
}
defaultScrollPosition()

function scrollLeft(){
    if(scrollPosition != 0){
        scrollPosition -= updateSize()/100*91;
    }
    banners.scroll(scrollPosition,0 )
    console.log(scrollPosition);
}
function scrollRight(){
    if(scrollPosition != updateSize()/100*91*2){
        scrollPosition += updateSize()/100*91;
    }
    banners.scroll(scrollPosition,0)
    console.log(scrollPosition);
}
function refresh(){
    location.reload()
}
leftArrow.addEventListener('click', scrollLeft)
rightArrow.addEventListener('click', scrollRight)
window.addEventListener("resize", updateSize);       
window.addEventListener("resize", refresh);       

console.log(updateSize()/100*91*3)
console.log(scrollPosition)
console.log(updateSize())
