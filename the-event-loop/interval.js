let count = 3;
const countdownInterval = setInterval(countdown, [1000]);

function countdown() {
  if (count > 0) {
    console.log(count);
    count--;
  } else {
    count = 'Blast off!';
    console.log(count);
    clearInterval(countdownInterval);
  }
}
