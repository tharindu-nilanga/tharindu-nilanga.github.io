// // window.onload = () => {
// //     let scrollbarWidth = window.innerWidth - document.body.clientWidth
// //     document.body.style.setProperty('--scrollbarWidth', `${scrollbarWidth}px`)
// // }
// // window.onresize = () => {
// //     let scrollbarWidth = window.innerWidth - document.body.clientWidth
// //     document.body.style.setProperty('--scrollbarWidth', `${scrollbarWidth}px`)
// // }
// window.onload = () => {
//     // Create a dummy element
//     const dummyElement = document.createElement('div');
//     dummyElement.style.width = '100px';
//     dummyElement.style.height = '100px';
//     dummyElement.style.overflow = 'scroll';
//     dummyElement.style.visibility = 'hidden';
    
//     // Append the dummy element to the document
//     document.body.appendChild(dummyElement);
    
//     // Calculate the scrollbar width
//     const scrollbarWidth = dummyElement.offsetWidth - dummyElement.clientWidth;
    
//     // Remove the dummy element
//     document.body.removeChild(dummyElement);
    
//     document.body.style.setProperty('--scrollbarWidth', `${scrollbarWidth}px`)
//   }
// window.onresize = () => {
//     // Create a dummy element
//     const dummyElement = document.createElement('div');
//     dummyElement.style.width = '100px';
//     dummyElement.style.height = '100px';
//     dummyElement.style.overflow = 'scroll';
//     dummyElement.style.visibility = 'hidden';
    
//     // Append the dummy element to the document
//     document.body.appendChild(dummyElement);
    
//     // Calculate the scrollbar width
//     const scrollbarWidth = dummyElement.offsetWidth - dummyElement.clientWidth;
    
//     // Remove the dummy element
//     document.body.removeChild(dummyElement);
    
//     document.body.style.setProperty('--scrollbarWidth', `${scrollbarWidth}px`)
//   }
  
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

const img = document.querySelector('#img')
const imgDialog = document.querySelector('#imgDialog')
const closeImgDialog = document.querySelector('#closeImgDialog')

img?.addEventListener('click', () => {
  imgDialog.showModal()
})
closeImgDialog?.addEventListener('click', () => {
  imgDialog.close()
})