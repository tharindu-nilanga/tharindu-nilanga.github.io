// background Animation
const tween = KUTE.fromTo(
  "#blob1",
  { path: "#blob1" },
  { path: "#blob2" },
  { repeat: 999, duration: 3000, yoyo: true }
);
tween.start();

const tween1 = KUTE.fromTo(
  "#blobBlue1",
  { path: "#blobBlue1" },
  { path: "#blobBlue2" },
  { repeat: 999, duration: 3000, yoyo: true }
);
tween1.start();

const blob = document.querySelector(".blob");
const blobBlue = document.querySelector(".blobBlue");

const random = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);

setInterval(() => {
  blob.animate(
    {
      top: `${random(
        document.body.clientHeight - blob.clientHeight,
        -100
      )}px`,
      left: `${random(30, -10)}%`,
    },
    { duration: 20000, fill: "forwards" }
  );
  blobBlue.animate(
    {
      top: `${random(
        document.body.clientHeight - blobBlue.clientHeight,
        -100
      )}px`,
      left: `${random(30, -10)}%`,
    },
    { duration: 20000, fill: "forwards" }
  );
}, 20000);

//card hover anime

//nav
const navBlob = document.querySelector(".nav__blob");
const nav = document.querySelector(".nav");

nav.addEventListener("mousemove", (event) => {
  const X = event.offsetX;
  const Y = event.offsetY;
  navBlob.animate(
    { top: `${Y}px`, left: `${X}px` },
    { duration: 5000, fill: "forwards" }
  );
});

//skill cards

const skillsCards = document.querySelectorAll(".skills__item");

skillsCards.forEach((item) => {
  item.addEventListener("mousemove", (event) => {
    const X = event.offsetX;
    const Y = event.offsetY;
    item.children[0].animate(
      { top: `${Y}px`, left: `${X}px` },
      { duration: 3000, fill: "forwards" }
    );
  });
});

//about
const about = document.querySelector('#about')
const aboutBlob = document.querySelector('#about__blob')

about.addEventListener("mousemove", (event) => {
  const X = event.offsetX;
  const Y = event.offsetY;
  aboutBlob.animate(
    { top: `${Y}px`, left: `${X}px` },
    { duration: 5000, fill: "forwards" }
  );
});

//content
const contact = document.querySelector('#contact')
const contactBlob = document.querySelector('#contact__blob')

contact.addEventListener("mousemove", (event) => {
  const X = event.offsetX;
  const Y = event.offsetY;
  contactBlob.animate(
    { top: `${Y}px`, left: `${X}px` },
    { duration: 5000, fill: "forwards" }
  );
});