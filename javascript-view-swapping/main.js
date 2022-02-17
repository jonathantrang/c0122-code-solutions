var $tabContainer = document.querySelector('.tab-container');
var $tabList = document.querySelectorAll('.tab');
var $viewList = document.querySelectorAll('.view');

function tabSwitch(event) {
  var currentTab = event.target;
  if (currentTab.matches('.tab')) {
    for (var i = 0; i < $tabList.length; i++) {
      if ($tabList[i] === currentTab) {
        $tabList[i].className = 'tab active';
      } else $tabList[i].className = 'tab';
    }
  }
  if (currentTab) {
    var dataView = event.target.getAttribute('data-view');
    for (var i = 0; i < $viewList.length; i++) {
      if ($viewList[i].getAttribute('data-view') === dataView) {
        $viewList[i].className = 'view';
      } else $viewList[i].className = 'view hidden';
    }
  }
}

$tabContainer.addEventListener('click', tabSwitch);
