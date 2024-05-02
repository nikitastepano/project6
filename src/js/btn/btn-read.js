var toggleButton = document.getElementById('toggleButton')

var brendContents = document.getElementById('brend__content-hiden2')
var brendContentt = document.getElementById('brend__content-hiden3')
var brendContentn = document.getElementById('brend__content-hiden4')

toggleButton.addEventListener('click', function () {
  if (toggleButton.textContent === 'Показать все') {
    brendContents.style.display = 'flex'
    brendContentt.style.display = 'flex'
    brendContentn.style.display = 'flex'
    toggleButton.textContent = 'Скрыть'
  } else {
    toggleButton.textContent = 'Показать все'
    brendContents.style.display = 'none'
    brendContentt.style.display = 'none'
    brendContentn.style.display = 'none'
  }
})
