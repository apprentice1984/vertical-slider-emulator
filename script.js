const btnUp = document.getElementById('up')
const btnDown = document.getElementById('down')
const bgContainer = document.querySelector('.bgContainer')
const container = document.querySelector('.container')

let coef = 0

btnUp.addEventListener('click', (e) => {
  if (++coef > 3) coef = 0
  animateSlider()
})

btnDown.addEventListener('click', (e) => {
  if (--coef < 0) coef = 3
  animateSlider()
})

function animateSlider() {
  bgContainer.style.transform = `translateY(-${100 * coef}%)`
  container.style.transform = `translateY(-${300 - 100 * coef}%)`
}

console.log('Script ran...');
