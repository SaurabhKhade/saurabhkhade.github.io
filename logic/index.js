let menuBtn = document.getElementById('menu-btn');
let menuStrip = document.querySelector('.menuStrip');
let links = document.getElementsByClassName('link');
let blink = document.getElementById('forth');
let drop = document.querySelector('.backdrop');

function toggler() {
  menuStrip.classList.toggle('expanded');
  drop.classList.toggle('backdrop-enabled');
}

menuBtn.addEventListener('click', toggler);
drop.addEventListener('click', toggler)

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', ()=> {
    menuBtn.click();
  })
}

let blink_array = ['Front End Developer', 'ReactJS Developer', 'CS Student'];
typed_js_lite(blink, blink_array);

let skills = ['html', 'css', 'js', 'react', 'mysql', 'node', 'redux', 'next'];
let skillWrapper = skills.map(i=>document.querySelector(`#${i}-wrap`));
let animatorId = 0;
let shownSet = new Set();

function Calc_Dist(element) {
  return (element.getBoundingClientRect().top - window.innerHeight + element.getBoundingClientRect().height);
}

function skillAnimator() {
  clearTimeout(animatorId);
  setTimeout(()=> {
    for (let i = 0; i < skills.length; i++) {
      if (Calc_Dist(skillWrapper[i]) < 10) {
        let text = document.querySelector(`#${skills[i]}-wrap .skillBar`).innerText;
        document.querySelector(`#${skills[i]}`).style.setProperty("--width", text);
        shownSet.add(skills[i]);
      }
    }
  },
    200);
  if (shownSet.size === skills.length) {
    document.removeEventListener('scroll', skillAnimator);
  }
}

document.addEventListener('scroll', skillAnimator);


async function git_fetch() {
  let res = await fetch('https://api.github.com/users/saurabhkhade');
  let data = await res.json();
  return data;
}

git_fetch().then(data=> {
  document.getElementById('git-repos').innerHTML = data.public_repos;
}).catch(()=> {
  document.getElementById('git-repos').innerHTML = 'Failed to fetch';
});