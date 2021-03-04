let menuBtn = document.getElementById('menu-btn');
let menuStrip = document.querySelector('.menuStrip');
let links = document.getElementsByClassName('link');
let blink = document.getElementById('forth');

menuBtn.addEventListener('click', ()=> {
    menuStrip.classList.toggle('expanded');
});

let blink_array = ['Front-End Developer', 'React JS Developer', 'CS Student'];
typed_js_lite(blink, blink_array);

let html=document.getElementById('html-wrap');
let css=document.getElementById('css-wrap');
let js=document.getElementById('js-wrap');
let react=document.getElementById('react-wrap');
let python=document.getElementById('python-wrap');

let yetToAdd=['html','css','js','react','python'];

function Calc_Dist(element) {
    return (element.getBoundingClientRect().top - window.innerHeight + element.getBoundingClientRect().height );
}

function skillAnimator() {
    if (Calc_Dist(html)<10 && yetToAdd.includes('html')) {
        document.querySelector('#about #skillBars .skillBar #html').style.setProperty("--width", "80%");
        yetToAdd = yetToAdd.filter(item=>item != 'html');
    }
    if (Calc_Dist(css)<10 && yetToAdd.includes('css')) {
        document.querySelector('#about #skillBars .skillBar #css').style.setProperty("--width", "80%");
        yetToAdd = yetToAdd.filter(item=>item != 'css');
    }
    if (Calc_Dist(js)<10 && yetToAdd.includes('js')) {
        document.querySelector('#about #skillBars .skillBar #js').style.setProperty("--width", "70%");
        yetToAdd = yetToAdd.filter(item=>item != 'js');
    }
    if (Calc_Dist(react)<10 && yetToAdd.includes('react')) {
        document.querySelector('#about #skillBars .skillBar #react').style.setProperty("--width", "60%");
        yetToAdd = yetToAdd.filter(item=>item != 'react');
    }
    if (Calc_Dist(python)<10 && yetToAdd.includes('python')) {
        document.querySelector('#about #skillBars .skillBar #python').style.setProperty("--width", "50%");
        yetToAdd = yetToAdd.filter(item=>item != 'python');
    }
    if (yetToAdd.length === 0) {
        document.removeEventListener('scroll',skillAnimator);
    }
}

document.addEventListener('scroll', skillAnimator);

document.getElementById('form').addEventListener('submit',e=>{
    e.preventDefault();
    let name=document.getElementById('name');
    let email=document.getElementById('email');
    let subject=document.getElementById('subject');
    let message=document.getElementById('message');
    addData(name.value,email.value,subject.value,message.value)
    .then(()=>{
        alert('Response Submitted Successfully!');
        [name.value,email.value,subject.value,message.value]=['','','',''];
    })
    .catch(()=>{
        console.log(err);
        alert('Failed to submit the response');
    });
});

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