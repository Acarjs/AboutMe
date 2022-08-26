const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
const circle = document.querySelector('.circle')

open.addEventListener('click', function () {
  container.classList.add('show-nav')
  circle.style.transform = 'rotate(-70deg)'
  console.log(circle)
})

close.addEventListener('click', function () {
  container.classList.remove('show-nav')
  circle.style.transform = 'rotate(0deg)'
})
