// background Animation
var tween = KUTE.fromTo("#blob1", { path: "#blob1" }, { path: "#blob2" }, { repeat: 999, duration: 3000, yoyo: true });
tween.start();
var tween1 = KUTE.fromTo("#blobBlue1", { path: "#blobBlue1" }, { path: "#blobBlue2" }, { repeat: 999, duration: 3000, yoyo: true });
tween1.start();
var blob = document.querySelector(".blob");
var blobBlue = document.querySelector(".blobBlue");
var random = function (max, min) { return Math.floor(Math.random() * (max - min + 1) + min); };
setInterval(function () {
    blob.animate({
        top: "".concat(random(document.body.clientHeight - blob.clientHeight, -100), "px"),
        left: "".concat(random(30, -10), "%"),
    }, { duration: 20000, fill: "forwards" });
    blobBlue.animate({
        top: "".concat(random(document.body.clientHeight - blobBlue.clientHeight, -100), "px"),
        left: "".concat(random(30, -10), "%"),
    }, { duration: 20000, fill: "forwards" });
}, 20000);
//card hover anime
//nav
var navBlob = document.querySelector(".nav__blob");
var nav = document.querySelector(".nav");
nav.addEventListener("mousemove", function (event) {
    var X = event.offsetX;
    var Y = event.offsetY;
    navBlob.animate({ top: "".concat(Y, "px"), left: "".concat(X, "px") }, { duration: 5000, fill: "forwards" });
});
//skill cards
var skillsCards = document.querySelectorAll(".skills__item");
skillsCards.forEach(function (item) {
    item.addEventListener("mousemove", function (event) {
        var X = event.offsetX;
        var Y = event.offsetY;
        item.children[0].animate({ top: "".concat(Y, "px"), left: "".concat(X, "px") }, { duration: 3000, fill: "forwards" });
    });
});
//about
var about = document.querySelector('#about');
var aboutBlob = document.querySelector('#about__blob');
about.addEventListener("mousemove", function (event) {
    var X = event.offsetX;
    var Y = event.offsetY;
    aboutBlob.animate({ top: "".concat(Y, "px"), left: "".concat(X, "px") }, { duration: 5000, fill: "forwards" });
});
//content
var contact = document.querySelector('#contact');
var contactBlob = document.querySelector('#contact__blob');
contact.addEventListener("mousemove", function (event) {
    var X = event.offsetX;
    var Y = event.offsetY;
    contactBlob.animate({ top: "".concat(Y, "px"), left: "".concat(X, "px") }, { duration: 5000, fill: "forwards" });
});
