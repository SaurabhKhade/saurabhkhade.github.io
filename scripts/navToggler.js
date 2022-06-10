let menuBtn = document.getElementById("menu-btn");
let menuStrip = document.querySelector(".menuStrip");
let links = document.getElementsByClassName("link");
let drop = document.querySelector(".backdrop");

function toggler() {
  if (window.innerWidth > 775) {
    return;
  }
  menuStrip.classList.toggle("expanded");
  drop.classList.toggle("backdrop-enabled");
}

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    menuBtn.click();
  });
}

menuBtn.addEventListener("click", toggler);
drop.addEventListener("click", toggler);

let lastScrollTop = 0;
let scrollTimer = null;

function scrollHandler() {
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(() => {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      document.getElementById("nav").style.top = "-100%";
    } else {
      document.getElementById("nav").style.top = "0%";
    }
    lastScrollTop = st <= 0 ? 0 : st;
  }, 50);
}

document.addEventListener("scroll", scrollHandler, false);
