window.onload = function () {
    var scrollbarWidth = window.innerWidth - document.body.clientWidth;
    document.body.style.setProperty("--scrollbarWidth", "".concat(scrollbarWidth, "px"));
};
window.onresize = function () {
    var scrollbarWidth = window.innerWidth - document.body.clientWidth;
    document.body.style.setProperty("--scrollbarWidth", "".concat(scrollbarWidth, "px"));
};
var wheel = document.querySelector('.wheel');
window.onload = function () {
    wheel.classList.toggle('load');
};
window.addEventListener('DOMContentLoaded', function () {
    wheel.classList.toggle("load");
});
var CTA = document.querySelector('#CTA');
CTA.addEventListener('click', function () {
    CTA.textContent = 'Done!';
    CTA.classList.add('clicked');
});
console.log("done");
