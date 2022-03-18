const burgerId = document.getElementById('burger');

function menu() {
  const nav = document.getElementById('menu');
  nav.style.width = '3vw';
}

burgerId.addEventListener('click', menu());
