let menuBtn = document.getElementById('menu-btn');
let menuStrip = document.querySelector('.menuStrip');
let links = document.getElementsByClassName('link');
let blink = document.getElementById('forth');

menuBtn.addEventListener('click', ()=> {
    menuStrip.classList.toggle('expanded');
});

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click',()=>{
        menuBtn.click();
    })
}

let blink_array = ['Front End Developer', 'ReactJS Developer', 'CS Student'];
typed_js_lite(blink, blink_array);

let html=document.getElementById('html-wrap');
let css=document.getElementById('css-wrap');
let js=document.getElementById('js-wrap');
let react=document.getElementById('react-wrap');
let mysql=document.getElementById('mysql-wrap');
let node = document.getElementById('node-wrap')
let redux = document.getElementById('redux-wrap')
let next = document.getElementById('next-wrap')

let yetToAdd=['html','css','js','react','mysql','node','redux','next'];

function Calc_Dist(element) {
    return (element.getBoundingClientRect().top - window.innerHeight + element.getBoundingClientRect().height );
}

function skillAnimator() {
    if (Calc_Dist(html)<10 && yetToAdd.includes('html')) {
        document.querySelector('#html').style.setProperty("--width", "80%");
        yetToAdd = yetToAdd.filter(item=>item != 'html');
    }
    if (Calc_Dist(css)<10 && yetToAdd.includes('css')) {
        document.querySelector('#css').style.setProperty("--width", "80%");
        yetToAdd = yetToAdd.filter(item=>item != 'css');
    }
    if (Calc_Dist(js)<10 && yetToAdd.includes('js')) {
        document.querySelector('#js').style.setProperty("--width", "80%");
        yetToAdd = yetToAdd.filter(item=>item != 'js');
    }
    if (Calc_Dist(react)<10 && yetToAdd.includes('react')) {
        document.querySelector('#react').style.setProperty("--width", "75%");
        yetToAdd = yetToAdd.filter(item=>item != 'react');
    }
    if (Calc_Dist(mysql)<10 && yetToAdd.includes('mysql')) {
        document.querySelector('#mysql').style.setProperty("--width", "60%");
        yetToAdd = yetToAdd.filter(item=>item != 'mysql');
    }
    if (Calc_Dist(node)<10 && yetToAdd.includes('node')) {
        document.querySelector('#node').style.setProperty("--width", "60%");
        yetToAdd = yetToAdd.filter(item=>item != 'node');
    }
    if (Calc_Dist(redux)<10 && yetToAdd.includes('redux')) {
        document.querySelector('#redux').style.setProperty("--width", "40%");
        yetToAdd = yetToAdd.filter(item=>item != 'redux');
    }
    if (Calc_Dist(next)<10 && yetToAdd.includes('next')) {
        document.querySelector('#next').style.setProperty("--width", "70%");
        yetToAdd = yetToAdd.filter(item=>item != 'next');
    }
    if (yetToAdd.length === 0) {
        document.removeEventListener('scroll',skillAnimator);
    }
}

document.addEventListener('scroll', skillAnimator);


async function git_fetch(){
    let res = await fetch('https://api.github.com/users/saurabhkhade');
    let data = await res.json();
    return data;
}

git_fetch().then(data=>{
    document.getElementById('git-repos').innerHTML=data.public_repos;
}).catch(()=>{
    document.getElementById('git-repos').innerHTML='Failed to fetch';
});