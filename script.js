
var hamburger = document.getElementById('hamburger')
const mobileMenu = document.getElementById('mobile')
hamburger.addEventListener('click', () => {
  if(mobileMenu.style.display == 'block'){
    mobileMenu.style.display = 'none'
  
  }else {
    mobileMenu.style.display = 'block'
  }
  
})


