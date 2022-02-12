var counter = 0;

var $hotbutton = document.querySelector('.hot-button');
var $clickcount = document.querySelector('.click-count');

function countCheck(event) {
  counter++;
  $clickcount = $clickcount.textContent = 'Clicks: ' + counter;
}

$hotbutton.addEventListener('click', countCheck);
