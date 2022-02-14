var $contactForm = document.querySelector('form[id="contact-form"]')

function formSubmit(event) {
  event.preventDefault();
  var mySubmit = new Object();
  mySubmit.name = event.target.name.value;
  mySubmit.email = event.target.email.value;
  mySubmit.message = event.target.message.value;
  console.log('messageData:', mySubmit);
}

$contactForm.addEventListener('submit', formSubmit);
