const menu = document.querySelector('.menu')
const btnServicesOpen = document.querySelector('.btn-services-open')
const btnMenuClose = document.querySelector('.btn-meno-close')
const container = document.getElementById('container')

btnServicesOpen.addEventListener('click', function () {
  menu.style.transform = 'translateX(0)'
  menu.style.transition = '0.5s transform'
  menu.style.zIndex = '1000'

  container.classList.add('container-hidden')
  document.body.addEventListener('click', menuClose)
})

btnMenuClose.addEventListener('click', function () {
  menu.style.removeProperty('transform')

  container.classList.remove('container-hidden')
  document.body.removeEventListener('click', menuClose)

  setTimeout(function () {
    menu.style.removeProperty('transition')
    menu.style.removeProperty('Z-index')
  }, 200)
})

function menuClose(event) {
  if (
    !menu.contains(event.target) &&
    !event.target.closest('.btn-services-open')
  ) {
    menu.style.removeProperty('transform')

    container.classList.remove('container-hidden')

    setTimeout(function () {
      menu.style.removeProperty('transition')
      menu.style.removeProperty('Z-index')
    }, 200)
  }
}
