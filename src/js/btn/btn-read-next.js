var btntexnology = document.getElementById('toggleButtonnext')

var contentf = document.getElementById('texnology__content-hiden1')
var contents = document.getElementById('texnology__content-hiden2')

btntexnology.addEventListener('click', function () {
  if (btntexnology.textContent === 'Показать все') {
    contentf.style.display = 'flex'
    contents.style.display = 'flex'
    btntexnology.textContent = 'Скрыть'
  } else {
    btntexnology.textContent = 'Показать все'
    contentf.style.display = 'none'
    contents.style.display = 'none'
  }
})
