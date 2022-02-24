var $container = document.querySelector('.container');
var $cheveronList = document.querySelectorAll('.cheveron');
var $carouselList = document.querySelectorAll('.carousel');
var $imageList = document.querySelectorAll('.pokemon');

function carouselChange(event) {
  var currentCarousel = event.target;
  var pokemonView = event.target.getAttribute('data-view');

  if (currentCarousel.matches('.carousel')) {
    for (var i = 0; i < $carouselList.length; i++) {
      if ($carouselList[i] === currentCarousel) {
        $carouselList[i].className = 'carousel fas fa-circle';
      } else $carouselList[i].className = 'carousel far fa-circle';
    }
    for (i = 0; i < $imageList.length; i++) {
      if ($imageList[i].getAttribute('data-view') === pokemonView) {
        $imageList[i].className = 'pokemon';
      } else $imageList[i].className = 'pokemon hidden';
    }
  }
}

function cheveronChange(event) {
  var cheveronCheck = event.target;
  var currentCarousel = event.target;

  var pokemonView = event.target.getAttribute('data-view');

  if (cheveronCheck === $cheveronList[0]) {
    for (var i = $carouselList.length - 1; i >= 0; i--) {
      var carouselView.-[i]
      if (carouselView[i] === currentCarousel) {
        $carouselList[i].className = 'carousel fas fa-circle';
      } else $carouselList[i].className = 'carousel far fa-circle';
    }
  // } else if (cheveronCheck === $cheveronList[1] && currentCarousel.matches('carousel')) {
  //   for (i = 0; i < $carouselList.length; i++) {
  //     if ($carouselList[i] === currentCarousel) {
  //       $carouselList[i].className = 'carousel fas fa-circle';
  //     } else $carouselList[i].className = 'carousel far fa-circle';
  //   }
  // }
  }
}

$container.addEventListener('click', carouselChange);
$container.addEventListener('click', cheveronChange);

// add a function that goes back one carousel or forward one carousel depending on which cheveron is clicked
