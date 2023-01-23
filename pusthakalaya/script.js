// initial


//banners
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

leftArrow.addEventListener('click', scrollLeft)
rightArrow.addEventListener('click', scrollRight)
window.addEventListener("resize", updateSize);

//search
let searchBarToggleClicks = 0;

const bodySection = document.querySelector('.body')
const searchEnable = document.querySelector('.searchIcon')
const searchBar = document.querySelector('.search2')
const searchInput = document.querySelector('.searchInput')
const searchDisable = document.querySelector('.searchIcon2')

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
function incrementSearchBarToggleClicks(){
    searchBarToggleClicks += 1;
}
if (searchBarToggleClicks == 2){
    searchBar.classList.remove('on')
    searchBarToggleClicks = 0
}

searchEnable.addEventListener('click',enableSearchBar)
searchDisable.addEventListener('click', diableSearchBar)
bodySection.addEventListener('click', diableSearchBar)
// refresh
function refresh(){
    if(!searchBar.classList.contains('on')){
    location.reload()}
}
window.addEventListener("resize", refresh);       

