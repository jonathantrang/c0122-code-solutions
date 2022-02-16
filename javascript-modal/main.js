var $button = document.querySelector('.open-modal-button');
var $hiddenRow = document.querySelector('.modal-row-inactive');
var $overlay = document.querySelector('.overlay-inactive');
var $modalButton = document.querySelector('.modal-button');

function openModal(event) {
  if ($button.className === 'open-modal-button') {
    $hiddenRow.className = ('modal-row-active');
    $overlay.className = ('overlay-active');
  }
}

function closeModal(event) {
  if ($modalButton.className === 'modal-button'); {
    $hiddenRow.className = 'modal-row-inactive';
    $overlay.className = 'overlay-inactive';
  }
}

$button.addEventListener('click', openModal);
$modalButton.addEventListener('click', closeModal);
