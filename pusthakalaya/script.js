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
    banners.scroll([updateSize()/100*91*focusCard], 0)
}
defaultCard()

function scrollLeft(){
    if(focusCard != 0){
        focusCard -= 1
        banners.scroll([updateSize()/100*91*focusCard], 0)
    }
}
function scrollRight(){
    if(focusCard != 2){
        focusCard += 1
        banners.scroll([updateSize()/100*91*focusCard], 0)
    }
}
leftArrow.addEventListener('click', scrollLeft)
rightArrow.addEventListener('click', scrollRight)
window.addEventListener("resize", updateSize);

// snap

function snap(){
    console.log(`scrollLeft = ${banners.scrollLeft}`) 
    console.log(`rightCondition = ${updateSize()/100*91*focusCard/100*120}`) 
    console.log(`leftCondition = ${updateSize()/100*91*focusCard/100*80}`) 
    // left
    if(banners.scrollLeft < updateSize()/100*focusCard/100*80 && focusCard!=0){
        focusCard -= 1
        banners.scroll([updateSize()/100*91*focusCard],0)
    }
    // right
    if(banners.scrollLeft > updateSize()/100*91*focusCard/100*120 && focusCard!=2){
        focusCard += 1
        banners.scroll([updateSize()/100*91*focusCard],0)
    }
    
}
banners.addEventListener('scroll',snap)


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
// refresh
function refresh(){
    if(!searchBar.classList.contains('on')){
    location.reload()}
}
window.addEventListener("resize", refresh);       

