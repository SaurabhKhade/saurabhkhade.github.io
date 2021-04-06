mapboxgl.accessToken = 'pk.eyJ1Ijoia2hhZGVzYXVyYWJoIiwiYSI6ImNrbjVnMjNmdjAzc2Yyb254NnNyb3RxeGwifQ.W9LU5ueusnWDrf6GTxxK7A';

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 5
});

let marker = new mapboxgl.Marker()
.setLngLat([74.371027, 15.976736])
.addTo(map);
map.setCenter( [74.371027, 15.976736]);


let firebaseConfig = {
    apiKey: "AIzaSyDnU-S26aLhpzKiw6u2fjopOH1pPlSdhus",
    authDomain: "portfolio-6d016.firebaseapp.com",
    projectId: "portfolio-6d016",
    storageBucket: "portfolio-6d016.appspot.com",
    messagingSenderId: "411438756462",
    appId: "1:411438756462:web:f6990e3e1c7ca4b7696c7f"
};

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

async function addData(name, email, subject, message) {
    let res = await db.collection("contact").doc(email).set({
        name: name,
        email: email,
        subject: subject,
        message: message
    });
    return res;
}

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
