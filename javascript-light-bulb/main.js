var $circle = document.querySelector('.circle');
var $container = document.querySelector('.container');
console.log($container.className);

function changeColor(event) {
  if ($circle.className === 'circle light-mode-circle light-mode-box-shadow') {
    $container.className = ('container dark-mode-background');
    $circle.className = ('circle dark-mode-circle dark-mode-box-shadow');
  } else { $circle.className = ('circle light-mode-circle light-mode-box-shadow');
    $container.className = ('container light-mode-background');
  }
}

$circle.addEventListener('click', changeColor)
