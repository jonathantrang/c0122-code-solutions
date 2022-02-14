var $inputName = document.querySelector('input[name="name"]');
var $inputEmail = document.querySelector('input[name="email"]');
var $textArea = document.querySelector('textarea[name="message"]');

function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('value of name:', event.target.value);
}

$inputName.addEventListener('focus', handleFocus);
$inputName.addEventListener('blur', handleBlur);
$inputName.addEventListener('input', handleInput);
