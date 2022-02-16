var $circle = document.querySelector('.circle');
var $container = document.querySelector('.container');
var isOn = true;

function changeColor(event) {
  isOn = !isOn;
  if (isOn) {
    $circle.className = ('circle light-mode-circle light-mode-box-shadow');
    $container.className = ('container light-mode-background');
  } else {
    $container.className = ('container dark-mode-background');
    $circle.className = ('circle dark-mode-circle dark-mode-box-shadow');
  }
}

$circle.addEventListener('click', changeColor)
