var count = 4;

function countdown() {
  count--;
  if (count > 0) {
    document.querySelector('h1').textContent = count;
  } else if (count === 0) {
    document.querySelector('h1').textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countdownID);
  }
}

var countdownID = setInterval(countdown, 1000);
