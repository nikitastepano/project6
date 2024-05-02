// const menuPeople = document.querySelector('.menu-people')
// const btnPeopleOpen = document.querySelector('.btn-people-open')
// const btnMenuPeopleClose = document.querySelector('.btn-menu-people-close')
// const menu = document.querySelector('.menu')
// const openbtn = document.getElementById('openbtn')

// btnPeopleOpen.addEventListener('click', function () {
//   menuPeople.style.transform = 'translate(0)'
//   menuPeople.style.transition = '0.5s transform'

//   container.classList.add('container-hidden-second')

//   menu.style.removeProperty('transform')

//   document.body.addEventListener('click', menuPeopleClose)
// })

// btnMenuPeopleClose.addEventListener('click', function () {
//   menuPeople.style.removeProperty('transform')

//   container.classList.remove('container-hidden-second')
//   document.body.removeEventListener('click', menuPeopleClose)

//   setTimeout(function () {
//     menuPeople.style.removeProperty('transition')
//   }, 200)
// })

// function menuPeopleClose(event) {
//   if (
//     !menuPeople.contains(event.target) &&
//     !event.target.closest('.btn-people-open')
//   ) {
//     menuPeople.style.removeProperty('transform')

//     container.classList.remove('container-hidden-second')

//     setTimeout(function () {
//       menuPeople.style.removeProperty('transition')
//     }, 200)
//   }
// }

const menuPeople = document.querySelector('.menu-people')
const btnPeopleOpen = document.querySelector('.btn-people-open')
const btnMenuPeopleClose = document.querySelector('.btn-menu-people-close')
const menu = document.querySelector('.menu')
const openbtn = document.getElementById('openbtn')

btnPeopleOpen.addEventListener('click', function () {
  menuPeople.style.transform = 'translate(0)'
  menuPeople.style.transition = '0.5s transform'
  container.classList.add('container-hidden-second')
  menu.style.removeProperty('transform')
  document.body.addEventListener('click', menuPeopleClose)

  if (window.innerWidth >= 1440) {
    // Выполняем смещение кнопки на 58px влево и 30px вниз
    btnMenuPeopleClose.style.position = 'relative';
    btnMenuPeopleClose.style.left = '-58px';
    btnMenuPeopleClose.style.top = '30px';
  }
})

btnMenuPeopleClose.addEventListener('click', function () {
  menuPeople.style.removeProperty('transform')
  container.classList.remove('container-hidden-second')
  document.body.removeEventListener('click', menuPeopleClose)
  setTimeout(function () {
    menuPeople.style.removeProperty('transition')
  }, 200)

  if (window.innerWidth >= 1440) {
    // Выполняем смещение кнопки на 58px влево и 30px вниз
    btnMenuPeopleClose.style.position = 'relative';
    btnMenuPeopleClose.style.left = '0';
    btnMenuPeopleClose.style.top = '0';
  }
})

function menuPeopleClose(event) {
  if (
    !menuPeople.contains(event.target) &&
    !event.target.closest('.btn-people-open') &&
    event.target.id !== 'openbtn'
  ) {
    menuPeople.style.removeProperty('transform')
    container.classList.remove('container-hidden-second')
    setTimeout(function () {
      menuPeople.style.removeProperty('transition')
    }, 200)

    if (window.innerWidth >= 1440) {
      // Выполняем смещение кнопки на 58px влево и 30px вниз
      btnMenuPeopleClose.style.position = 'relative';
      btnMenuPeopleClose.style.left = '0';
      btnMenuPeopleClose.style.top = '0';
    }
  }
}

openbtn.addEventListener('click', function (event) {
  event.stopPropagation()
  menuPeople.style.transform = 'translate(0)'
  menuPeople.style.transition = '0.5s transform'
  container.classList.add('container-hidden-second')
  menu.style.removeProperty('transform')
  document.body.addEventListener('click', menuPeopleClose)
})
