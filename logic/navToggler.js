let menuBtn = document.getElementById('menu-btn');
let menuStrip = document.querySelector('.menuStrip');
let links = document.getElementsByClassName('link');
let drop = document.querySelector('.backdrop');

function toggler() {
  menuStrip.classList.toggle('expanded');
  drop.classList.toggle('backdrop-enabled');
}

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', ()=> {
    menuBtn.click();
  })
}

menuBtn.addEventListener('click', toggler);
drop.addEventListener('click', toggler)