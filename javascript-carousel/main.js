var $container = document.querySelector('.container');
var $cheveronList = document.querySelectorAll('.cheveron');
var $carouselList = document.querySelectorAll('.carousel');
var carouselLength = $carouselList.length;
var $imageList = document.querySelectorAll('.pokemon');
var index = 0;

function carouselChange(event) {
  var currentCarousel = event.target;
  var pokemonView = event.target.getAttribute('data-view');

  if (currentCarousel.matches('.carousel')) {
    for (var i = 0; i < $carouselList.length; i++) {
      if ($carouselList[i] === currentCarousel) {
        index = i;
        $carouselList[i].className = 'carousel fas fa-circle';
      } else $carouselList[i].className = 'carousel far fa-circle';
    }
    for (i = 0; i < $imageList.length; i++) {
      if ($imageList[i].getAttribute('data-view') === pokemonView) {
        index = i;
        $imageList[i].className = 'pokemon';
      } else $imageList[i].className = 'pokemon hidden';
    }
  }
}

function cheveronRightInterval() {
    $carouselList[index].className = 'carousel far fa-circle';
    $imageList[index].className = 'pokemon hidden';
    if (index === carouselLength - 1) {
      index = 0;
      $carouselList[index].className = 'carousel fas fa-circle';
      $imageList[index].className = 'pokemon';
    } else {
      index++;
      $carouselList[index].className = 'carousel fas fa-circle';
      $imageList[index].className = 'pokemon';
    }
}

function cheveronChange(event) {
  var cheveronCheck = event.target;
  if (cheveronCheck === $cheveronList[0]) {
    $carouselList[index].className = 'carousel far fa-circle';
    $imageList[index].className = 'pokemon hidden'
    if (index === 0) {
      index = carouselLength - 1;
      $carouselList[index].className = 'carousel fas fa-circle';
      $imageList[index].className = 'pokemon';
    } else {
        index--;
        $carouselList[index].className = 'carousel fas fa-circle';
        $imageList[index].className = 'pokemon';
    }
  }
  if (cheveronCheck === $cheveronList[1]) {
    cheveronRightInterval();
  }
}

function pokemonInterval() {
  cheveronRightInterval();
}


$container.addEventListener('click', carouselChange);
$container.addEventListener('click', cheveronChange);
var intervalID = setInterval(pokemonInterval, 3000);
