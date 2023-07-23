window.onload = function () {
  var scrollbarWidth = window.innerWidth - document.body.clientWidth
  document.body.style.setProperty(
    "--scrollbarWidth", `${scrollbarWidth}px`)
  console.log("done")
}
window.onresize = function () {
  var scrollbarWidth = window.innerWidth - document.body.clientWidth
  document.body.style.setProperty(
    "--scrollbarWidth", `${scrollbarWidth}px`)
  console.log("done")
}
const wheel = document.querySelector('.wheel')
window.onload = () => {
  wheel.classList.toggle('load')
}
window.addEventListener('DOMContentLoaded', () => {
  wheel.classList.toggle("load")
})

const CTA = document.querySelector('#CTA')
CTA.addEventListener('click', () => {
  CTA.textContent = 'Done!'
  CTA.classList.add('clicked')
})
