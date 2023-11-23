
var hamburger = document.getElementById('hamburger')
const mobileMenu = document.getElementById('mobile')
const topArrow = document.getElementById('top-arrow')
hamburger.addEventListener('click', () => {
  if(mobileMenu.style.display == 'block'){
    mobileMenu.style.display = 'none'
  
  }else {
    mobileMenu.style.display = 'block'
  }
  
})

topArrow.addEventListener('click', () => {
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
})


