function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}
var $clickbutton = document.querySelector('.click-button');
$clickbutton.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}
var $hoverbutton = document.querySelector('.hover-button');
$hoverbutton.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}
var $doubleclickbutton = document.querySelector('.double-click-button');
$doubleclickbutton.addEventListener('dblclick', handleDoubleClick);
