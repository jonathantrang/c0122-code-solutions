var $button = document.querySelector('.open-modal-button');
var $hiddenRow = document.querySelector('.modal-row-inactive');
var $overlay = document.querySelector('.overlay-inactive');

function openModal(event) {
  if ($button.className === 'open-modal-button') {
    $hiddenRow.className = ('modal-row-active');
    $overlay.className = ('overlay-active');
  }
}

$button.addEventListener('click', openModal)
