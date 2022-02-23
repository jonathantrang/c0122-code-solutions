var title = document.querySelector('h1').textContent;

function greeting() {
  document.querySelector('h1').textContent = 'Hello There';
}

setTimeout(greeting, 2000, title);
