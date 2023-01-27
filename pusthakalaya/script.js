// initial


//banners

const banners = document.querySelector('.banner_scroll')
const rightArrow = document.querySelector('.right_arrow')
const leftArrow = document.querySelector('.left_arrow')

function updateSize(){
    let viewportWidth = window.innerWidth;
    return viewportWidth;
}
let focusCard = 1;
updateSize()

function defaultCard(){
    banners.scrollLeft = updateSize()/100*91*focusCard
}
defaultCard()

function scrollLeft(){
    if(focusCard != 0){
        focusCard -= 1
        banners.scrollLeft = updateSize()/100*91*focusCard
    }
}
function scrollRight(){
    if(focusCard != 2){
        focusCard += 1
        banners.scrollLeft = updateSize()/100*91*focusCard
    }
}
leftArrow.addEventListener('click', scrollLeft)
rightArrow.addEventListener('click', scrollRight)
window.addEventListener("resize", updateSize);

// snap


setInterval(() => {
    // left
        if(banners.scrollLeft < updateSize()/100*91*focusCard/100*95 && focusCard>0){
            focusCard -= 1
            banners.scrollLeft = updateSize()/100*91*focusCard
        }
        // right
        else if(banners.scrollLeft > updateSize()/100*91*focusCard/100*105 && focusCard<2){
            focusCard += 1
            banners.scrollLeft = updateSize()/100*91*focusCard
        }
        else{
            banners.scrollLeft = updateSize()/100*91*focusCard
        }
}, 1000);            


//search
let searchBarToggleClicks = 0;

const bodySection = document.querySelector('.body')
const searchEnable = document.querySelector('.searchIcon')
const searchBar = document.querySelector('.search2')
const searchInput = document.querySelector('.searchInput')

//search enable
function enableSearchBar(){
    searchBarToggleClicks += 1;
    searchBar.classList.add('on')
    searchInput.focus()
}
function diableSearchBar(){
    if(searchBarToggleClicks == 1){
        searchBar.classList.remove('on')
        searchInput.removeAttribute('autofocus')
        searchInput.value = ''
        searchBarToggleClicks = 0
    }
}
searchEnable.addEventListener('click',enableSearchBar)
bodySection.addEventListener('click', diableSearchBar)
banners.addEventListener('scroll', diableSearchBar)
// refresh
function refresh(){
    if(!searchBar.classList.contains('on')){
    location.reload()}
}
window.addEventListener("resize", refresh);       

//menu
const menuBtn = document.querySelector('.menu')
const menuIcon = document.querySelector('.menuIcon')
const menuIcon2 = document.querySelector('.menuDisable')

menuBtn.addEventListener('click',() => {
    menuBtn.classList.add('on')
})