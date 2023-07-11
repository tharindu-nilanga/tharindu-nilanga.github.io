const contactBtn = document.querySelector('#contact')
const dilaog = document.querySelector('.copy-dialog')
const closeBtn = document.querySelector('#close')
const copyBtn = document.querySelector('#copy')

contactBtn?.addEventListener('click', () => {
  dilaog.showModal()
})
closeBtn?.addEventListener('click', ()=> {
  dilaog?.close()
})
const copyContent = async () => {
  try {
    await navigator.clipboard.writeText('+94 76 415 3541');
    copyBtn.textContent = "copied!"
    copyBtn?.classList.add('done')
  } catch (err) {
    console.error('Failed to copy: ', err);
    copyBtn.textContent = "failed!"
    copyBtn?.classList.add('failed')
  }
}
copyBtn?.addEventListener('click', () => {
  copyContent()
})


const img = document.querySelectorAll('#img')
const imgDialog = document.querySelectorAll('#imgDialog')
const closeImgDialog = document.querySelectorAll('#closeImgDialog')

let Scroll

for(let i = 0; 1 < img.length; i++){
  img[i].addEventListener('click', () => {
    Scroll = window.scrollY
    window.scrollTo(0 ,0)
    document.body.classList.add('disableScroll')
    imgDialog[i].showModal()
  })
  closeImgDialog[i].addEventListener('click', () => {
    document.body.classList.remove('disableScroll')
    window.scrollTo(0 ,Scroll)
    imgDialog[i].close()
  })
}
